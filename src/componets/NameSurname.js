import React from "react";
import { getUsers } from "../servises/ApiService";

export default class NameSurname extends React.Component {
    state = {
        persons: [],
    }
    
    async componentDidMount() {
         const res = await getUsers()
       
        this.setState({ persons: res });
        
    }

    render(){
        return (
        
            <form className='nameSurname'>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    

                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"/>
                    </div>

                    <button type="button" className="btn btn-success">Change </button>
                </div>
            </form>
        
            )
    }
}
