import { DUMMY_DATA } from "../store/DATA";
import RecipeItem from "../components/recipe/recipeItem";

function Home() {

    return (
        <div className="home">
            <h1>Home Page</h1>

            <div className="home-recipe-list-container">
                {DUMMY_DATA.map((item) => <RecipeItem {...item} />)}
            </div>
        </div>
    );
}

export default Home;