import React from "react";
import axios from "axios";
import { getUsers } from "../servises/ApiService"
// import { NameSurname } from "../servises/NameSurname"

export default class SearchUser extends React.Component {
    state = {
        persons: [],
        first_name: '',
        last_name: '',
        user_id: 0,
        user_details: 
        {
           
        },
    }
    // https://jsonplaceholder.typicode.com/users
    async componentDidMount() {
         const res = await getUsers()
        // axios.get('https://gorest.co.in/public-api/users?_format=json&access-token=rrDyybBYMHk90mKdkFuKLpWRNs8CnrvYn0FY').then(res => {
        //     console.log(res);
            this.setState({ persons: res });
        // });
    }

    change = (event) => {
       console.log(event.target.value[0]);
        const personality = {
            first_name: event.target.value.first_name,
            last_name: event.target.value.last_name,
            id: event.target.value.id,
        };

        this.setState({user_details: personality});
    }

    render(){
        console.log(this.state.user_details)
        return (
            <div>
                <form>
                            
                    <div className="input-group ">
                        <div className="custom-file">
                        
                            <select onChange={this.change}>
                            {this.state.persons.map(person => <option key={person.id} value = {person}>
                                {person.first_name} {person.last_name}</option>)}
                            </select>;
                        
                        </div>
    
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">Select</button>
                        </div>
                    </div>
                    
                    
    
                </form>
                
            </div>
    
        )
    }
}

