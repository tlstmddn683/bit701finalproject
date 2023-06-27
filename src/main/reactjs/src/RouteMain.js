import React from 'react';
import { Home, Menu } from './components';
import { Route, Routes } from 'react-router-dom';
import { LoginForm, MemberForm, MemberList } from './member';
import { BoardForm, BoardList } from './board';
import errimg from './image/404.png';
import BoardDetailPage from './board/BoardDetailPage';
import ReducerComp2 from './day0627/ReducerComp2';
import ReducerComp1 from './day0627/ReducerComp1';
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
                     <Route path='detail/:num/:currentPage' element={<BoardDetailPage/>}/>

                </Route>
                {/*Reducer 연습 라우터 추가*/}
                <Route path='/reducer1' element={<ReducerComp1/>}/>
                <Route path='/reducer2' element={<ReducerComp2/>}/>
                
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