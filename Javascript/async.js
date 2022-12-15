const getData = (data) => {
    return new Promise((resolve, reject) => {
        console.log("Getting data...");

        if(data) {
            resolve("Data received");
        } else {
            reject("No data received");
        }
    });
};

const cleanData = (receivedData) => {
    return new Promise((resolve, reject) => {
        console.log("Cleaning data...");

        if(receivedData) {
            resolve("Data cleaned");
        } else {
            reject("No data cleaned");
        }
    });
};

getData(true)
    .then(response => {
        console.log(response);
        return cleanData(true)
           .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }).catch(error => {
        console.log(error);
    });