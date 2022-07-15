import React, { Component } from "react";
import '../styles/Information.css'

class Information extends Component {
    constructor(props) {
        super(props);
    };

    handleChange = (e) => {
        this.props.handleChange(e);
    };

    handleSubmit = (e) => {
        this.props.handleSubmit(e);
    };

    render() {
        const { name, email, phone } = this.props;

        return (
            <div className='Information'>
                <h2>Personal Information</h2>
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
                    type='tel'
                    pattern="[0-9]{3}-[0-9]{3}[0-9]{4}"
                    id='phoneInput'
                    required
                    />
                </form>
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        );
    };
};

export default Information;