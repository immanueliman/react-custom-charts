
import React from 'react'
import { Bar, Doughnut, Line, Pie, PolarArea } from 'react-chartjs-2';
import "./App.css"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

//i am reciving type of chart and col1 data and col2 data
// i am using else if cindition for rendering paricalar type of chart
// initally no chart selected so it shows select something

function Charts({type, col1, col2}) {

    {if(type === "bar"){
        return (
            <div className='chart'>
    
            <Bar
            data = {{
              labels: col1,
              datasets: [{
                 
                  label: 'Fruites',
                  data: col2,
                  
                  barThickness: 60,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  
                  borderWidth: 1
              }]
            }}
            height={400}
            width= {400}
            options = {{
              maintainAspectRatio : false,
             

            }}
            />
      
          </div>
        )
    }
     else if (type === "line"){
        return (
            <div className='chart'>
    
            <Line
            data = {{
              labels: col1,
              datasets: [{
                fill : true,
                  label: 'Fruites',
                  data: col2,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
            }}
            height={400}
            width = {400}
            options = {{
              maintainAspectRatio : false,
              
            }}
            />
      
          </div>
        )
     }
     else if (type === "polarArea"){
      return (
          <div className='chart'>
  
          <PolarArea
          data = {{
            labels: col1,
            datasets: [{
              fill : true,
                label: 'Fruites',
                data: col2,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.9)',
                  'rgba(54, 162, 235, 0.9)',
                  'rgba(255, 206, 86, 0.9)',
                  'rgba(75, 192, 192, 0.9)',
                  'rgba(153, 102, 255, 0.9)',
                  'rgba(255, 159, 64, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
          }}
          height={400}
          width = {400}
          options = {{
            maintainAspectRatio : false,
          }}
          />
    
        </div>
      )
   }
   else if (type === "Donut"){
    return (
        <div className='chart'>

        <Doughnut
        data = {{
          labels: col1,
          datasets: [{
            fill : true,
              label: 'Fruites',
              data: col2,
              backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
        }}
        height={400}
        width = {400}
        options = {{
          maintainAspectRatio : false,
        }}
        />
  
      </div>
    )
 }
    else if(type === "pie"){
        return (
          <div>
            <div className='chart'>
            
            <Pie
            data = {{
              labels: col1,
              datasets: [{
                  label: '# of Votes',
                  data: col2,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(75, 192, 192, 0.9)',
                      'rgba(153, 102, 255, 0.9)',
                      'rgba(255, 159, 64, 0.9)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
            }}
            height={400}
            width = {400}
            options = {{
              maintainAspectRatio : false,
              
            }}
            />
      
          </div>
          </div>
        )
    } else{
        return (
            <div className='center'>
                <h4>For Visiting Grapth Please Select any one of the Above</h4>
            </div>
        )
    }}
    
  
}

export default Charts
