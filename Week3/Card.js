export default function Card(props){
  return(
        <div> 
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <div>
                <h3>{props.description}</h3>
            </div>
        </div>
  )
}