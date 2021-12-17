export default function Dice(props){
    return (
        <div id = "flexbox">
           <div id = "diceImg">
                <div className="dice">
                    <h2>{props.dice1}</h2>
                </div>
                <div  className = "dice">
                    <h2>{props.dice2}</h2>
                </div>
            </div>
                <div id = "theButton">
                    <button onClick = {props.rollDice}>Roll!</button>
                </div>
        </div>
    )
};   

///assistdBy: dCaviness + Eyarborough 