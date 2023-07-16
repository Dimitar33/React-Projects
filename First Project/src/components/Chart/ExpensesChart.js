import Chart from "./Chart"

export default function ExpensesChart(props){

    let chartBarData = [
        {lable: 'Jan', value: 0},
        {lable: 'Feb', value: 0},
        {lable: 'Mar', value: 0},
        {lable: 'Apr', value: 0},
        {lable: 'May', value: 0},
        {lable: 'Jun', value: 0},
        {lable: 'Jul', value: 0},
        {lable: 'Aug', value: 0},
        {lable: 'Sep', value: 0},
        {lable: 'Oct', value: 0},
        {lable: 'Nov', value: 0},
        {lable: 'Dec', value: 0},
    ]

    for(const i of props.expenses){
        const month = i.date.getMonth();
        chartBarData[month].value += i.amount;
    }

    let valuiesAsNums = chartBarData.map(x => x.value);
    let maxValue = Math.max(...valuiesAsNums);


    return (
        <Chart data={chartBarData}/>
    )
}