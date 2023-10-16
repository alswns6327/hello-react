import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollToBottom = () => {
        console.log(this.box);
        console.log(this.box.clientHeight);
        console.log(this.box.scrollHeight);
        const {scrollHeight, clientHeight} = this.box;
        console.log(this.box.scrollTop);
        this.box.scrollTop = scrollHeight - clientHeight;
        console.log(this.box.scrollTop);
    }

    render() {
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background: 'linear-gradient(red, blue)'
        }

        return (
            <div
                style={style}
                ref={ref => this.box =ref}
            >
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;