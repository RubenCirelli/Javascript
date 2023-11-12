 const isLogged = true;

 const firstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random());
        } else {
            reject(new Error('User is not logged in'));
        }
    });
};

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({name: "John", age: 24});
        } else {
            reject(new Error('Number is not greater than 0.5'));
        }
    });
};

firstPromise(isLogged)
    .then((number) => {
        return secondPromise(number);
    })
    .then((data) => {
        console.log(data); // {name: "John", age: 24}
    })
    .catch((error) => {
        console.error(error);
    });