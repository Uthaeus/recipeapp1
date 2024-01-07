import { Link } from "react-router-dom";

import { DUMMY_DATA } from "../store/DATA";
import RecipeItem from "../components/recipe/recipeItem";

function Home() {

    return (
        <div className="home">
            <h1 className="home-title">Home Page</h1>

            <Link to='/new'>Create New Recipe</Link>

            <div className="home-recipe-list-container">
                {DUMMY_DATA.map((item) => <RecipeItem {...item} key={item.id} />)}
            </div>
        </div>
    );
}

export default Home; 