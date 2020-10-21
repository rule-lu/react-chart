// /src/App.js
import React, { useEffect, useState } from 'react';
import { Provider as DataProvider } from './context/dataProvider'
import { GetTotalList,GetLineMonthList,GetLineWeekList,GetLineDayList,GetLineHourList } from './api/api_item';
import { LineDemochart } from './pages/chart';
import { PieDemochart } from './pages/piechart';
import { PieTrandchart } from './pages/piecharttrand';
import { PieMoneychart } from './pages/piechartmoney';
import { BTable } from './pages/boostraptable';
import { ThemeProvider, CSSReset, Box, Input } from '@chakra-ui/core'
import { customTheme } from './common/Theme'
import { ButtonGroup, Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css'
//引入form插件
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
//引入css
import {
	MainDiv,
	ChartDiv,
	TitleDiv,
	PieDiv,
	Titlefont,
	Titlebtngroup,
	LineChartBtngroup,
	DateDiv,
	ButtonDiv,
	FormStyle
} from './css/main_css'

const App = () => {
	const {register, handleSubmit, errors, control, watch} = useForm({
		defaultValues: { start_time: new Date("2020-08-01"),end_time: new Date("2020-08-05") }
	})
	const {start_time, end_time} = watch(["start_time", "end_time"]);
	const [totaldata, setTotalData] = useState([])
	const [chartdata, setChartData] = useState([])
	const [linedata, setLineData] = useState([])
	const [lineXaxisdata, setLineXaxisData] = useState([])
	const [piechangedata, setPiechangeData] = useState([])
	const [pietranddata, setPietrandData] = useState([])
	const [piemoneydata, setPiemoneyData] = useState([])
	//控制折線圖種類
	const [changeLinetype, setChangeLinetype] = useState('type2')
	//控制折線圖時間區間
	const [changeLinerange, setChangeLinerange] = useState('日')
	//儲存使用者選擇之日期區間
	const [AllTimeRange, setAllTimeRange] = useState()
	//button active
	const [BtnColor, setAllBtnColor] = useState()
	const DateChangeFunction = (date) => {
		const month = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12');
		if (new Date(date).getDate() < 10) {
			var datechange = '0' + new Date(date).getDate();
		} else {
			var datechange = new Date(date).getDate();
		}
		return new Date(date).getFullYear() + '-' + month[new Date(date).getMonth()] + '-' + datechange
	}
	const LineChartChange = (values) => {
		console.log(values);
		if(values!== undefined) {
			switch (changeLinerange) {
				case '月':
					GetLineMonthList(values)
						.then(function (res) {
							if (res.data.code === "200") {
								//console.log(res.data.data)
								setChartData(res.data.data)
							}
						})
						.catch(function (error) {
							console.log(error)
						})
					break;
				case '週':
					GetLineWeekList(values)
						.then(function (res) {
							if (res.data.code === "200") {
								//console.log(res.data.data)
								setChartData(res.data.data)
							}
						})
						.catch(function (error) {
							console.log(error)
						})
					break;
				case '日':
					GetLineDayList(values)
						.then(function (res) {
							if (res.data.code === "200") {
								//console.log(res.data.data)
								setChartData(res.data.data)
							}
						})
						.catch(function (error) {
							console.log(error)
						})
					break;
				case '小時':
					GetLineHourList(values)
						.then(function (res) {
							if (res.data.code === "200") {
								//console.log(res.data.data)
								setChartData(res.data.data)
							}
						})
						.catch(function (error) {
							console.log(error)
						})
					break;
			}
		}
	}
	const onSubmit = (values) => {
		if(values!== undefined && values.length!=0) {
			values['start_time'] = DateChangeFunction(values.start_time);
			values['end_time'] = DateChangeFunction(values.end_time);
			setAllTimeRange(values)
			//呼叫API(抓total data)
			GetTotalList(values)
				.then(function (res) {
					if (res.data.code === "200") {
						setTotalData(res.data.data)
					}
				})
				.catch(function (error) {
					console.log(error)
				})
			//呼叫API(抓長條圖資訊)
			LineChartChange(values)
		}
		else{
			const values={
				'start_time' : '2020-08-01',
				'end_time' : '2020-08-05'
			}
			setAllTimeRange(values)
			//呼叫API(抓total data)
			GetTotalList(values)
				.then(function (res) {
					if (res.data.code === "200") {
						setTotalData(res.data.data)
					}
				})
				.catch(function (error) {
					console.log(error)
				})
			//呼叫API(抓長條圖資訊)
			LineChartChange(values)
		}
	}
	//當chartdata轉換時可以重新刷新表單
	useEffect(() => {
		LineChartChange(AllTimeRange);
	}, [changeLinerange])

	useEffect(() => {
		onSubmit();
	}, [])
	const context = {
		totaldata,
		setTotalData,
		chartdata,
		setChartData,
		setLineData,
		linedata,
		lineXaxisdata,
		setLineXaxisData,
		piechangedata,
		setPiechangeData,
		pietranddata,
		setPietrandData,
		piemoneydata,
		setPiemoneyData,
		changeLinetype,
		setChangeLinetype,
		changeLinerange,
		setChangeLinerange,
		setAllTimeRange,
		AllTimeRange
	}
	//時間區間預設為2020-08-01 ~ 2020-08-10
	return (
		<DataProvider value={context}>
			<ThemeProvider theme={customTheme}>
				<CSSReset/>
				<MainDiv>
					<ChartDiv>
						<TitleDiv>
							<Titlefont>網站媒介/媒體整體績效圖表</Titlefont>
							<FormStyle onSubmit={handleSubmit(onSubmit)} autoComplete="off">
								<DateDiv>
									<Controller
										as={
											<DatePicker
												id="start_time"
												selected={ start_time}
												maxDate={new Date()}
												selectsStart
												isClearable
												startDate={start_time}
												placeholderText="開始時間"
												customInput={<Input/>}
											/>
										}
										name="start_time"
										control={control}
										valueName="selected"
									/>
								</DateDiv>
								<DateDiv>
									<Controller
										as={
											<DatePicker
												id="end_time"
												selected={ end_time}
												maxDate={new Date()}
												selectsEnd
												isClearable
												minDate={start_time}
												endDate={end_time}
												placeholderText="結束時間"
												customInput={<Input/>}
											/>
										}
										name="end_time"
										control={control}
										valueName="selected"
									/>
								</DateDiv>
								<ButtonDiv><Button variant="info" type="submit">搜尋</Button></ButtonDiv>
							</FormStyle>
							<Titlebtngroup aria-label="Basic example">
								<Button variant="info" onClick={() => setChangeLinerange("月")} className={changeLinerange === "月" ? 'active' : ''}>月</Button>
								<Button variant="info" onClick={() => setChangeLinerange("週")} className={changeLinerange === "週" ? 'active' : ''}>週</Button>
								<Button variant="info" onClick={() => setChangeLinerange("日")} className={changeLinerange === "日" ? 'active' : ''}>日</Button>
								<Button variant="info" onClick={() => setChangeLinerange("小時")} className={changeLinerange === "小時" ? 'active' : ''}>小時</Button>
							</Titlebtngroup>
						</TitleDiv>
						<BTable/>
						<LineChartBtngroup aria-label="Basic example">
							<Button variant="info"  onClick={() => setChangeLinetype("type2")} className={changeLinetype === "type2" ? 'active' : ''}>使用者</Button>
							<Button variant="info" onClick={() => setChangeLinetype("type4")} className={changeLinetype === "type4" ? 'active' : ''}>交易次數</Button>
							<Button variant="info" onClick={() => setChangeLinetype("conversion_rate")} className={changeLinetype === "conversion_rate" ? 'active' : ''}>轉換率</Button>
							<Button variant="info" onClick={() => setChangeLinetype("type5")} className={changeLinetype === "type5" ? 'active' : ''}>收益/營收</Button>
						</LineChartBtngroup>
						<LineDemochart/>
						<PieDiv>
							<PieDemochart/>
							<PieTrandchart/>
							<PieMoneychart/>
						</PieDiv>
					</ChartDiv>
				</MainDiv>
			</ThemeProvider>
		</DataProvider>
	);
}

export default App;