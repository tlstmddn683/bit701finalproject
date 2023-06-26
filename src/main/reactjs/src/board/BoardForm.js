import React, { useState } from 'react';
import '../App.css';
import { useNavigate} from 'react-router-dom';
import  Axios  from 'axios';
function BoardForm(props) {
    const [subject,setSubject]=useState('');
    const [photo,setPhoto]=useState('');
    const [content,setContent]=useState('');
    
    const navi=useNavigate();
    //이미지 경로
    const photoUrl=process.env.REACT_APP_BOARDURL;
    //세션스토리지에 저장된 아이디와 이름 가져오기
    const myid=sessionStorage.myid;
    const myname=sessionStorage.myname;

    const onSubmitEvent=(e)=>{
        e.preventDefault();
        Axios.post("/board/insert",{myid,myname,subject,content})
        .then(res=>{
            //목록으로
            navi(`/board/list/1`)
        })



    }
    //업로드 이벤트
    const onUploadEvent=(e)=>{
        const uploadFile=new FormData();
        uploadFile.append("upload",e.target.files[0]);
        Axios({
            method:'post',
            url:'/board/upload',
            data:uploadFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data)
        });
    }
    return (
        <div style={{marginLeft:'20px'}}>
           <form onSubmit={onSubmitEvent}>
            <table className='table'>
                <caption align='top'><b>게시판 글 쓰기</b></caption>
                <tbody>
                    <tr>
                        <th style={{backgroundColor:'#ddd',width:'100px'}}>제목</th>
                        <td>
                            <input type='text' className='form-control' 
                            required onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor:'#ddd',width:'100px'}}>사진</th>
                        <td>
                            <input type='file' className='form-control' 
                            onChange={onUploadEvent}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor:'#ddd',width:'100px'}}>내용</th>
                        <td>
                            <textarea style={{width:'100%',height:'100px'}}
                            required value={content} onChange={(e)=>setContent(e.target.value)}>                               
                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'>
                            <button type='submit' className='btn btn-outline-info' style={{width:'100px'}}>
                                글 저장
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
           </form>
           <img alt='' src={`${photoUrl}${photo}`} style={{width:'200px',position:'absolute',left:'100px',top:'480px'}}/>
        </div>
    );
}

export default BoardForm;