import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    static defaultProps = {
        name : '기본 이름'
    }

    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }

    render(){
        
        const {name, children, favoriteNumber, a} = this.props;
        
        return(
            <>
                <div>name : {name + children + a + " " + favoriteNumber}</div>
            </>
        )
    }
};

// MyComponent.defaultProps = {
//     name : '기본 이름'
// };

// MyComponent.propTypes = {
//     name : PropTypes.string,
//     favoriteNumber : PropTypes.number.isRequired,
//     a : PropTypes.oneOf(['ttt', 'aaa']),
//     b : PropTypes.objectOf(PropTypes.bool)
// }

export default MyComponent;