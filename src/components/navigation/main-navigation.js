import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <NavLink to='/'>Home</NavLink>
            </div>

            <div className="main-navigation-right">
                <NavLink to='/auth/login'>Login</NavLink>
                <NavLink to='/auth/signup'>Sign Up</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;