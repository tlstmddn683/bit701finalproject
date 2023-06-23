import photo from './1.png';
import photo2 from './2.gif';
import './App.css';

function App() {
  return (
    <div className="App">
          <img alt='' src={photo} className="App-logo"  border="0" />
          <br/><br/>
          <img alt='' src={photo2} width={80}/> 
          <h2>도커 배포 성공 기원기</h2>
          <h2>히오스 갓겜입니다....</h2>

    </div>
  );
}

export default App;
