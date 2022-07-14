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

  return (
    <main>
      {squareColors}
      <button onClick={smallClick}>Small DJ</button>
      <button onClick={partyClick}>Party DJ</button>
    </main>
  )
}