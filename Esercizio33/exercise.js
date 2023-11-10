// function printAsyncName(callback, name) {
//     setTimeout(callback, 1000);
//     setTimeout(function() {
//         console.log(name);
//     }, 2000);
// }

// printAsyncName(function() {
//     console.log("Hello");
// }, "Your Name");

function printAsyncName(callback, name) {
    var counter = 0;
    var intervalId = setInterval(function() {
        counter++;
        if (counter === 1) {
            callback();
        } else if (counter === 2) {
            console.log(name);
        }
        if (counter >= 2) {
            clearInterval(intervalId);
        }
    }, 1000);
}

printAsyncName(function() {
    console.log("Hello");
}, "Your Name");