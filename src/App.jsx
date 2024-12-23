// import { Component } from "react";
import './App.css'

// class 컴포넌트
// class App extends Component{
//   render(){     
//     return <div>안녕!</div>
//    } 
//  } 

// 함수형 컴포넌트
function App() {
    // const a = "변수입니다!";
    return (
      <> 
        {/* <div>
                함수형 컴포넌트입니다!
                <span>{a.split("").join(" ")}</span>
            </div>
            <div>
                함수형 컴포넌트입니다!
                <span>자식 요소도 있습니다!</span>
            </div> 
          */
        }
        <빵/>
        <패티/>
        <양상추/>
        <토마토/>
        <치즈/>
        <빵/>
        </>
    );
}

function 빵() {
    return (
        <div className="빵">
            밀가루
            <span>
                물</span>
            <span>
                계란</span>
            <span>
                이스트</span>
        </div>
    );
}

function 패티() {
    return (
        <div className="패티">
            소고기
            <span>
                후추</span>
            <span>
                소금</span>
        </div>
    );
}

function 양상추() {
    return (
        <div className="양상추">
            잎사귀
            <span>
                줄기</span>
        </div>
    );
}

function 토마토() {
    return (
        <div className="토마토">
            껍질
            <span>
                과육</span>
            <span>
                씨앗</span>
        </div>
    );
}

function 치즈() {
    return (
        <div className="치즈">
            우유
            <span>
                소금</span>
            <span>
                색소</span>
        </div>
    );
}

export default App