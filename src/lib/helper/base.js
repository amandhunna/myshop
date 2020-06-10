const helper = {
    randomKey: (key) => key + Math.random(),
    requiredFields: (data, reqField) => {
        const value = reqField.filter(item => {
            if (data[item] === undefined) return item;
            return false;
        });
        return value;
    },
}
export default helper;
