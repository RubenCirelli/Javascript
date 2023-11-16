async function getData(url){
    let response = await fetch(url);
    let data = await response.json();
    return data
}

getData("https://jsonplaceholder.typicode.com/todos")
    .then((val) => console.log(val))
    .catch((err) => console.error(err))
