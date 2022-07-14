import React, {useState} from 'react'; 
import Square from './Square';

export default function App() {
  const [colorsArr, setColorsArr] = useState(['white', 'white', 'white', 'white']);
  const squareColors = colorsArr.map(color => <Square color={color} />);

  const smallClick = () => {
    setColorsArr(prevState => {
      if (prevState[0] === 'white') {
        return ['black', 'black', 'black', 'black'];
      } else if (prevState[0] === 'black') {
        return ['white', 'white', 'white', 'white'];
      } else {
        return ['white', 'white', 'white', 'white'];
      }
    })
  }

  const partyClick = () => {
    setColorsArr(prevState => {
      const slicedArr = prevState.slice(2);
      return ['purple', 'purple', ...slicedArr];
    })
  }

  const bottomLftClick = () => {
    setColorsArr(prevState => {
      const newColorsArr = prevState.map((color, index) => index === 2 ? color = 'blue' : color)
      return [...newColorsArr];
    })
  }

  const bottomRgtClick = () => {
    setColorsArr(prevState => {
      const newColorsArr = prevState.map((color, index) => index === 3 ? color = 'blue' : color)
      return [...newColorsArr];
    })
  }

  const bigDjOneClick = () => {
    setColorsArr(prevState => {
      const newColorsArr = prevState.map((color, index) => index === 0 ? color = 'firebrick' : color)
      return [...newColorsArr];
    })
  }

  const bigDjTwoClick = () => {
    setColorsArr(prevState => {
      const newColorsArr = prevState.map((color, index) => index === 1 ? color = 'coral' : color)
      return [...newColorsArr];
    })
  }

  const bigDjThreeClick = () => {
    setColorsArr(prevState => {
      const newColorsArr = prevState.map((color, index) => index === 2 ? color = 'green' : color)
      return [...newColorsArr];
    })
  }

  const bigDjFourClick = () => {
    setColorsArr(prevState => {
      const newColorsArr = prevState.map((color, index) => index === 3 ? color = 'yellow' : color)
      return [...newColorsArr];
    })
  }

  return (
    <main>
      {squareColors}
      <button onClick={smallClick}>Small DJ</button>
      <button onClick={partyClick}>Party DJ</button>
      <button onClick={bottomLftClick}>Bottom Left</button>
      <button onClick={bottomRgtClick}>Bottom Right</button>
      <button onClick={bigDjOneClick}>Big DJ - 1</button>
      <button onClick={bigDjTwoClick}>Big DJ - 2</button>
      <button onClick={bigDjThreeClick}>Big DJ - 3</button>
      <button onClick={bigDjFourClick}>Big DJ - 4</button>
    </main>
  )
}