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
    }
}
export default helper;
