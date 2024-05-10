// importing requirements
import React from "react";
import { Link, useNavigate } from "react-router-dom";


// form to add todo
const AddToDo: React.FC = () => {

    // to navigate to pages
    const navigate = useNavigate();

    // handle the prev page 
    const goToPrevPage = () => {
        navigate(-1);
    }

    // to handle the form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // fetch the textarea data
        const formData = new FormData(e.currentTarget);
        const textareaValue = formData.get("todo") as string;

        console.log(textareaValue)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1 className="mt-5 mb-4 text-center">Add Your Task</h1>
                    <div className="mb-3">
                        <textarea name="todo" className="form-control" rows={6}></textarea>
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
