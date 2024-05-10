// importing requirements
import React from "react";
import { Link, useNavigate } from "react-router-dom";


// form to add todo
const AddToDo: React.FC = () => {

    // handle the prev page 
    const navigate = useNavigate();
    const goToPrevPage = () => {
        navigate(-1);
    }


    return (
        <>
            <form>
                <div className="container">
                    <h1 className="mt-5 mb-4 text-center">Add Your Task</h1>
                    <div className="mb-3">
                        <textarea className="form-control" rows={6}></textarea>
                    </div>

                    <div className="d-flex justify-content-between">
                        {/* back to prev page */}
                        <button type="button" className="btn btn-primary" onClick={goToPrevPage}>
                            Back
                        </button>

                        {/* submit and go to home */}
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddToDo;
