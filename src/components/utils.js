export const isEmail = (email) => {
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
};

export const setLocalStorageData = (key, data) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
}

export const getLocalStorageData = (key) => {
    const jsonData = localStorage.getItem(key);
    const data = JSON.parse(jsonData);
    return data;
}
