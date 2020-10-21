import React, {useState, useEffect} from 'react';
import {MDBDataTableV5} from 'mdbreact';
import {pieRequestItem} from '../api/api_item';

const styles = {
    marginTop: '10px'
};
const Basic = () => {
    const [columndata, setcolumndata] = useState([])
    const datatable = {
        columns: [
            {
                label: '流量01-直接來源_品牌',
                field: 'segment1',
                width: 150,
                sort: 'disabled',
            },
            {
                label: '流量02-自然搜尋',
                field: 'segment2',
                sort: 'disabled',
                width: 270,
            },
            {
                label: '流量03-付費搜尋',
                field: 'segment3',
                sort: 'disabled',
                width: 200,
            },
            {
                label: '流量04-社交媒體',
                field: 'segment4',
                sort: 'disabled',
                width: 100,
            },
            {
                label: '流量05-Line與EDM',
                field: 'segment5',
                sort: 'disabled',
                width: 150,
            },
            {
                label: '流量06-推薦與其他',
                field: 'segment6',
                sort: 'disabled',
                width: 100,
            },
        ],
        rows: columndata,
    };

    async function getData() {
        const {data} = await pieRequestItem();
        const all_type = {};
        const data_web_per = [];
        const table_data = {};
        for (var i = 0; i <= 6; i++) {
            all_type['segment' + i] = new Array(5).fill(0);
        }
        data.map((val) => {
            // //把資料塞進陣列並加總
            for (var j = 1; j <= 5; j++) {
                //加總
                all_type['segment0'][j - 1] += val['type' + j];
                //各流量
                all_type['segment' + val['segment']][j - 1] += val['type' + j];
            }
            //新建使用者比率
        });
        for (var k = 1; k <= 6; k++) {
            table_data['segment' + k] = Math.round(all_type['segment' + k][1] / all_type['segment0'][1] * 100) + '% ('+all_type['segment' + k][1]+' 人)';
            data_web_per.push(Math.round(all_type['segment' + k][1] / all_type['segment0'][1] * 100));
        }
        setcolumndata([table_data])
        //setbardata(all_type)
    }

    getData()
    return (
        <div style={styles}>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable}/>
        </div>
    );
}

const Basic_line = () => {
    const [columndata, setcolumndata] = useState([{
        segment1: 'NT $'+234218,
        segment2: 'NT $'+256022,
        segment3: 'NT $'+193954,
        segment4: 'NT $'+137938,
        segment5: 'NT $'+222648,
        segment6: 'NT $'+165808,
    }])
    const datatable = {
        columns: [
            {
                label: '1周0302-0308',
                field: 'segment1',
                width: 150,
                sort: 'disabled',
            },
            {
                label: '2周0309-0315',
                field: 'segment2',
                sort: 'disabled',
                width: 270,
            },
            {
                label: '3周0316-0322',
                field: 'segment3',
                sort: 'disabled',
                width: 200,
            },
            {
                label: '4周0323-0329',
                field: 'segment4',
                sort: 'disabled',
                width: 100,
            },
            {
                label: '5周0330-0405',
                field: 'segment5',
                sort: 'disabled',
                width: 150,
            },
            {
                label: '6周0406-0412',
                field: 'segment6',
                sort: 'disabled',
                width: 100,
            },
        ],
        rows: columndata,
    };
    return (
        <div style={styles}>
            <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable}/>
        </div>
    );
}

export {Basic, Basic_line};