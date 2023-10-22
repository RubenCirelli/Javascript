function printName(){
    var helloName = "Hello John";
        function inner(){
            return helloName;
        }
    console.log(inner());
}

setTimeout(() => {
    printName();
},"1000");