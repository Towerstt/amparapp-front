import CardCases from "./CardCases";

export default function CardCasesData(props) {


  //en esta funcion se puede hacer el fetch y ppsterior map
  // puse como props el nombre desde la base de datos, solo altImage y totalSigners son adicionales
  //falta en CardCases la funcion para medir el tiempo que falta
  //en aditionals juan puso como info solo algunas cosas, como el estado donde se promueve o si es federal

  return (

    <CardCases
    key={"id"}
    image={"https://11g-files-juandedios.s3.us-east-2.amazonaws.com/amparapp/matrimonio.png"}
    title={"title"}
    shortDescription={"shortDescription"}
    altImage={"altImage"}
    aditionals={"aditionals"}
    limitDate={"limitDate"}
    totalSigners={"totalsigners"}
    creationDate={"creationDate"}
    />
    
  );
}

   

          