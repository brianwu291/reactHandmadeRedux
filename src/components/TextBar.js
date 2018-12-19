import React from 'react';
import { subscribe } from '../GlobalState.js';

class TextBar extends React.Component{
    render(){
        return(
            <div className="ui content">
                <p>{this.props.score}</p>
            </div>
        );
    }
}

// HOC，把'接收改變通知'的原件與'存放狀態'的原件連結(connect)在一起
const connect = (Comp) => {
    console.log('connect global and TextBar')
    class Wrapper extends React.Component{
       // state = {score: 456}
        componentDidMount() {
            subscribe(this.updateState);
        }

        updateState = (globalState) => {  // test: 1, nas: 2
            this.setState(globalState);
        }

        render(){
            return <Comp {...this.state}/>  // <Comp test={1} nas={2} /> 解構賦值
        }
    }
    return Wrapper;
}

export default connect(TextBar);