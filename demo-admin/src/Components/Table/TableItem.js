import React, { Component } from 'react';

class TableItem extends Component {
    permissionName = (number) => {
        if (number === 1) { return "Admin"; }
        else if (number === 2) { return "Monitor"; }
        else { return "User"; }
    }
    editClick = () => {
        this.props.editUser();
        this.props.changeEditUserStatus();
    }
    deleteButton = (idUser) => {
        this.props.deleteButtonTable(idUser);
    }
    render() {
        const { data, value } = this.props;
        return (
            <tr key={value}>
                <td >{value}</td>
                <td>{data.name}</td>
                <td>{data.tel}</td>
                <td>{this.permissionName(data.permission)}</td>
                <td>
                    <div className="btn btn-warning" onClick={() => this.editClick()}>
                        <i className="fa fa-edit" />Sửa</div>
                    <div className="btn btn-danger" onClick={(idUser) => this.deleteButton(data.id)}>
                        <i className="fa fa-delete" />Xóa</div>
                </td>
            </tr>
        );
    }
}

export default TableItem;