import React from 'react';
import './Button.css';

// // 공통 버튼 스타일
// const baseButtonStyle = {
//   padding: '14px 27px',
//   outline: 'none',
//   cursor: 'pointer',
//   borderRadius: '9999px',
//   fontSize: '17px',
// };

// const blueButtonStyle = {
//   ...baseButtonStyle, // spread문법
//   border: 'solid 1px #7090ff',
//   color: '#7090ff',
//   backgroundColor: 'rgba(0, 89, 255, 0.2)',
// };

// const redButtonStyle = {
//   ...baseButtonStyle, // spread 문법
//   border: 'solid 1px #ff4664',
//   color: '#ff4664',
//   backgroundColor: 'rgba(255, 78, 78, 0.2)',
// };

const Button = ({ children, onClick, color='blue', className='' }) => {
  // const style = color === 'red' ? redButtonStyle : blueButtonStyle
  const classNames = `Button ${color} ${className}`; // 띄어쓰기 주의~
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
