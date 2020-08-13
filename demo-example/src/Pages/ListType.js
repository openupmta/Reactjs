import React from 'react';
import {Row
  } from 'reactstrap';

//   Hàm sử dụng khi data truyền vào là như nhau 
//  Nhưng mục đích sử dụng lại khác nhau thì sẽ sử dụng hàm fuction lồng nhau như này 

export default function({data, render}) {
    return (
        <Row>
            {data.map((item) => render(item))}
        </Row>
    )
}