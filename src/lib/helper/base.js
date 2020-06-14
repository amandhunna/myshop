import axios from 'axios';
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
        if (response.data.status === 200) {
            return response.data
        } else {
            return response
        }
    }

    getToken() {
        const token = localStorage.getItem('sos_token');
        return token;
    }

    isTokenExpired() {
        const decoded = jwtDecode(this.getToken());
        const isExpired = Date.now() / 1000 > decoded.exp;
        return isExpired;
    };

    async requestAPI(requestData) {
        const { url, data, method = 'Post', token } = requestData;
        const formatData = {
            url,
            data,
            method,
            headers: { ...token ? { Authorization: `Bearer ${token}` } : {} }
        }
        logger.info("requestAPI foramtData", formatData)
        try {
            const response = await axios({ ...formatData });
            const responseData = helper.formatResponse(response);
            return responseData;

        } catch (error) {
            // logger.error("axios error", error);
            return error;
        }
    }
}
export default new Helper();
