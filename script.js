const apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

let listMeals;

const getMeal = async () => {
    try {
        const response = await axios.get(`${apiURL}`);
        listMeals = response.data;
        renderMeal(listMeals);
    } catch (errors) {
        console.log(errors);
    }
};

getMeal();

function renderMeal(foods){
    axios.get(apiURL)
        .then(function(response){
            listMeals = response.data;
            console.log(listMeals);
            var contentMeal = document.querySelector('.content-meal');
            var htmls = listMeals.meals.map(function(meal){
                return `
                <div class="card">
                    <div class="content-meal">
                        <img class="meal-img" src="${meal.strMealThumb}" alt="">
                        <p class="heading-meal">${meal.strMeal}</p>
                    </div>
                </div>
                `
            })
            contentMeal.innerHTML = htmls.join('');
        })
        .catch(function(error){
            console.log(error);
        })
}