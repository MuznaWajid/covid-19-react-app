import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 , auto",
    marginTop: 50
  },
  title: {
    textAlign: 'left',
    title: {
      textAlign: 'left'
  },
  table: {
      height: 450,
      overflowY: 'scroll',
      display: 'block'
  }
},

}));

export default function Allcountries() {
  const [globalData, setglobalData] = useState([{}]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      let data = await response.json();
     
      // console.log(data)
      setglobalData(Object.values(Object.values(data.countryitems[0])));
      console.log(Object.values(Object.values(data.countryitems[0])));
    }
    getData();
  }, [])
  const classes = useStyles();
console.log(globalData)
  return (
    <div className={classes.root}>
      <table>
        {globalData.map(data => {
          return(
            <tr>
            <td>
            {data.title}
              </td>
            <td><h3 className = {classes.title}>
            
           { // {key.replace(/_/g,'') } 
          }
          {data.title }+Hello
                     </h3>
          </td>
            <td> 
           { // <h3>{globalData[0][key]}</h3>
        }
            </td>
            </tr> 
          )
        })}
       </table>
      
    </div>
  );
}
