
import { Fragment, useState } from "react";
import DynamicButton from "../DynamicButton";
import CardAdminCases from "../UI-abogados/CardAdminCases";

export default function ActiveCasesEstructure(){

  const [displayActiveCases, setDisplayActiveCases] = useState("hidden");

  const activeCasesToggle = () => {
    let isDisplayActiveCases =
      displayActiveCases === "hidden" ? "block" : "hidden";
    setDisplayActiveCases(isDisplayActiveCases);
  };

  return(
<Fragment>


    <div className="col-span-1 mt-4">
    <DynamicButton
      className="bg-honeyyellow rounded-lg shadow-sm  w-full border-2 	border-prussian"
      onClick={activeCasesToggle}
    >
      <p className="text-white m-2 text-2xl">Casos activos</p>
    </DynamicButton>
  </div>

  <div className={`col-span-1 grid grid-cols-1 ${displayActiveCases}`}>
    <CardAdminCases
      link={`/abogados/${'id'}/cases/casos-activos/${'cactivo'}`}

      title={"title"}
      responsibleUser={"responsibleUser"}
      sentenceEffects={"sentenceEffects"}
    />
  </div>
  </Fragment>
  )
}