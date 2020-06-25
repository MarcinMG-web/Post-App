import React, { Fragment } from "react";

export const AddComent = () => {
    return (
        <Fragment>
            <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" className='lableComent'>Your Coment</label>
                    
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                    <button type="button" className="btn btn-success">Add Coment </button>
            </div>
        </Fragment>
    )
}
