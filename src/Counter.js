import React, { Component } from 'react';

class Counter extends Component {

    state = {
        number : 0,
        fixedNumber : 0
    }

    // constructor(props){
    //     super(props);
    //     // state의 초깃값 설정하기
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     };
    // }

    render() {
        const {number, fixedNumber} = this.state; // class에서는 this 를 통해서 조회
        const array1 = [1, 2];
        const [one, two] = array1;
        console.log(one, '+', two);
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber {fixedNumber}</h2>
                <button
                    onClick={()=>{
                        // this.setState({number : number + 1});
                        // this.setState({number : this.state.number + 1})
                        this.setState((prevState, props) => {
                            return {
                                // 업데이트하고 싶은 내용
                                number : prevState.number + 1
                            }
                        }, () => {
                            console.log(11);
                            console.log(this.state);
                        });

                        this.setState((prevState, props) => ({
                                // 업데이트하고 싶은 내용
                                number : prevState.number + 1
                        }), () => {
                            console.log(22);
                            console.log(this.state);
                        });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;