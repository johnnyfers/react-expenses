import ChartBar from './ChartBar/index'
import './index.css'

export default function Chart(props) {
    const valueArray = props.dataPoints.map((dataPoint)=> dataPoint.value)
    const totalMax = Math.max(...valueArray)

    return <div className="chart">
        {props.dataPoints.map((dataPoint)=> {
            return <ChartBar 
            key={dataPoint.label}
            maxValue={totalMax}
            label={dataPoint.label}
            value={dataPoint.value}
            />
        })}
    </div>
}