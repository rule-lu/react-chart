import React , { useState, useEffect, useContext } from 'react';
import context from '../context/dataProvider'
import { Table } from 'react-bootstrap';


const BTable = () => {
	const { totaldata ,setTotalData} = useContext(context)
	const renderTableData = () =>{
		//表單標題
		let ArrTable = ['全站流量(所有使用者)','流量01-直接來源','流量02-自然搜尋','流量03-付費搜尋','流量04-社交媒體','流量05-Line與EDM','流量06-推薦與其他']
		if(totaldata.length==0){
			return ArrTable.map((value, index) => {
				return (
					<tr key={value}>
						<td>{value}</td>
						<td>{"0"}</td>
						<td>{"0"}</td>
						<td>{"0 %"}</td>
						<td>{"0 %"}</td>
						<td>{"0"}</td>
						<td>{"0 %"}</td>
						<td>{"$ 0"}</td>
					</tr>
				)
			})
		}
		else {
			return totaldata.map((totalvalue, index) => {
				const {segment, type1, type2,new_visitor,all_web_rate, type4,conversion_rate, type5} = totalvalue //destructuring
				return (
					<tr key={segment}>
						<td>{ArrTable[segment]}</td>
						<td>{type1}</td>
						<td>{type2}</td>
						<td>{new_visitor + '%'}</td>
						<td>{all_web_rate + '%'}</td>
						<td>{type4}</td>
						<td>{conversion_rate + '%'}</td>
						<td>{'$' + type5}</td>
					</tr>
				)
			})
		}
	}
	//當totaldata轉換時可以重新刷新觸發
	useEffect(() => {
		renderTableData()
	}, [totaldata])
	return (
		<Table striped bordered hover>
			<thead>
			<tr>
				<th>參考輔助</th>
				<th>工作階段</th>
				<th>使用者</th>
				<th>新訪客占比</th>
				<th>全站站比</th>
				<th>交易次數</th>
				<th>轉換率</th>
				<th>收益/營收</th>
			</tr>
			</thead>
			<tbody>
			{renderTableData()}
			</tbody>
		</Table>
	);
};

export { BTable };