import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

const DiceImages = {
  blue:[diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red:[diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06]
}

// 컴포넌트의 속성 지정하기(=props)
// 컴포넌트에 전달된 모든 속성 / 각각은 prop이라고 부른다


// const Dice = (props) => {
//   console.log(props)
//   // 이미지 소스에 다이렉트로 경로를 불러오면 엑박이 뜨니가 쪼심합시다!
//   return <img src={diceBlue01} alt='주사위' />;
// };


// const Dice = (props) => {
//   const diceImg = props.color === 'red' ? diceRed01 : diceBlue01;
//   return <img src={diceImg} alt="주사위" />
// }

// 디스트럭쳐 문법 : 파라미터에 {propName = 'propDefaultValue'} 
const Dice = ({color = 'blue', num='1'}) => {
  const src = DiceImages[color][num-1];
  const alt = `${color} ${num}`
  return <img src={src} alt={alt} />
}
export default Dice;

