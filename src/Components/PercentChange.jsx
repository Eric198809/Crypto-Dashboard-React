
import { useEffect, useState } from "react";


const PercentChange = ({ percent }) => {
  const [color, setColor]= useState()

useEffect(()=>{
if (percent) {
  if (percent >= 0) {
    setColor("green")
  }else{
    setColor("red")
  }
}else{
  setColor("white")
}
}, [percent]);

  return (
    
    <>
   <p  style={{ color: color }}>
    {percent ? `${percent.toFixed(1)} %` : "-"}
    </p>   
    
    </>
    
  );
};

export default PercentChange;