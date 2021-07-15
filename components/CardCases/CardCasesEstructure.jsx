import { useState, useEffect } from "react";
import CardCasesData from "./CardCasesData";

export default function CardCasesEstructure(props) {
  console.log(props)
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/cases")
      .then((response) => response.json())
      .then((json) => {
        if (!props.data){
          setData(json.data.allCases)
        }
        else {
          const filteredCases = Object.values(json.data.allCases).filter((el) => 
          el.title.includes(props.data))
          setData(filteredCases)
        }
        });
  },[props.data]);
  return (
    <div className="container p-0">
      <div className="grid  grid-cols-2   p-0   ">
        <CardCasesData 
        data={Object.values(data)}
        hiddenDisplay={props.hiddenDisplay} />
      </div>
    </div>
  );
}
