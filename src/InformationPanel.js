import React, { useEffect, useState } from 'react';
import Globalstates from './Globalstates';
import Allcountries from "./Allcountries"
export default function InfoPanel({currentscreen}) {
  

  if(currentscreen ===0)
  return <Globalstates />
    
  else if(currentscreen === 1)
  return <Allcountries />
    else return <Globalstates />

}