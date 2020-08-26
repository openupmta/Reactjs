import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
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
    clickSave = () => {
        const info = {
            "id": this.state.id,
            "name": this.state.name,
            "tel": this.state.tel,
            "permission": this.state.permission
        }
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // An form
    }
    render() {
        const {userEditObject} = this.props;
        return (
            <div className="col">
            <form>
                <div className="card text-white bg-warning mb-3 mt-2" >
                    <div className="card-header text-center">Sửa người dùng</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input defaultValue={userEditObject.name} onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Tên User" name="name"   />
                        </div>
                        <div className="form-group">
                            <input defaultValue={userEditObject.tel} onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Điện thoại" name="tel"  />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name="permission" defaultValue={userEditObject.permission} onChange={(event) => this.isChange(event)} >
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Monitor</option>
                                <option value={3}>User</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-block btn-primary" value="Lưu" type="button" onClick={() => this.clickSave()}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default EditUser;