import React from "react";
import { Link } from "react-router-dom";


// structure for the navbar props
interface NavbarProps {
    
}


const Navbar: React.FC<NavbarProps> = () => {
    
    console.log("navbar")

    return (
        <>
            {/* Navbar heading as link */}
            <nav className="navbar navbar-light bg-light sticky-top">
                <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold' }}>
                    ToDo
                </Link>

                {/* to add new task */}
                <Link className="float-right" to="/add">
                    Add Task
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
