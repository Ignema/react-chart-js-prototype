import { Line } from 'react-chartjs-2'
import './LineChart.css'

const data = {
        labels: ["January", "April", "August", "December"],
        datasets: [{
            label: "2019",
            data: [8, 4, 4, 1],
            fill: true,
            borderColor: "green"
        },
        {
            label: "2020",
            data: [6, 2, 1, 1],
            fill: true,
            borderColor: "violet",
            borderWidth: 6
        },
        {
            label: "2021",
            data: [9, 4, 5, 1],
            fill: true,
            borderColor: "blue",
            borderDash: [4]
        },
    ]
}

// const options = {
//     animations: {
//       tension: {
//         duration: 1000,
//         easing: 'easeInQuad',
//         from: 1,
//         to: .5,
//         loop: true
//       }
//     },
//     scales: {
//       y: { // defining min and max so hiding the dataset does not change scale range
//         min: 0,
//         max: 100
//       }
//     }
// }

const title = {
        display: true,
        text: 'Random Values'
}


const LineChart = () => {
    return (
            <Line 
                id="linechart"
                data={data}
                width={100}
                height={50}
                options={{ maintainAspectRatio: true }}
                plugins={[title]}
            />
    )
}

export default LineChart
