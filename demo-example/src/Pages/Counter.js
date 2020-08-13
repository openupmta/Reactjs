import React,{Component} from 'react';

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        this.timeId = setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        },1000);
    }
    componentWillMount(){
        clearInterval(this.timeId);
    }
    render(){
        return <div>{this.props.children(this.state.count)}</div>
    }
}