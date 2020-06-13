import axios from 'axios';
const helper = {
    randomKey: (key) => key + Math.random(),
    requiredFields: (data, reqField) => {
        const value = reqField.filter(item => {
            if (data[item] === undefined) return item;
            return false;
        });
        return value;
    },
    formatResponse: (response) => {
        if (response.data.status === 200) {
            return response.data
        } else {
            return response.data
        }
    },
    requestAPI: async (requestData) => {
        const { url, data, method = 'Post' } = requestData;
        try {
            const response = await axios({
                url,
                data,
                method
            });
            const responseData = helper.formatResponse(response);
            return responseData;

        } catch (error) {
            // logger.error("axios error", error);
            return error;
        }
    }
}
export default helper;
