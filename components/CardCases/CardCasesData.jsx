import React from "react";
import CardCases from "./CardCases";

export default function CardCasesData(props) {  
    const dataToPrint = ({_id, image, title, shortDescription, aditionals, limitDate, signers, creationDate}) =>{
        return(
          <CardCases 
          key={_id}
          image={image}
          title={title}
          shortDescription={shortDescription}
          altImage={''}
          aditionals={aditionals.join(' ')}
          limitDate={limitDate}
          totalSigners={signers ? signers.length : 0}
          creationDate={creationDate}
          path={`/detalle-del-caso/${_id}`}
          />
        )
    }

    const cardsUi = props.data.map(dataToPrint);
  //en esta funcion se puede hacer el fetch y ppsterior map
  // puse como props el nombre desde la base de datos, solo altImage y totalSigners son adicionales
  //falta en CardCases la funcion para medir el tiempo que falta
  //en aditionals juan puso como info solo algunas cosas, como el estado donde se promueve o si es federal

  return (
    <React.Fragment>
      {cardsUi}
    </React.Fragment>
  );
}


//path={`/client/:id/case/${_id}`}
