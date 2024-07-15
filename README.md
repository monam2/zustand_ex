# 민갱 민수를 위한 주스탠드 사용법

## Zustand 설치

이제 아래 명령어를 이용해서 Zustand를 설치해보자.

```jsx
npm install zustand
```

Yarn 등을 사용한다면 해당하는 명령어로 바꿔서 설치할 수 있다.

```jsx
yarn add zustand
```

특징에서 언급했듯이 TypeScript로 작성된 라이브러리이므로, @types 설치 과정이 따로 필요없다.

## Zustand 사용법

Zustand 공식 문서에서 안내하는 사용법은 매우 짧다. 공식 문서에서도 굉장히 간단하다는 걸 어필하는 듯 하다.

더 자세한 설명을 원한다면 [Zustand Github](https://github.com/pmndrs/zustand)에 있다.

```jsx
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))
```

기본적으로 Zustand에서 상태는 `create` 로 생성한 `store` 에 저장된다.

`useXXXStore` 와 같이 선언해서 마치 React 커스텀 훅과 비슷하게 사용하는데, 실제로 Zustand의 스토어 자체가 React의 커스텀 훅의 일종이다. 다시 말해서, Zustand 스토어는 React 컴포넌트에서 훅과 같이 사용된다.

`useXXXStore` 내에는 내가 저장하고 싶은 데이터(상태)와 그 상태를 변화시킬 함수(액션)를 정의한다. `useState()` 에서 사용하는 상태변화 함수(`setXXX()`)와 동일한 개념이며, 이전 값을 `prev` 또는 `state` 로 받아와 state를 변경하는 방식으로 사용한다.

선언한 `Store` 의 상태를 이제 실제 컴포넌트에서 사용하는 예제를 보자.

```jsx
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

위 코드는 함수 선언문으로 작성된 컴포넌트 `BearCounter` 와 `Controls` 이다

`BearCounter` 의 경우 단순히 Store에서 `bears` 의 값을 가져다 사용하고 있다.

`Controls` 컴포넌트에선 버튼의 클릭 이벤트를 통해 `increasePopulation` 을 호출하고, 이는 곧 `store` 에서 가져온 `increasePopulation` 함수(액션)이 호출해 `bear` 의 값이 1 증가하게 된다.

이렇게 되면 `BearCounter` 의 값은 `bear` 값을 렌더링하고 있으므로, 이 값 또한 1 증가한 값이 보여질 것이다.
