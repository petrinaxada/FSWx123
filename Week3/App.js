import './App.css';
import Card from './Card'

const boxez = 4
const color = ['red', 'orange', 'yelllow', 'green']

function App() {
    return (
      [...Array(boxez)].map((e, i)=><Card
        title='title1'
        subtitle='subtitle1'
        description='description1'
        boxStyle={{backgroundColor:color[i], width:'250px'}}
      />
    )
  );
}
export default App;