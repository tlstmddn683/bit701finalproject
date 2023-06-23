import React from 'react';
import { Home, Menu } from './components';
import { Route, Routes } from 'react-router-dom';
import { LoginForm, MemberForm, MemberList } from './member';
import { BoardForm, BoardList } from './board';
import errimg from './image/404.png';
function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <br style={{clear:'both'}}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>

                 <Route path='/member'>
                     <Route path='form' element={<MemberForm/>}/>
                     <Route path='list' element={<MemberList/>}/>
                </Route>
                <Route path='/board'>
                     <Route path='form' element={<BoardForm/>}/>
                     <Route path='list' element={<BoardList/>}/>
                     <Route path='list/:currentPage' element={<BoardList/>}/>

                </Route>
                <Route path='*' element={
                    <div>
                        <h1>잘못된 URL주소 입니다...!</h1>
                        <br/><br/>
                        <img src={errimg} alt='' style={{width:'100%'}}/>
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;