import React,{Component} from 'react';
import className from 'classnames';
import './ToDoItem.css';
import Check from '../img/check.svg';
import CheckComplete from '../img/check-complete.svg';
class ToDoItem extends Component{
    render() {
        const {item,onClicked} = this.props;
        let url = Check;
        if(item.isComplete)
        {
            url = CheckComplete
        }
        return (
            <div  className={className("ToDoItem",{"ToDoItem-Complete":item.isComplete})}>
                <img src={url}  width={32} onClick={onClicked} />
                <p>{item.title}</p>
            </div>
        )
    }
}
export default ToDoItem;