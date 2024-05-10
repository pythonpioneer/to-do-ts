import React from "react";
import { Link } from "react-router-dom";


// structure for the navbar props
interface NavbarProps {
    
}


const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            {/* Navbar heading as link */}
            <nav className="navbar navbar-light bg-light sticky-top">
                <a className="navbar-brand" href="#" style={{ fontWeight: 'bold' }}>
                    Navbar
                </a>

                {/* to add new task */}
                <Link className="float-right" to="/add">
                    Add Task
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
