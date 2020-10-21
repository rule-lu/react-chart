import Axios from 'axios'

export const GetTotalList = (data) => {
    const { REACT_APP_API_URL } = process.env
    let config = {
        headers: { 'Content-Type':'application/json',"Access-Control-Allow-Origin": "*" },
    }
    return Axios.post(REACT_APP_API_URL+'/total', data, config)
}

export const GetLineMonthList = (data) => {
    const { REACT_APP_API_URL } = process.env
    let config = {
        headers: { 'Content-Type':'application/json',"Access-Control-Allow-Origin": "*" },
    }
    return Axios.post(REACT_APP_API_URL+'/month', data, config)
}

export const GetLineWeekList = (data) => {
    const { REACT_APP_API_URL } = process.env
    let config = {
        headers: { 'Content-Type':'application/json',"Access-Control-Allow-Origin": "*" },
    }
    return Axios.post(REACT_APP_API_URL+'/week', data, config)
}

export const GetLineDayList = (data) => {
    const { REACT_APP_API_URL } = process.env
    let config = {
        headers: { 'Content-Type':'application/json',"Access-Control-Allow-Origin": "*" },
    }
    return Axios.post(REACT_APP_API_URL+'/day', data, config)
}

export const GetLineHourList = (data) => {
    const { REACT_APP_API_URL } = process.env
    let config = {
        headers: { 'Content-Type':'application/json',"Access-Control-Allow-Origin": "*" },
    }
    return Axios.post(REACT_APP_API_URL+'/hour', data, config)
}