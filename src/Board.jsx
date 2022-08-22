import Dice from './Dice';

// 1부터 n까지 랜덤하게 숫자를 뽑아주는 함수

function Board({ name, color, gameHistory }) {
  // const [num, setNum] = useState(1);
  // const [sum, setSum] = useState(0);
  // const [gameHistory, setGameHistory] = useState([]);

  // a || b => a가 truthy일 경우 b값은 무시 아니면 그 반대 (falsy : null/NaN/0/빈문자열/undefined)
  const num = gameHistory[(gameHistory.length - 1)] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

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
