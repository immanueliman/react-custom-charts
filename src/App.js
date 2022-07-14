
import Charts from "./Charts"
import React, { useState } from 'react'


import { Chart, registerables } from 'chart.js';
import "./App.css"
Chart.register(...registerables);


function App() {
  //creating use state for which type of chart user selected like bar , line,, pie
  const [type, setType] = useState();
  
  // storing x axis and y axis in 2 arrays 
  let heading1 = ['Apple', 'Blue berries', 'Mango', 'Green Apple', 'Grapes', 'Orange']
  let heading2 = [12, 19, 6, 5, 10, 7]
  
  //set that data values in different usestate for send to  chilld component
  const [col1, setCol1] = useState(heading1)
  const [col2, setCol2] = useState(heading2)

  //  this is for selecting which charte and set that type to settype
  const handleChange = (e) => {
    let checkedName = e.target.value;
    setType(checkedName)
    };

    // this function is getting all values from the user , and stored in temparary arrays. and set that array to usestate of col1 and col2
  const save = (e) =>{
      const col1row1 = document.getElementById("1col1row").value;
      const col2row1 = document.getElementById("2col1row").value;
      const col1row2 = document.getElementById("1col2row").value;
      const col2row2 = document.getElementById("2col2row").value;
      const col1row3 = document.getElementById("1col3row").value;
      const col2row3 = document.getElementById("2col3row").value;
      const col1row4 = document.getElementById("1col4row").value;
      const col2row4 = document.getElementById("2col4row").value;
      const col1row5 = document.getElementById("1col5row").value;
      const col2row5 = document.getElementById("2col5row").value;
      const col1row6 = document.getElementById("1col6row").value;
      const col2row6 = document.getElementById("2col6row").value;

      heading1[0] = col1row1
      heading1[1] = col1row2
      heading1[2] = col1row3
      heading1[3] = col1row4
      heading1[4] = col1row5
      heading1[5] = col1row6

      heading2[0] = col2row1
      heading2[1] = col2row2
      heading2[2] = col2row3
      heading2[3] = col2row4
      heading2[4] = col2row5
      heading2[5] = col2row6
      
      setCol1(heading1)
      setCol2(heading2)
    }

  return (
    <div className='section'>
      <div className="title">
        <h4>Create Your Own Chart With Your Own Data</h4>
      </div>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th id="head1">fruites</th>
              <th id="head2">values</th>
            </tr>
            
            <tr>
              <td><input type="text" defaultValue={heading1[0]} id="1col1row"/></td>
              <td><input type="text" defaultValue={heading2[0]} id="2col1row" /></td>
              
            </tr>
            <tr>
               <td><input type="text" defaultValue={heading1[1]} id="1col2row" /></td>
              <td><input type="text" defaultValue={heading2[1]} id="2col2row" /></td>
            </tr>
            <tr>
               <td><input type="text" defaultValue={heading1[2]} id="1col3row" /></td>
              <td><input type="text" defaultValue={heading2[2]} id="2col3row" /></td>
            </tr>
            <tr>
              <td><input type="text" defaultValue={heading1[3]} id="1col4row" /></td>
              <td><input type="text" defaultValue={heading2[3]} id="2col4row" /></td>
            </tr>
            <tr>
              <td><input type="text" defaultValue={heading1[4]} id="1col5row" /></td>
              <td><input type="text" defaultValue={heading2[4]} id="2col5row" /></td>
            </tr>
            <tr>
              <td><input type="text" defaultValue={heading1[5]} id="1col6row" /></td>
              <td><input type="text" defaultValue={heading2[5]} id="2col6row" /></td>
            </tr>
            
          </tbody>
          
        </table>
        <br></br>
        
        
      </div>
      
      <div className="button">
        <button onClick={save}>Save table</button>
      </div>
      <div id='zonar'>
        <ul>
          <li>
            <input type="radio" id="myCheckbox1" name='radio' value={'line'} onChange={handleChange} /> 
            <label htmlFor='myCheckbox1'><img src="https://p.kindpng.com/picc/s/713-7139951_growth-line-graph-png-transparent-png.png" alt='line'/></label>Line
          </li>
          <li>
            <input type="radio" id="myCheckbox2" name='radio' value={'bar'} onChange={handleChange}  />
            <label htmlFor='myCheckbox2'><img src="http://atlas-content-cdn.pixelsquid.com/stock-images/bar-graph-y1KAkP1-600.jpg" alt='bar' /></label> Bar
          </li>
          <li>
            <input type="radio" id="myCheckbox3" name='radio' value={'pie'} onChange={handleChange}/>
            <label htmlFor='myCheckbox3'><img src="https://www.pngfind.com/pngs/m/45-451601_pie-chart-computer-icons-graph-of-a-function.png" alt='pie'/></label> Pie
          </li>
          <li>
            <input type="radio" id="myCheckbox4" name='radio' value={'polarArea'} onChange={handleChange}/>
            <label htmlFor='myCheckbox4'><img src="https://cdn.themexpert.com/images/xdocs/quix/elements/polar-area-chart/polarAreaChart3.png" alt='polarArea'/></label> PolarArea
          </li>
          <li>
            <input type="radio" id="myCheckbox5" name='radio' value={'Donut'} onChange={handleChange}/>
            <label htmlFor='myCheckbox5'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Donut-Chart.svg/1024px-Donut-Chart.svg.png" alt='Donut'/></label> Doughnut
          </li>
        </ul>
      </div>
      <br></br>
      <Charts type = {type} col1 = {col1} col2 = {col2}/>

    </div>
  )
}

export default App
