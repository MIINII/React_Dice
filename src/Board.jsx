import React, { useState } from 'react';
import Dice from './Dice';
import Button from './Button';

// 1부터 n까지 랜덤하게 숫자를 뽑아주는 함수
const random = n => {
  return Math.ceil(Math.random() * n);
};

function Board({ name, color }) {
  // const [num, setNum] = useState(1);
  // const [sum, setSum] = useState(0);
  // const [gameHistory, setGameHistory] = useState([]);

  return (
    <>
  
      <div>
        <h2>{name}</h2>
        {/* 컴포넌트의 프롭 */}
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        {/* join으로 아규먼트로 전달한 값을 배열의 각 요소들 사이에 넣어서 하나의 문자열로 만들어줌 */}
        <h2>기록</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </>
  );
}

export default Board;
