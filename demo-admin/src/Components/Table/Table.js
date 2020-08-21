import React, { Component } from 'react';
import TableItem from './TableItem';

class Table extends Component {
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
                        {this.props.data.map((item, key) => <TableItem data={item} value={item.id}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;