# React_Dice

```bash
yarn add react-scripts
```

## className을 사용할때 꿀팁

> 마진같이 외부에 영향을 주는 속성은 **내부보다는 외부에서 정리하는게 좋음** ex) Button 스타일을 App.css에 적용 => _자식요소들간의 여백을 조절할 수 있으니까 훨씬 더 직관적으로 스타일 다루기 가능_

## 빌드하기(Build)

1. `yarn build` => 빌드 폴더 만들어짐
2. `yarn global add serve` => 서브 패키지 설치
3. `npx serve build` => 필드 로컬에서 실행
