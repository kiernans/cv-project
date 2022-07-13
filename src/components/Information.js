import React, { Component } from "react";
import '../styles/Information.css'

class Information extends Component {
    constructor() {
        super();
        
        this.state = {
            name: '',
            email: '',
            phone: '',
            info: {
                name: '',
                email: '',
                phone: ''
            },

        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            info: {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
            },
            name: '',
            email: '',
            phone: '',
        });
    };

    render() {
        const { info, name, email, phone } = this.state;

        return (
            <div className='Information'>
                <form>
                    <label>Name</label>
                    <input
                    onChange={this.handleChange}
                    name='name' 
                    value={name}
                    type='text'
                    id='nameInput'
                    />

                    <label>Email</label>
                    <input
                    onChange={this.handleChange} 
                    name='email'
                    value={email}
                    type='email'
                    id='emailInput'
                    />

                    <label>Phone Number</label>
                    <input
                    onChange={this.handleChange} 
                    name='phone'
                    value={phone}
                    type='text'
                    id='phoneInput'
                    />
                </form>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    };
};

export default Information;