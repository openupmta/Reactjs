import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
        }
        this.isChange = this.isChange.bind(this);
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    render() {
        const data = {
            "id": this.state.id,
            "name": this.state.name,
            "tel": this.state.tel,
            "permission": this.state.permission
        }
        return (
            <div>
                <div className="col">
                    <div className="card text-left">
                        {!this.props.isShow &&
                            <form>
                                <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                                    <div className="card-header">Thêm mới người dùng</div>
                                    <div className="card-body text-primary">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Tên User" name="name" onChange={(event) => this.isChange(event)} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Điện thoại" name="tel" onChange={(event) => this.isChange(event)} />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)}>
                                                <option value>Chọn quyền</option>
                                                <option value={1}>Admin</option>
                                                <option value={2}>Monitor</option>
                                                <option value={3}>User</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input className="btn btn-block btn-primary" onClick={(item) => this.props.add(data)} value="Thêm mới" type="reset"/>
                                        </div>
                                    </div>
                                </div>
                            </form>}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;