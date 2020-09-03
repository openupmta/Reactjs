import React, { Component } from 'react';
import { connect } from 'react-redux';
class NodeItem extends Component {
    onClickChange = () =>{
        const status = false;
        this.props.changeStatus(status);
        this.props.getData((this.props.item));
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#note" + this.props.item.key} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.item.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                        <i className="far fa-edit" style={{color: '#002bfd'}} onClick={() => this.onClickChange()}  />
                        <i className="far fa-trash-alt" style={{color:'red'}} onClick={(id) => this.props.deleteNote(this.props.item.key)} />
                        </div>
                    </h5>
                </div>
                <div id={"note" + this.props.item.key} className="collapse in" role="tabpanel" aria-labelledby="note1" >
                    <div className="card-body">
                        {this.props.item.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShow: state.isShowForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: (status) => {
            dispatch({type:"CHANGE_STATUS",status})
        },
        deleteNote: (id) => {
            dispatch({type:"DELETE",id})
        },
        getData: (item) => {
            dispatch({type:"GET_DATA",item})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NodeItem)