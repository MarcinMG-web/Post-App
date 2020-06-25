import React, { Fragment } from "react";

export const Post = () => {
    return (
        <Fragment>
            <div className="card">
                {/* POST */}
                <div className="card-header">
                POST 1 <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat metus id ante feugiat iaculis. Curabitur pulvinar rutrum vestibulum. Phasellus vitae tincidunt turpis, eget maximus elit. Nam vehicula ut felis a tincidunt. Proin a ultrices tellus. Donec at augue in ligula aliquet mollis. Aliquam erat volutpat. Nunc est augue, tempor id porttitor nec, facilisis nec nibh. Vestibulum scelerisque nisl eu mi efficitur tincidunt. Etiam tincidunt, risus et volutpat aliquam, arcu diam pretium odio, a pellentesque erat urna vel tellus.
                    
                </div>
                <button type="button" className="btn btn-primary">More Post </button>

              
               
            </div>

            {/* Coment */}
            <div className="card-body">
                   
                    <p className="card-text">Coment post <br />
                    Vestibulum scelerisque nisl eu mi efficitur tincidunt. Etiam tincidunt, risus et volutpat aliquam, arcu diam pretium odio, a pellentesque erat urna vel tellus.</p>
                   
                    
                </div>
      
        </Fragment>
    )
}
