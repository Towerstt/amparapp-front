import { Fragment, useState } from "react";
import CardCasesEstructure from "./CardCasesEstructure";
import DynamicButton from "../DynamicButton";

export default function FirmCasesEstructure(props) {

  const [displayFirmCases, setDisplayFirmCases] = useState("hidden");

  const onFirmCasesToggle = () => {
    let isDisplayFirmCases = displayFirmCases === "hidden" ? "block" : "hidden";
    setDisplayFirmCases(isDisplayFirmCases);
  };

  return (
    <Fragment>
      <div className={`col-span-1 ${''}`}>
        <DynamicButton
          className="bg-honeyyellow border-2 	border-prussian  rounded-lg shadow-sm  w-full"
          onClick={onFirmCasesToggle}
        >
          <p className="text-white m-2 text-2xl">Casos en firma</p>
        </DynamicButton>
      </div>

      <div className={`col-span-1 grid grid-cols-1 ${displayFirmCases}`}>
        <CardCasesEstructure 
        hiddenDisplay={props.hiddenDisplay}
        />
      </div>
    </Fragment>
  );
}
