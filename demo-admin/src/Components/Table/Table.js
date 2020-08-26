import React, { Component } from 'react';
import TableItem from './TableItem';

class Table extends Component {
    mappingDataUser = () => this.props.data.map((item, key) => 
    <TableItem 
    deleteButtonTable = {(idUser) => this.props.deleteButtonApp(idUser)}
        editUser={(user) => this.props.editUser(item)} 
        key={key} 
        data={item} 
        value={key}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        />);
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;