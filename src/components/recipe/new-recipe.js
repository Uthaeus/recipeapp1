import { useForm } from "react-hook-form";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage'
import { v4 } from "uuid";

import { storage } from "../../firebase";

function NewRecipe() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [image, setImage] = useState(null);
    const [newRecipeImages, setNewRecipeImages] = useState([]);

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

    const imageChangeHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const addImageHandler = () => {
        if (image === null) return;

        const imageRef = ref(storage, `images/${image.name + v4()}`);

        uploadBytes(imageRef, image).then(() => {
            alert('image uploaded');
        })
    }

    const submitHandler = (data) => {
        console.log(data, ingredients);
    };

    return (
        <div className="new-recipe">
            <div className="new-recipe-left">
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
                        <label id='image'>Add an Image</label>
                        <input type='file' className="form-control" id='image' onChange={imageChangeHandler} />
                        <p className="add-image-btn" onClick={addImageHandler}>Add Image</p>
                    </div>

                    <div className="form-group">
                        <button className="btn-primary" type='submit'>Add Recipe</button>
                    </div>
                </form>
            </div>

            <div className="new-recipe-right">
                <div className="new-recipe-images-container">
                    {newRecipeImages.map(i => <img src={i} alt={i.name} className="new-recipe-image" />)}
                </div>
            </div>
        </div>
    );
}

export default NewRecipe;