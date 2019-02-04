export const json = response => response.json();
export const status = response => {
    let success = response.status >= 200 && response.status < 300;
    return success ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
}