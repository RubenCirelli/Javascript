// fetch ("https://www.themealdb.com/api/json/v1/1/random.php")
//     .then ((val) => console.log(val.json))
//     .catch ((err) => console.error(err))

async function getData() {
    let get = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await get.json()
    let arr = []
    
    data.meals.forEach(element => {

        arr = [
            element.strIngredient1,
            element.strIngredient2,
            element.strIngredient3,
            element.strIngredient4,
        ]
    });
  console.log(arr.join(',')); 
  
}


getData();
