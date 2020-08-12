import React,{Component} from 'react';
import './LifeCycle.css';
class LifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    increase(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decrease(){
        this.setState({
            count: this.state.count -1
        })
    }
    render(){
        console.log("Counter render");
        return(
            <div className="LifeCycle">
                <button className="button" onClick={this.decrease}>-</button>
                <span>{this.state.count}</span>
                <button className="button" onClick={this.increase}>+</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("Counter did mount");
    }
    componentDidUpdate(){
        console.log("Counter did update");
    }
    componentWillMount(){
        console.log("Counter will unmount");
    }
    // shouldComponentUpdate(){
    //     console.log("should")
    //     return false;   
    // }
}

export default LifeCycle;