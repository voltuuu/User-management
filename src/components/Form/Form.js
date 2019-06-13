import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            ipAddress: '',
            enableBtn: false,
            formValid: false,
            validatedFields: [],
            regex: {
                nickname: /[A-Za-z]+/,
                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                ipAddress: /\b(?:\d{1,3}\.){3}\d{1,3}\b/
            }
        }
    }

    onInput(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        this.checkField(event);
    }
    
    addToValidated(id) {
        if (!this.state.validatedFields.includes(id)) {
            this.state.validatedFields.push(id);
        }
    }

    checkValidated() {
        if (this.state.validatedFields.length === document.getElementsByClassName('form-input').length) {
            this.setState({
                enableBtn: true,
                formValid: true
            });
        }
    }

    runError(event) {
        document.querySelector('#error-'+event.target.id).style.display = 'block';
        document.querySelector('#error-'+event.target.id).classList.add('fadeIn');
        event.target.classList.add('input-error');
        this.setState({
            enableBtn: false
        });
    }

    runSuccess(event) {
        document.querySelector('#error-'+event.target.id).style.display = 'none';
        event.target.classList.remove('input-error');
        this.addToValidated(event.target.id);
        this.checkValidated();
    }

    checkField(event) {
        if (event.target.value.match(this.state.regex[event.target.id])) {
            this.runSuccess(event);
        } else {
            this.runError(event);
        }
    }

    passObj() {
        if (this.state.formValid) {
            this.props.callback({
                nickname: this.state.nickname,
                email: this.state.email,
                ipAddress: this.state.ipAddress
            });
        }
    }

    render() {
        return (
            <div className="form">
                <h2 className="form-header">Crypto users</h2>
                <div className="form-fields">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input"
                            name="nickname"
                            id="nickname"
                            required
                            value={this.state.nickname}
                            onChange={ (e)=>this.onInput(e) }
                        />
                        <label className="form-label" htmlFor="nickname">Nickname</label>
                        <div className="form-error" id="error-nickname">This field cannot be empty</div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input"
                            name="email"
                            id="email"
                            required
                            value={this.state.email}
                            onChange={ (e)=>this.onInput(e) }
                        />
                        <label className="form-label" htmlFor="email">Email</label>
                        <div className="form-error" id="error-email">Wrong email address format</div>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input"
                            value={this.state.ipAddress}
                            id="ipAddress"
                            required
                            onChange={ (e)=>this.onInput(e) }
                        />
                        <label className="form-label" htmlFor="ipAddress">IP address</label>
                        <div className="form-error" id="error-ipAddress">Wrong IP address format</div>
                    </div>
                </div>
                <button className="form-btn" onClick={this.passObj.bind(this)} disabled={!this.state.enableBtn}>Add user</button>
            </div>
        );
    }
}
export default Form;

Form.protoTypes = {
    callback: PropTypes.func,
}