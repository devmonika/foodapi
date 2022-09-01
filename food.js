const getFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}


const displayFood = meals => {

    const mealsContainer = document.getElementById('food-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="getMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchFood = () => {
    const searchfld = document.getElementById('search-fld');
    const searchText = searchfld.value;
    getFood(searchText);
    searchfld.value = '';
}


const getMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}


const displayMealDetails = () => {
    const detailesContainer = document.getElementById('detailes-container');
    detailesContainer.innerHTML = '';
    const detailesDiv = document.createElement('div');
    detailesDiv.classList.add('card');
    detailesDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
`;
    detailesContainer.appendChild(detailesDiv);
}



getFood();