import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <div className="card text-left">
                        {!this.props.isShow && <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                            <div className="card-header">Thêm mới người dùng</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Tên User" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" >
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Monitor</option>
                                        <option value={3}>User</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block btn-primary ">Thêm mới</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;