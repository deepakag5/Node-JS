function doStuff(data, callback) {
    callback("done");
}

doStuff(true, (result) => console.log(result));

function doStuff(data) {
    return new Promise((resolve, reject) => {

        if (typeof data === 'boolean' && data === true) {
            resolve(successMessage);
        } else {
            reject(errorMessage);
        }
    });
}

