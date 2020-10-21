import React, { useState, useEffect, useContext } from 'react';
import context from '../context/dataProvider'
import { Line } from 'react-chartjs-2';
import { LineDiv } from "../css/main_css";

const LineDemochart = () => {
	const {chartdata, setChartData, setLineData, linedata, setLineXaxisData, lineXaxisdata, setChangeLinetype, changeLinetype, changeLinerange, setChangeLinerange} = useContext(context)
	const [charttitle, setcharttitle] = useState('')
	const renderChartData = () => {
		if (chartdata.length != 0) {
			let ArrChartcolor = ['text', 'rgba(75,192,192,0.2)', 'rgb(2, 222, 131,0.2)', 'rgb(255, 145, 36,0.2)', 'rgb(41, 148, 255,0.2)', 'rgb(255, 209, 5,0.2)', 'rgb(188, 117, 255,0.2)']
			let ArrChartcolormain = ['text', 'rgba(75,192,192,1)', 'rgb(2, 222, 131,1)', 'rgb(255, 145, 36,1)', 'rgb(41, 148, 255,1)', 'rgb(255, 209, 5,1)', 'rgb(188, 117, 255,1)']
			switch (changeLinetype) {
				case 'type2':
					setcharttitle("使用者 (人)")
					break;
				case 'type4':
					setcharttitle("交易次數 (次)")
					break;
				case 'conversion_rate':
					setcharttitle("轉換率 (%)")
					break;
				case 'type5':
					setcharttitle("收益/營收 (NT$)")
					break;
			}
			switch (changeLinerange) {
				case '月':
					setChangeLinerange("月")
					let ArrChartmonth = ['全站流量(所有使用者)', '流量01-直接來源', '流量02-自然搜尋', '流量03-付費搜尋', '流量04-社交媒體', '流量05-Line與EDM', '流量06-推薦與其他']
					let AllChartDetailDatamonth = [];
					let AllLineChartXaisDatamonth = [];
					ArrChartmonth.map((name, key) => {
						let ChartDetailData = [];
						chartdata.map((value, index) => {
							if (key == value['segment']) {
								ChartDetailData.push(parseFloat(value[changeLinetype]))
								AllLineChartXaisDatamonth.push(value['month'])
							}
						})
						const row_data = {
							label: name,
							data: ChartDetailData,
							fill: true,
							backgroundColor: ArrChartcolor[key],
							borderColor: ArrChartcolormain[key]
						};
						if (key != 0) {
							AllChartDetailDatamonth.push(row_data)
						}
					})
					let XaisDatamonth = AllLineChartXaisDatamonth.filter((el, i, arr) => arr.indexOf(el) === i);
					setLineData(AllChartDetailDatamonth)
					setLineXaxisData(XaisDatamonth)
					break;
				case '週':
					setChangeLinerange("週")
					let ArrChartweek = ['全站流量(所有使用者)', '流量01-直接來源', '流量02-自然搜尋', '流量03-付費搜尋', '流量04-社交媒體', '流量05-Line與EDM', '流量06-推薦與其他']
					let AllChartDetailDataweek = [];
					let AllLineChartXaisDataweek = [];
					ArrChartweek.map((name, key) => {
						let ChartDetailData = [];
						chartdata.map((value, index) => {
							let weekname = index+1;
							value.map((valueweek, indexweek) => {
								if (key == valueweek['segment']) {
									ChartDetailData.push(parseFloat(valueweek[changeLinetype]))
									AllLineChartXaisDataweek.push("第" + weekname + "週")
								}
							})
						})
						const row_data = {
							label: name,
							data: ChartDetailData,
							fill: true,
							backgroundColor: ArrChartcolor[key],
							borderColor: ArrChartcolormain[key]
						};
						if (key != 0) {
							AllChartDetailDataweek.push(row_data)
						}
					})
					let XaisDataweek = AllLineChartXaisDataweek.filter((el, i, arr) => arr.indexOf(el) === i);
					setLineData(AllChartDetailDataweek)
					setLineXaxisData(XaisDataweek)
					break;
				case '日':
					setChangeLinerange("日")
					let ArrChart = ['全站流量(所有使用者)', '流量01-直接來源', '流量02-自然搜尋', '流量03-付費搜尋', '流量04-社交媒體', '流量05-Line與EDM', '流量06-推薦與其他']
					let AllChartDetailData = [];
					let AllLineChartXaisData = [];
					ArrChart.map((name, key) => {
						let ChartDetailData = [];
						chartdata.map((value, index) => {
							if (key == value['segment']) {
								ChartDetailData.push(parseFloat(value[changeLinetype]))
								AllLineChartXaisData.push(value['month'] + '-' + value['day'])
							}
						})
						const row_data = {
							label: name,
							data: ChartDetailData,
							fill: true,
							backgroundColor: ArrChartcolor[key],
							borderColor: ArrChartcolormain[key]
						};
						if (key != 0) {
							AllChartDetailData.push(row_data)
						}
					})
					let XaisData = AllLineChartXaisData.filter((el, i, arr) => arr.indexOf(el) === i);
					setLineData(AllChartDetailData)
					setLineXaxisData(XaisData)
					break;
				case '小時':
					setChangeLinerange("小時")
					let ArrChartHour = ['全站流量(所有使用者)', '流量01-直接來源', '流量02-自然搜尋', '流量03-付費搜尋', '流量04-社交媒體', '流量05-Line與EDM', '流量06-推薦與其他']
					let AllChartDetailDataHour = [];
					let AllLineChartXaisDataHour = [];
					ArrChartHour.map((name, key) => {
						let ChartDetailData = [];
						chartdata.map((value, index) => {
							if (key == value['segment']) {
								ChartDetailData.push(parseFloat(value[changeLinetype]))
								AllLineChartXaisDataHour.push(value['day']+'日'+value['date']+'時')
							}
						})
						const row_data = {
							label: name,
							data: ChartDetailData,
							fill: true,
							backgroundColor: ArrChartcolor[key],
							borderColor: ArrChartcolormain[key]
						};
						if (key != 0) {
							AllChartDetailDataHour.push(row_data)
						}
					})
					let XaisDataHour = AllLineChartXaisDataHour.filter((el, i, arr) => arr.indexOf(el) === i);
					setLineData(AllChartDetailDataHour)
					setLineXaxisData(XaisDataHour)
					break;
			}
		}
	}
	//當chartdata轉換時可以重新刷新表單
	useEffect(() => {
		renderChartData();
	}, [chartdata, changeLinetype])
	const dataline = {
		labels: lineXaxisdata,
		datasets: linedata
	};
	const linebar = {
		title: {
			display: true,
			text: changeLinerange + '時間區間-' + charttitle,
			fontSize: 14
		},
		legend: {
			display: true,
			position: 'left'
		},
		scales: {
			xAxes: [{
				offset:true,
			}]
		},
	}
	return (
		<LineDiv>
			<Line data={dataline} options={linebar} height={50}/>
		</LineDiv>
	);
}

export { LineDemochart };