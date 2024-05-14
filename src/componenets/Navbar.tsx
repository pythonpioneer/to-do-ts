import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllToDos } from "../redux/services/todo.services";


// structure for the navbar props
interface NavbarProps {
    
}


const Navbar: React.FC<NavbarProps> = () => {

    const dispatch = useDispatch();

    // to fetch all todos
    useEffect(() => {
        dispatch(fetchAllToDos() as any);
        
        return () => {
            console.log("effect return")
        }
    }, [dispatch]);

    
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
