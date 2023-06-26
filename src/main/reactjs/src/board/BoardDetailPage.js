import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetailPage(props) {
    const {num,currentPage}=useParams();
    const [dto,setDto]=useState(''); 

    const navi=useNavigate();

    const photourl=process.env.REACT_APP_BOARDURL;
    const myid=sessionStorage.myid;
    const loginok=sessionStorage.loginok;

    // const selectData=()=>{
    //     const url=`/board/detail?num=${num}`;
    //     Axios.get(url)
    //     .then(res=>{
    //         setDto(res.data);
    //     })
    // }

    // useEffect(()=>{
    //     selectData();       
    // },[]);  
    
    const selectData=useCallback(()=>{
        const url=`/board/detail?num=${num}`;
        Axios.get(url)
        .then(res=>{
            setDto(res.data);
        })
    },[num])
    
    useEffect(()=>{
         selectData();       
     },[selectData]); 

    return (
        <div style={{marginLeft:'10px',width:'600px'}}>
            <h5><b>{dto.subject}</b></h5>
            <h6>
                <span>작성자: {dto.myname}({dto.myid})</span>
                <span style={{float:'right',fontSize:'10px',color:'gray'}}>
                    조회 {dto.readcount}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dto.writeday}
                </span>
            </h6>
           {
            dto.photo==null?'':
            <img alt='' src={`${photourl}${dto.photo}`}
            style={{border:'1px solid gray',maxWidth:'500px'}}/>
            
           }
           <br/><br/>
           <pre>
            {dto.content}
           </pre>
           <br/>
           <div>
            <button type='button' className='btn btn-outline-danger' 
            style={{width:'80px',marginLeft:'10px'}} 
            onClick={()=>navi("/board/form")}>글쓰기</button>

            <button type='button' className='btn btn-outline-danger'
             style={{width:'80px',marginLeft:'10px'}} 
             onClick={()=>navi(`/board/list/${currentPage}`)}>목록</button>
            {
            loginok!=null&&myid===dto.myid?
            <button type='button' className='btn btn-outline-danger' 
            style={{width:'80px',marginLeft:'10px'}}
             onClick={()=>{
                const url=`/board/delete?num=${dto.num}`;
                Axios.delete(url)
                .then(res=>{
                    // 목록으로 이동
                    navi(`/board/list/${currentPage}`);
                })

            }}>삭제</button>:''
            }
            {
                loginok!=null&&myid===dto.myid?
                <button type='button' className='btn btn-outline-danger' 
                style={{width:'80px',marginLeft:'10px'}}
                onClick={()=>{

                }}>수정</button>:''
            }
        
           </div>
        </div>
    );
}

export default BoardDetailPage;