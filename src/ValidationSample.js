import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({
           password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
        this.testRef.focus();
    }
    handleButtonClick2 = () => {
        console.log(this.testRef.value);
    }
    
    render() {
        return (
            <div>
                <input
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}    
                    ref={ref=>this.testRef=ref}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
                <button onClick={this.handleButtonClick2}>출력</button>
            </div>
        );
    }
}

export default ValidationSample;
