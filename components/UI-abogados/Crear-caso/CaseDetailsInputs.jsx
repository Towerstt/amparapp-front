import { Fragment, useState, useEffect } from "react";
import DynamicInput from "../../DynamicInput";
import DynamicButton from "../../DynamicButton";
import ClientsInfo from "./ClientsInfo";
import { useRouter } from "next/router";
import Uppy from "@uppy/core";
import FileInput from "@uppy/file-input";
import Tus from "@uppy/tus";
import '@uppy/core/dist/style.css'
import '@uppy/file-input/dist/style.css'
import { postNewCase } from "../../../lib/api";

export default function CaseDetailsInputs(props) {
  // console.log('EDASDASDas', props)
  const router = useRouter();
  const [docs, setDocs] = useState({demanda : '', poder : '', image : ''})
  const [docsToData, setDocsToData] = useState({demanda : '', poder : ''})
  const [data, setData] = useState({
    image: "",
    title: "",
    shortDescription: "",
    longDescription: "",
    sentenceEffects: "",
    plaint: "",
    cost: "",
    limitDate: "",
    aditionals: [],
    status: "",
    creationDate: new Date(),
    responsibleUser: props.id,
    signers : [],
    documents : {}
  });

  useEffect(() => {
    const uppyImg = new Uppy({restrictions:{
      maxNumberOfFiles : 1, 
      allowedFileTypes : ['image/*']
    }});
    uppyImg
      .use(FileInput, {
        target: "#image",
        locale: {strings : {chooseFiles : 'Sube la imagen del caso'}},
        replaceTargetContent: true,
      })
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
      .on('file-added', (file) => {
        console.log('Added file', file)
        setDocs({...docs, image : file.data.name})
        uppyImg.upload()
      })
      .on("complete", (result) => {
        console.log("Upload result:", result);

        setData({...data, image : result.successful[0].response.uploadURL})
      });



    const uppyDemanda = new Uppy({restrictions:{
      maxNumberOfFiles : 1,
      allowedFileTypes : ['.pdf']
    }});
    uppyDemanda
      .use(FileInput, {
        target: "#demanda",
        locale: {strings : {chooseFiles : 'Sube el archivo de la demanda'}},
        replaceTargetContent: true,
      })
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
      .on('file-added', (file) => {
        console.log('Added file', file)
        setDocs({...docs, demanda : file.data.name})
        uppyDemanda.upload()
      })
      .on("complete", (result) => {
        console.log("Upload result:", result);

        // setDocsToData({...docsToData, demanda : result.successful[0].response.uploadURL})
      });

      const uppyPoder = new Uppy({restrictions:{
      maxNumberOfFiles : 1,
      allowedFileTypes : ['.pdf']
    }});
    uppyPoder
      .use(FileInput, {
        target: "#poder",
        locale: {strings : {chooseFiles : 'Sube el archivo de tu poder'}},
        replaceTargetContent: true,
      })
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
      .on('file-added', (file) => {
        console.log('Added file', file)
        setDocs({...docs, poder : file.data.name})
        uppyPoder.upload()
      })
      .on("complete", (result) => {
        console.log("Upload result:", result);

        // setData({...data, documents : {poder : result.successful[0].response.uploadURL}})
      });

      // setData({...data, documents: docsToData})
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(data)
      console.log(docsToData)
      // const newCase = await postNewCase(data)
      router.replace("/abogados");
    } catch (error) {
      console.log(error);
    }
  };

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updateDocs = (e) => {
    setDocs({
      ...docs,
      [e.target.name]: e.target.value,
    });
    setDocsToData({...docsToData, [e.target.name]: e.target.value})
  };
  return (
    <Fragment >
      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Imagen del caso:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <div
          name='image'
          value={data.image}
          id='image'
            type="file" 
            className="  "
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
            onChange={updateField}
          />
          <span>{docs.image}</span>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Descripción del caso:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            name='title'
            value={data.title}
            type="text"
            className="  "
            label="Título del caso"
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
            onChange={updateField}
          />
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            name='plaint'
            value={data.plaint}
            type="text"
            className="  "
            label="Slogan del caso"
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
            onChange={updateField}
          />
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>
        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <textarea
            name='shortDescription'
            value={data.shortDescription}
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Descripción Corta"
            onChange={updateField}
          ></textarea>
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>
        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <textarea
            name='longDescription'
            value={data.longDescription}
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Descripción Larga"
            onChange={updateField}
          ></textarea>
        </div>
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center"></div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <textarea
            name='sentenceEffects'
            value={data.sentenceEffects}
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Efectos de la sentencia"
            onChange={updateField}
          ></textarea>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3 ">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Fecha límite para firma:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12 ">
          <DynamicInput
            name='limitDate'
            value={data.limitDate}
            type="date"
            className="  "
            classNameInput=" form-control  rounded-lg w-1/2"
            classNameContainer=""
            onChange={updateField}
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Costo de acceso:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <DynamicInput
            name='cost'
            value={data.cost}
            type="number"
            className="  "
            classNameInput=" form-control  rounded-lg w-1/2"
            classNameContainer=""
            onChange={updateField}
            label="$$"
          />
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Demanda de Amparo:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <div
            name='demanda'
            value={docsToData.demanda}
            id='demanda'
            type="file"
            className="  "
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
            onChange={updateDocs}
          />
          <span>{docs.demanda}</span>
        </div>
      </div>

      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-6 md:col-span-2 xl:col-span-1 self-center  md:place-self-center mt-2">
          <p className="font-black  text-2xl   ">Representación Legal:</p>
        </div>

        <div className="col-span-6 md:col-span-4 xl:col-span-5 mt-3 self-start xl:ml-12">
          <div
            name='poder'
            value={docsToData.poder}
            id='poder'
            type="file"
            className="  "
            classNameInput=" form-control  rounded-lg"
            classNameContainer=""
            onChange={updateDocs}
          />
          <span>{docs.poder}</span>
        </div>
      </div>

      {/* <div className="grid grid-cols-6 mt-3">
        <ClientsInfo/>
      </div> */}
              <DynamicButton
          className="bg-prussian rounded-lg shadow-sm my-4 "
          type="submit"
          onClick={handleSubmit}
        >
          <p className="text-white mx-4 my-2 "> Crear caso </p>
        </DynamicButton>

    </Fragment>
  );
}
