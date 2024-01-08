import { useForm } from "react-hook-form";
import { useState } from "react";

function NewRecipe() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const ingredientChangeHandler = e => {
        setIngredient(e.target.value);
    }

    const addIngredientHandler = () => {
        if (ingredient === '') {
            return;
        }
        setIngredients([...ingredients, ingredient]);
        setIngredient('');
    }

    const submitHandler = (data) => {
        console.log(data, ingredients);
    };

    return (
        <div className="new-recipe">
            <h2 className="new-recipe-title">Add a new recipe</h2>

            <form className="new-recipe-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label id='title'>Recipe Title</label>
                    <input 
                        type='text'
                        className="form-control"
                        {...register('title', {required: true})}
                    />
                    {errors.title && <span>field is required</span>}
                </div>

                <div className="form-group">
                    <label id='time'>Approx Time to Make</label>
                    <input 
                        type='text'
                        className="form-control"
                        {...register('time', {required: true})}
                    />
                    {errors.time && <span>field is required</span>}
                </div>

                <div className="ingredient-list">
                    {ingredients.length > 0 && (
                        ingredients.map(i => <p>{i}</p>)
                    )}
                </div>

                <div className="form-group">
                    <label id='ingredient'>Ingredient</label>
                    <input type='text' className="form-control" id='ingredient' value={ingredient} onChange={ingredientChangeHandler} />
                    <p className="add-ingredient-btn" onClick={addIngredientHandler}>Add Ingredient</p>
                </div>

                <div className="form-group">
                    <label id='instructions'>Instructions</label>
                    <textarea
                        className="form-control"
                        rows={8}
                        {...register('instructions', {required: true})}
                    />
                    {errors.instructions && <span>add some instructions you animal</span>}
                </div>

                <div className="form-group">
                    <button className="btn-primary" type='submit'>Add Recipe</button>
                </div>
            </form>
        </div>
    );
}

export default NewRecipe;