import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'
import { Answers } from '../../../types/customTypes'

ChartJS.register(ArcElement, Tooltip, Legend)

interface ChartProps {
    answers: Answers[]
}

const Chart: React.FC<ChartProps> = ({answers}) =>{
    const randomNum = React.useCallback(() => Math.floor(Math.random() * (235 - 52 + 1) + 52), []);
    const randomRGB = React.useCallback(() => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`, []);
    
    const data = {
        labels: answers.map((obj) => obj.name), 
        datasets:[{
            data: answers.map((obj) => obj.count),
            backgroundColor: answers.map(() => randomRGB())
    }]}

    const options = {}

    return(
        <Pie data={data} options={options}/>
    )
}

export default Chart