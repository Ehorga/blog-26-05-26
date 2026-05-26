import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
