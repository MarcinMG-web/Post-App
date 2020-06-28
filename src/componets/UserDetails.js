import React from "react";

import { updateUser } from "../services/ApiService";

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            fields: {
                first_name : '',
                last_name: ''
            }
        }
    }

    componentWillReceiveProps(nextProps, nextContext ) {
        this.setState({
            id: nextProps.id,
            fields: {
                first_name: nextProps.first_name,
                last_name: nextProps.last_name
            }
        })
    }

    handleSubmit = (event) => {
        this.props.callbackFromUserDetails('emitted fields', this.state.fields)
        updateUser(this.state.id, {...this.state.fields});
        event.preventDefault();
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState(prevState => {
            prevState.fields[name] =  value;
            return {
                fields: prevState.fields
            };
        })
    }

    render() {
        return (
            <form className='nameSurname' onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name="first_name" placeholder="First name" onChange={this.handleChange} value={this.state.fields.first_name || '' } />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" name="last_name" placeholder="Last name" onChange={this.handleChange} value={this.state.fields.last_name || '' }/>
                    </div>
                    
                </div>
                <input type="submit" id="btn-submit" value="Submit" />
            </form>
        )
    }
}
