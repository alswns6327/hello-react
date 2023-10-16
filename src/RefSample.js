import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input}/>
                <button onClick={()=>{console.log(this.input.current.value)}}>a</button>
            </div>
        );
    }
}

export default RefSample;