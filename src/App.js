import React, { useState } from 'react';
import Board from './Board';
import Button from './Button';

const random = n => {
  return Math.ceil(Math.random() * n);
};

function App() {
  // const [현재변수의값(=state), setter함수] = useState('초기값');
  // setter함수 : 함수를 호출할때 파라미터로 전달하는 값으로 state값이
  // state를 사용할때는 변수에 새로운 값을 할당하면서 값을 변경하는게 아니라
  // setter함수를 통해서만 변경할수있다

  // ###############################################################################################
  // ## State Lifting : 자식컴포넌트의 State를 부모 컴포넌트로 올려주는것(원래 Board.jsx에 있던것들)       ##
  // ###############################################################################################

  // 내꺼
  // const [num, setNum] = useState(1);
  // const [sum, setSum] = useState(0);
  const [myHistory, setMyHistory] = useState([]);

  // 다른애꺼
  // const [otherNum, setOtherNum] = useState(1);
  // const [otherSum, setOtherSum] = useState(0);
  const [otherHistory, setOtherHistory] = useState([]);

  // 이벤트 핸들러
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]); // spread
    setOtherHistory([...otherHistory, nextOtherNum]); // spread
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <>
      <div>
        {/* children 사용하기 */}
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>

      <div>
        <Board name='나' color='blue' gameHistory={myHistory} />
        <Board name='상대' color='red' gameHistory={otherHistory} />
      </div>
    </>
  );
}

export default App;
