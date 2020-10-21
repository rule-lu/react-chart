import React, {useState, useEffect, useInterval, generateDataset} from 'react';
import {Switch, Route} from 'react-router-dom';
import {LineDemochart,PieDemochart} from './chart';
import { Basic,Basic_line } from './datatable';

const styles = {
    marginTop: '10px'
};
// const Svg = () => {
//     // 宣告一個新的 state 變數，我們稱作為「count」。
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me {todos[0].text}
//             </button>
//         </div>
//     );
// }

const linechart = () => {
    return (
        <div style={styles}>
            <LineDemochart/>
        </div>
    );
};


const piechart = () => {
    return (
        <div style={styles}>
            <PieDemochart/>
        </div>
    );
};

// const Electronics = () => {
//     return (
//         <div>
//             <h1>Electronics</h1>
//             <Switch>
//                 {/* The component will show here if the current URL matches the path */}
//                 <Route path="/electronics/mobile" component={Mobile}/>
//                 <Route path="/electronics/desktop" component={Desktop}/>
//                 <Route path="/electronics/laptop" component={Laptop}/>
//             </Switch>
//         </div>
//     );
// };

/**
 * These are pages nested in Electronics
 */
// const Mobile = () => {
//     return <h3>Mobile Phone</h3>;
// };
//
// const Desktop = () => {
//     return <h3>Desktop PC</h3>;
// };
//
// const Laptop = () => {
//     return <h3>Laptop</h3>;
// };

export { linechart, piechart};