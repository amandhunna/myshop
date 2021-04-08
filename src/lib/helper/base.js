import axios from 'axios';
import qs from 'qs';
import jwtDecode from 'jwt-decode';
import logger from './logger';
class Helper {
    randomKey(key) { return key + Math.random() }

    requiredFields(data, reqField) {
        const value = reqField.filter(item => {
            if (data[item] === undefined) return item;
            return false;
        });
        return value;
    }

    formatResponse(response) {
        const { status } = response.data;
        if (status === 200 || status === 201) {
            return response.data
        } else {
            return response
        }
    }

    formatApiResponse(response) {
        const { status } = response;
        if (status === 200 || status === 201) {
            return response.data || response.error;
        } else {
            return response
        }
    }

    getToken(type = 'sos_token') {
        const token = localStorage.getItem(type);
        if (!token) return false;
        JSON.stringify(token)
        return token;
    }

    decodeToken(token) {
        const decoded = jwtDecode(token);
        return decoded;
    }

    isTokenExpired(tokenExp) {
        if (!tokenExp) return true;
        const isExpired = Date.now() / 1000 > tokenExp;
        return isExpired;
    };

    isValidLoginToken() {
        const token = this.getToken();
        console.log(token, !token)
        if (!token) return false;

        const decodedToken = this.decodeToken(token)
        const validToken = !this.isTokenExpired(decodedToken.exp);

        return validToken;

    }

    async requestAPI(requestData) {
        const { url, data, method = 'Post', token } = requestData;
        const formatData = {
            url,
            data,
            method,
            headers: {
                "Content-Type": "application/json",
                ...token ? { Authorization: `Bearer ${token.slice(1, token.length - 1)}` } : {}
            }
        }
        logger.info("requestAPI foramtData", formatData)
        try {
            const response = await axios({ ...formatData });
            const responseData = this.formatResponse(response);
            return responseData;

        } catch (error) {
            // logger.error("axios error", error);
            return error;
        }
    }
}
export default new Helper();
