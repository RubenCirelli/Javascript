class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

const firstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random());
        } else {
            reject(new CustomError('User is not logged in'));
        }
    });
};

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({name: "John", age: 24});
        } else {
            reject(new CustomError('Number is not greater than 0.5'));
        }
    });
};

const isLogged = true;

firstPromise(isLogged)
    .then((number) => {
        return secondPromise(number);
    })
    .then((data) => {
        console.log(data); // {name: "John", age: 24}
    })
    .catch((error) => {
        if (error instanceof CustomError) {
            console.error(`CustomError: ${error.message}`);
        } else {
            console.error(error);
        }
    })
    .finally(() => {
        console.log('Promise chain completed');
    });

