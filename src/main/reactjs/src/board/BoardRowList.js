import React from 'react';
import { NavLink } from 'react-router-dom';
import noimage from "../image/images.png";

function BoardRowList(props) {
    const { idx, row, no, currentPage } = props;
    const photoUrl1 = process.env.REACT_APP_BOARDURL1;
    const photoUrl2 = process.env.REACT_APP_BOARDURL2;

    return (
        <tr>
            <td>{no - idx}</td>
            <td> 
                <NavLink
                    to={`/board/detail/${row.num}/${currentPage}`}
                    style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                    {
                    row.photo!=null?
                        <img alt='' src={`${photoUrl1}${row.photo}${photoUrl2}`} 
                         style={{ border: '1px solid gray' }}
                         />: <img src={noimage} alt='' style={{width:'45px'}} />
                    }
                    &nbsp;
                    <b>{row.subject}</b>
                </NavLink>
            </td>
            <td>{row.myname}</td>
            <td>{row.writeday}</td>
            <td>{row.readcount}</td>
        </tr>
    );
}

export default BoardRowList;
