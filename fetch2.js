async function postData(url) {
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title: "Document",
            completed: true,
        })
    });
    let data = await response.json();
    return data
}

postData("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response))
