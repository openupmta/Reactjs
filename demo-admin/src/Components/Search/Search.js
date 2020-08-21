import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (

            <div className="col-12">
                <div className="col-5">
                    <div className="btn btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" />
                        <div className="btn btn-info">Tìm</div>
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