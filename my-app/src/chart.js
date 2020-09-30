import React from 'react';
import {Line, Bar, Pie} from 'react-chartjs-2';

const dataline = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const databar = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const piebar = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
}

const optionbar = {
    title: {
        display: true,
        text: 'Average Rainfall per month',
        fontSize: 20
    },
    legend: {
        display: true,
        position: 'right'
    }
}
const LineDemochart = () => {
    return (
        <div>
            <h2>Line Example</h2>
            <Line data={dataline}/>
        </div>
    );
}
const BarDemochart = () => {
    return (
        <div>
            <h2>bar Example</h2>
            <Bar data={databar} options={optionbar}/>
        </div>
    );
}
const PieDemochart = () => {
    return (
        <div>
            <h2>Pie Example</h2>
            <Pie data={piebar} options={optionbar}/>
        </div>
    );
}

export {LineDemochart, BarDemochart, PieDemochart};