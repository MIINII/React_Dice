import React,{useState} from 'react';
import Dice from './Dice';
import Button from './Button';

function App() {
  // const [현재변수의값(=state), setter함수] = useState('초기값');
  // setter함수 : 함수를 호출할때 파라미터로 전달하는 값으로 state값이 
  // state를 사용할때는 변수에 새로운 값을 할당하면서 값을 변경하는게 아니라
  // setter함수를 통해서만 변경할수있다 
  const [num, setNum] = useState(1);

  return (
    <>
      <div>
        {/* children 사용하기 */}
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      {/* 컴포넌트의 프롭 */}
      <Dice color='red' num={2} />
    </>
  );
}

export default App;
