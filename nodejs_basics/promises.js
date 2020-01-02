function doStuff(data, callback) {
    callback("done");
}

doStuff(true, (result) => console.log(result));

function doStuff(data) {
    return new Promise((resolve, reject) => {
        let successMessage = {
            status: 'success',
            message: 'All is well!'
        };

        let errorMessage = {
            status: 'error',
            message: 'Oops, there was an error!'
        };

        if (typeof data === 'boolean' && data === true) {
            resolve(successMessage);
        } else {
            reject(errorMessage);
        }
    });
}

// success message will be displayed
doStuff(true).then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
);

// error message will be displayed
doStuff(false).then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
);


// chained for true and then true
doStuff(true).then(
    () => {
        console.log("First doStuff resolved");
    }
).then(
    () => {
        console.log("Second doStuff resolved");
    }
).catch(
    () => {
        console.log("An error occured");
    }
);

// chained for true and then false

doStuff(true).then(
    () => {
        let a = false;
        console.log("First doStuff resolved");
        return doStuff(a);
    }
).then(
    () => {
        console.log("Second doStuff resolved");
    }
).catch(
    () => {
        console.log("An error occured");
    }
);


