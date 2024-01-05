import { Link } from "react-router-dom";

function RecipeItem(params) {

    return (
        <Link to={`/${params.id}`} className="recipe-item">
            <image />

            <div className="recipe-item-details">
                <h2 className="recipe-item-title">{params.title}</h2>
                <p className="recipe-item-subtitle">{params.time}</p>
            </div>
        </Link>

    );
}

export default RecipeItem;