import React, { Component } from "react";

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
        if(e.target.id === 'nameInput') {
            this.setState({
                name: e.target.value, 
            });
        } else if(e.target.id === 'emailInput') {
            this.setState({
                email: e.target.value, 
            });
        } else {
            this.setState({
                phone: e.target.value, 
            });
        }
        
    };

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
            <div>
                <form>
                    <label>Name</label>
                    <input
                    onChange={this.handleChange} 
                    value={name}
                    type='text'
                    id='nameInput'
                    />

                    <label>Email</label>
                    <input
                    onChange={this.handleChange} 
                    value={email}
                    type='email'
                    id='emailInput'
                    />

                    <label>Phone Number</label>
                    <input
                    onChange={this.handleChange} 
                    value={phone}
                    type='text'
                    id='phoneInput'
                    />
                </form>
                <button onClick={this.handleSubmit}>Submit</button>
                <h1>{JSON.stringify(info)}</h1>
            </div>
        );
    };
};

export default Information;