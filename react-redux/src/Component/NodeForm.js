import React, { Component } from 'react';
import {connect} from 'react-redux';
class NodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    addData = () =>{
        
        var item = {
            noteTitle: this.state.noteTitle,
            noteContent: this.state.noteContent
        }
        this.props.addDataStore(item);
    }
   
    render() {
        return (
            <div className="col-4">
                <h3>Nội dung</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề</label>
                        <input 
                        onChange={(event) => this.isChange(event)} 
                        type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="title" placeholder="Tiêu đề note" />
                        <small id="title" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea 
                        onChange={(event) => this.isChange(event)} 
                        type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="content" placeholder="Điền nội dung"  />
                        <small id="content" className="form-text text-muted">Help text</small>
                    </div>
                    <button type="reset" onClick={() => this.addData()} className="btn btn-primary btn-block">Thêm</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isShow: state.isShowForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NodeForm);