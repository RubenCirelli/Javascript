function multiplyByTwo(value) {
  let number = 2;
    function inner(){
      return number*value;
    }
    console.log(inner());
}
multiplyByTwo(4);