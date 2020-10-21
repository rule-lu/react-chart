import styled from 'styled-components';
import { ButtonGroup } from 'react-bootstrap';

//首頁page 按鈕 樣式及位置 start
const MainDiv = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: auto;
	background-color: #61a0f8;
`;
const ChartDiv = styled.div`
	width: 80%;
	background-color: #FFFFFF;
	margin:10px auto;
	border-radius:30px;
	padding:20px;
	display:flex;
	flex-direction:column;
`;
const TitleDiv = styled.div`
	font-size: 2rem;
	font-weight:bold;
	display:flex;
`;
const Titlefont = styled.div`
	margin:15px;
	font-size: 2rem;
	font-weight:bold;
`;
const DateDiv = styled.div`
	padding:10px
`;
const ButtonDiv = styled.div`
	margin:12px 12px 0 12px;
`;
const Titlebtngroup = styled(ButtonGroup)`
	height:40px;
	margin:20px 0 0 20%;
`;
const LineChartBtngroup = styled(ButtonGroup)`
	text-align:right;
	display:inline;
	margin:0 0 10px 0;
`;
const LineDiv = styled.div`
`;
const PieDiv = styled.div`
	display:flex;
	flex-wrap: wrap ;
	width:100%;
`;
const Pieflex = styled.div`
	flex: 1;
	padding:5px;
`;
const FormStyle = styled.form`
	display:flex;
`;
export { MainDiv ,ChartDiv , TitleDiv ,PieDiv ,Pieflex , LineDiv , Titlefont ,Titlebtngroup ,LineChartBtngroup,DateDiv,ButtonDiv ,FormStyle};