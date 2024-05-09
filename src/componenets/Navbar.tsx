import React from "react";


// structure for the navbar props
interface NavbarProps {
    
}


const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            {/* Navbar heading as link */}
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#" style={{ fontWeight: 'bold' }}>
                    Navbar
                </a>
            </nav>
        </>
    );
};

export default Navbar;
