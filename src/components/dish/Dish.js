export default class Dish {
    constructor(dishId, dishName, dishPrice, dishWeight, ingredients, photos) {
        this.dishId = dishId;
        this.dishName = dishName;
        this.dishPrice = dishPrice;
        this.dishWeight = dishWeight;
        this.ingredients = ingredients;
        this.photos = photos;
    }

    addIngredient(id, name, price) {
        //code for add ingredient in backend
    }

    updateIngredient(id, name, price) {
        //code for update ingredient in backend
    }

    removeIngredient(id) {
        //code for remove ingredient in backend
    }

    update(dishName, dishPrice, dishWeight, ingredients, photos) {
        //Code for update Dish
    }

    // remove(id){
    //     Code for remove Dish
    // }
}