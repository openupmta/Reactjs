import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            textSearch:""
        }
    }
    
    onChange = (event) => {
        this.setState({
            textSearch: event.target.value
        })
        
    }

    render() {
        return (

            <div className="col-12">
                <div className="col-9">
                    <div className="btn btn-group btn-block">
                        <input type="text" defaultValue="" className="form-control" placeholder="Nhập từ khóa" onChange={(event) => this.onChange(event)} />
                        <div className="btn btn-info" onClick={(textSearch) => this.props.getTextSearch(this.state.textSearch)}>Tìm</div>
                        {this.props.isShow ? <div className="btn btn-block btn-outline-success ml-2" onClick={() => this.props.onClickButton() }>Thêm mới</div>
                                            : <div className="btn btn-block btn-outline-secondary ml-2" onClick={() => this.props.onClickButton()}>Đóng lại</div>}
                    </div>
                    

                </div>
           
                <hr />
            </div>

        );
    }
}

export default Search;