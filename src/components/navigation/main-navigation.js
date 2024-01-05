import { NavLink } from "react-router-dom";

function MainNavigation() {

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <NavLink to='/' className={({isActive}) => isActive ? 'main-nav-link active-link' : 'main-nav-link'}>Home</NavLink>
            </div>

            <div className="main-navigation-right">
                <NavLink to='/auth/login' className={({isActive}) => isActive ? 'main-nav-link active-link' : 'main-nav-link'}>Login</NavLink>
                <NavLink to='/auth/signup' className={({isActive}) => isActive ? 'main-nav-link active-link' : 'main-nav-link'}>Sign Up</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;