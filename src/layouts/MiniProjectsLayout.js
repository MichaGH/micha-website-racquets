import { NavLink, Outlet } from "react-router-dom";
import './MiniProjectsLayout.css';
const MiniProjectsLayout = () => {
    return (
        <div className="miniprojects">
            <div className="miniprojects-navbar">
                <NavLink to=''>Intro</NavLink>
                <NavLink to='coinflip'>Coinflip</NavLink>
                <NavLink to='dice'>Dice toss</NavLink>
                <NavLink to='calculator'>Calculator</NavLink>
                <NavLink to='guessthenumber'>Guess The Number</NavLink>
                <NavLink to='guessthecolor'>Guess The Color</NavLink>
            </div>
            <div className="miniprojects-content">
                <Outlet />
            </div>

        </div>
    );
}
 
export default MiniProjectsLayout;