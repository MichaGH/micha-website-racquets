import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <div className="root-layout-header">
                <div className="page-header">
                    <h1>Micha Website</h1>
                    <h2>React - jsnode testing </h2>
                </div>
                <div className="page-navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="racquets">Racquets</NavLink>
                    <NavLink to="miniprojects">Miniprojects</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                </div>
            </div>
            <div className="root-content">
                <Outlet />
            </div>
            <div className="root-footer">
                dog
            </div>
        </div>
        
        
    );
}
 
export default RootLayout;
