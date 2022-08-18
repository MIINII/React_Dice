import React, { useState } from 'react';
import Dice from './Dice';
import Button from './Button';

// 1부터 n까지 랜덤하게 숫자를 뽑아주는 함수
const random = n => {
  return Math.ceil(Math.random() * n);
};

function App() {
  // const [현재변수의값(=state), setter함수] = useState('초기값');
  // setter함수 : 함수를 호출할때 파라미터로 전달하는 값으로 state값이
  // state를 사용할때는 변수에 새로운 값을 할당하면서 값을 변경하는게 아니라
  // setter함수를 통해서만 변경할수있다
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(nextNum);
    setSum(sum + nextNum);
    gameHistory.push(nextNum); // push로 nextNum추가
    setGameHistory(gameHistory); //setter함수로 추가된 겜히스토리스테이트를 전달
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <>
      <div>
        {/* children 사용하기 */}
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>본인</h2>
        {/* 컴포넌트의 프롭 */}
        <Dice color='red' num={num} />
        <h2>총점</h2>
        <p>{sum}</p>

        <h2>기록</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </>
  );
}

export default App;
