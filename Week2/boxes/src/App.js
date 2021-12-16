import './App.css';
import Card from './Card.js';

const boxKey = 4
const boxArray = ["red", "orange", "yellow", "green"]

function App() {
  return (
      [...Array(boxKey)].map((e, i) => <Card
      Title= {"title" + (i + 1)}
      subtitle= {"subtitle" + (i + 1)}
      description= {"description" + (i +1)}
      boxStyle= {{backgroundColor: boxArray[i], width: "200px"}}
      />)
  );
}
export default App;
///ref:DCaviness&EYarborough///