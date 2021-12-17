import {useState} from 'react'
import Dice from './dice.js';
export default function RollDice () {
    const [dice1, changeDice1] = useState("1");
    const [dice2, changeDice2] = useState("1");
    const rollDice = () => {
        changeDice1(Math.floor(Math.random() *6) + 1)
        changeDice2(Math.floor(Math.random() *6) + 1)
    }
    return (
        <Dice
            dice1 = {dice1}
            dice2 = {dice2}
            rollDice = {rollDice}
        /> 
    )
}
