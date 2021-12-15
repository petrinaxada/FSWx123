import './App.css';
import Card from './Card.js';

const boxKey = 4
const boxArray = ["red", "orange", "yellow", "green"]

function App() {
  return (
      [...Array(boxKey)].map((e, i) => <Card
      Title= {"title" + (i + 1)}
      subTitle= {"subtitle " + (i + 1)}
      desc= {"description " + (i +1)}
      boxStyle= {{backgroundColor: boxArray[i], width: "100px"}}
      />)
  );
}
export default App;
///ref:DCaviness&EYarborough///git