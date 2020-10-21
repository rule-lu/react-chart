import { Pieflex } from "../css/main_css";
import { Pie } from "react-chartjs-2";
import React, { useState, useEffect, useContext } from 'react';
import context from '../context/dataProvider'

const PieDemochart = () => {
	const {totaldata, setTotalData, setPiechangeData, piechangedata} = useContext(context)
	const renderPieChartData = () => {
		let AllPieChartDetailData = [];
		let Pietotal;
		totaldata.map((value, index) => {
			if (index != 0) {
				let Pierate=(parseInt(value['type2'])/Pietotal)*100;
				AllPieChartDetailData.push(parseFloat(Pierate.toFixed(2)))
			}
			else if(index == 0){
				Pietotal=parseInt(value['type2']);
			}
		})
		setPiechangeData(AllPieChartDetailData)
	}
	//當piedata轉換時可以重新刷新表單
	useEffect(() => {
		renderPieChartData();
	}, [totaldata])
	const optionbar = {
		title: {
			display: true,
			text: '網站到訪者占比',
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
			data: piechangedata,
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
export { PieDemochart };