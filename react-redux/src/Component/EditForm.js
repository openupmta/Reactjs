import React, { Component } from 'react';
import {connect} from 'react-redux';
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    componentWillMount(){
        if(this.props.editItem){
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.key
            })
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    editData = () =>{
        const status = true;
        if(this.state.noteContent !== this.props.editItem.noteContent || this.state.noteTitle !== this.props.editItem.noteTitle)
        {
           
            var item = {
                id: this.props.editItem.key,
                noteTitle: this.state.noteTitle,
                noteContent: this.state.noteContent
            }
            this.props.updateNote(item);
            
           
        }
        this.props.changeStatus(status);
    }
    
    render() {
        return (
            <div className="col-4">
                <h3>Sửa nội dung</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề</label>
                        <input 
                        defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="title" placeholder="Tiêu đề note" />
                        <small id="title" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea 
                        defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="content" placeholder="Điền nội dung" />
                        <small id="content" className="form-text text-muted">Help text</small>
                    </div>
                    <button type="reset" onClick={() => this.editData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShow: state.isShowForm,
        editItem: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: (status) => {
            dispatch({type:"CHANGE_STATUS",status})
        },
        updateNote: (item) => {
            console.log(item);
            dispatch({type:"UPDATE",item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm)