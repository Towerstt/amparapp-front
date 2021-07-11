import { useState, useEffect } from "react"
import CardCasesData from "./CardCasesData"

export default function CardCasesEstructure(){
  
  const [data, setData] = useState({})

  useEffect(() =>{
    fetch('http://localhost:8080/cases')
      .then((response) => response.json())
        .then((json) => setData(json.data.allCases))
  },[])
  return(

    
          <div className="container p-0">
            <div className="grid  grid-cols-2   p-0   ">
              <CardCasesData data={Object.values(data)}/>
            </div>
          </div>
        


  )
}
