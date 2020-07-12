import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';



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
      <td>
      <tr>Country Name</tr></td>
     <td> <tr>Total Cases</tr></td>
     <td><tr>Active Cases</tr></td>
         {globalData.map((key,ind)=>{
          return(
            <tr><td>{globalData[ind].title}</td>
            <td>{globalData[ind].total_cases}</td>
            <td>{globalData[ind].total_active_cases}</td>
            </tr>
          )
        })
        
        
        
        
        
        // (data => {
        // //   return(
        // //     <tr>
        // //     <td>
        // //     {data.title}
        // //       </td>
        // //     <td><h3 className = {classes.title}>
            
        // //    { // {key.replace(/_/g,'') } 
        // //   }
        // //   {data.title }+Hello
        // //              </h3>
        // //   </td>
        // //     <td> 
        // //    { // <h3>{globalData[0][key]}</h3>
        // // }
        // //     </td>
        // //     </tr> 
        // //   )
        }
  
       </table>
      
    </div>
  );
}
