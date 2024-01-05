import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { DUMMY_DATA } from "../../store/DATA";

function RecipeDetail() {
    const param = useParams();
    const [recipe, setRecipe] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        DUMMY_DATA.forEach(function(item) {
            if (item.id === +param.id) {
                setRecipe(item);
            }
        });
        setIsLoading(false);
    }, [param.id]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="recipe-detail">
            <h1>{recipe?.title}</h1>
        </div>
    );
}

export default RecipeDetail;