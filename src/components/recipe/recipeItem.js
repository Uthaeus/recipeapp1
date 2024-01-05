import { Link } from "react-router-dom";

import img from '../../assets/images/space-main.jpg'

function RecipeItem(props) {
    const image = props.image || img;
    return (
        <Link to={`/${props.id}`} className="recipe-item">
            <image 
                src={`url(${image})`}
                className="recipe-item-image"
                width='100%'
            />

            <div className="recipe-item-details">
                <h2 className="recipe-item-title">{props.title}</h2>
                <p className="recipe-item-subtitle">{props.time}</p>
            </div>
        </Link>

    );
}

export default RecipeItem;