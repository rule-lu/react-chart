import { Pieflex } from "../css/main_css";
import { Pie } from "react-chartjs-2";
import React, { useState, useEffect, useContext } from 'react';
import context from '../context/dataProvider'

const PieTrandchart = () => {
	const {totaldata, setTotalData, setPietrandData, pietranddata} = useContext(context)
	const renderTrandPieChartData = () => {
		let AllTrandPieChartDetailData = [];
		let PieTrandtotal;
		totaldata.map((value, index) => {
			if (index != 0) {
				let TrandPierate=(parseInt(value['type4'])/PieTrandtotal)*100;
				AllTrandPieChartDetailData.push(parseFloat(TrandPierate.toFixed(2)))
			}
			else if(index == 0){
				PieTrandtotal=parseInt(value['type4']);
			}
		})
		setPietrandData(AllTrandPieChartDetailData)
	}
	//當piedata轉換時可以重新刷新表單
	useEffect(() => {
		renderTrandPieChartData();
	}, [totaldata])
	const optionbar = {
		title: {
			display: true,
			text: '網站交易次數占比',
			fontSize: 14
		},
		legend: {
			display: true,
			position: 'left'
		},
		// tooltips: {
		//     callbacks: {
		//         label: function(tooltipItem, data) {
		//             var key = tooltipItem['index'];
		//             var label = data['labels'][key] + " : " + data['datasets'][0]['data'][key]+' %';
		//             return label;
		//         }
		//     }
		// }
	}
	const piebar = {
		labels: [
			'流量01-直接來源_品牌',
			'流量02-自然搜尋',
			'流量03-付費搜尋',
			'流量04-社交媒體',
			'流量05-Line與EDM',
			'流量06-推薦與其他'
		],
		datasets: [{
			data: pietranddata,
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#EA7500',
				'#8080C0',
				'#5CADAD'
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#EA7500',
				'#8080C0',
				'#5CADAD'
			]
		}]
	}
	return (
		<Pieflex>
			<Pie data={piebar} options={optionbar}/>
		</Pieflex>
	);
}
export { PieTrandchart };