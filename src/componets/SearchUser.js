import React from "react";
import { getUsers } from "../services/ApiService"

import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";

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


    async componentDidMount() {
         const res = await getUsers()
         this.setState({ persons: res });
    }

    change = (event) => {
        let eventValues = JSON.parse(event.target.value);
        const personality = {
            first_name: eventValues.first_name,
            last_name: eventValues.last_name,
            id: eventValues.id,
        };
        this.setState({user_details: personality});
    }

    userDetailsCallback (dataFromChild) {
        console.log('emmit info', dataFromChild)
        const res = getUsers()
        this.setState({ persons: res });
    }

    render(){
        let { id, first_name, last_name } = this.state.user_details;
        return (
            <div>
                <form>
                    <div className="input-group">
                        <div className="custom-file">

                            <select
                                id="users"
                                onChange={this.change}
                                defaultValue={'LABEL'}
                            > <option value="LABEL" disabled>Choose a user</option>
                                { this.state.persons.map(person =>
                                <option
                                    key={person.id}
                                    value={JSON.stringify(person)}
                                >
                                    {person.first_name} {person.last_name}
                                </option>)
                                }
                            </select>

                        </div>
                    </div>
                </form>
                <UserDetails
                    callbackFromUserDetails={this.userDetailsCallback}
                    id={id}
                    first_name={first_name}
                    last_name={last_name}
                />

                { id ? <UserPosts user_id={ id }  /> : <div>nothing</div>}
            </div>
        )
    }
}

