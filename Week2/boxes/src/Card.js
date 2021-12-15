export default function Card(props){
  return (
        <div className='theCont'>
            <div className='boxez' style={props.boxStyle}>
                <h1>{props.Title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <div className='boxez' style={props.boxStyle}>
                <h3>{props.description1}</h3>
            </div>
        </div>
  )
}
/*export default function Card(props){
  return (
      <div className = "myCont">
        <div className = "box" style = {props.boxStyle}>
            <h1>{props.Title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
        <div className = "box" style = {props.boxStyle}>
            <h3>{props.desc}</h3>
        </div> 
      </div>
  )  
}
*/