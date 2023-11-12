

let thePromise = new Promise ((resolve, reject) => {
    const number = 5;
    if (number < 10){
        reject(number);
    } else {
        resolve(number);
    };
})

thePromise
    .then((number) => console.log(number))
    .catch((err) => console.error(err))