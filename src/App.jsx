import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Bar from './Bar';
import Scale from './Scale';
function App() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    async function getArray() {
      let ans = await axios
        .get('https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new')
        .then((response) => response.data.split("\n").map((num) => Number(num)))
        .catch((error) => console.log(error));
      console.log(ans);
      console.log("========");
      const array = ans.reduce((acc, curr) => {
        if (curr) {
          acc[curr] = (acc[curr] || 0) + 1;
        }
        return acc;
      }, []);
      setArr(array)
    }
    getArray();
  }, []);

  return (
    <>

      <div style={{ display: 'flex ', justifyContent: 'center', alignItems: 'flex-end', gap: "1rem" }} >
        <div style={{ display: 'flex' }} >
          <div
            style={{ backgroundColor: 'blue', width: '0.1rem', height: '600px' }}
          >
          </div>
          <div
            style={{ width: '1rem', height: '600px' }}
          >
            <div
              style={{ width: '1rem', height: '200px' }}
            >
              30
            </div>
            <div
              style={{ width: '1rem', height: '200px' }}
            >
              20
            </div>
            <div
              style={{
                width: '1rem', height: '200px',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>10</div>
              <div>0</div>
            </div>


          </div>
        </div>
        {arr.map((bar, index) => {
          if (bar) {
            return <div
              style={{ backgroundColor: 'yellow' }}
            >
              <Bar height={`${bar * 20}px`} /><span>{index}</span>
            </div>
          }
        })}
      </div>


    </>
  )
}

export default App