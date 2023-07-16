import ChartBar from "./ChartBar";
import './Chart.css';

export default function Chart(props){


    let valuiesAsNums = props.data.map(x => x.value);
    let maxValue = Math.max(...valuiesAsNums);

    return(
        <div className="chart">
           {props.data.map(x => <ChartBar maxValue={maxValue} key={x.lable} data={x}/>)}
        </div>
    )
}