import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message : '',
        message2 : '',
        message3 : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message : ''
        })
    }

    render() {
        return (
            <div>
                <h1>event</h1>
                <input
                    type="text"
                    name="message"
                    placeholder='입력'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message2"
                    placeholder='입력'
                    value={this.state.message2}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message3"
                    placeholder='입력'
                    value={this.state.message3}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >
                    reset
                </button>
            </div>
        );
    }
}

export default EventPractice;