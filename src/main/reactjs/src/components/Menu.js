import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
function Menu(props) {
    return (
        <div>
            <ul className='menu'>
                <li>
                    <NavLink to={"/"}>Home</NavLink>

                </li>
                <li>
                    <NavLink to={"/member/form"}>회원가입</NavLink>
                    
                </li>
                <li>
                    <NavLink to={"/member/list"}>회원리스트</NavLink>
                    
                </li>
                <li>
                    <NavLink to={"/board/list"}>자게</NavLink>
                    
                </li>
                <li>
                    <NavLink to={"/login"}>로그인</NavLink>
                    
                </li>
            </ul>
        </div>
    );
}

export default Menu;