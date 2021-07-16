import DynamicInput from "../DynamicInput";
import DynamicButton from "../DynamicButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { editLawyerData } from "../../lib/api";
import Uppy from "@uppy/core";
import FileInput from "@uppy/file-input";
import Tus from "@uppy/tus";
import '@uppy/core/dist/style.css'
import '@uppy/file-input/dist/style.css'

export default function LawyerProfileEdit(props) {
  const router = useRouter();
  const [imgName, setImgName] = useState('')
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    idCard: "",
    imgProfile: "",
    address: "",
    description: "",
    linkedin: "",
    enterprise: "",
    website: "",
  });

  useEffect(() => {
    const uppy = new Uppy({restrictions:{
      maxNumberOfFiles : 1,
      allowedFileTypes : ['image/*']
    }});
    uppy
      .use(FileInput, {
        target: "#profile-pic",
        locale: {strings : {chooseFiles : 'Sube tu imagen'}},
        replaceTargetContent: true,
      })
      .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
      .on('file-added', (file) => {
        console.log('Added file', file)
        setImgName(file.data.name)
        uppy.upload()
      })
      .on("complete", (result) => {
        console.log("Upload result:", result);

        setData({...data, imgProfile: result.successful[0].response.uploadURL})
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('DATA', data)
      // const newData = await editLawyerData(props.userId, data);
      // router.replace("/abogados");
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-block d-md-flex mt-2">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3 ">Contacto:</h2>
        </div>

        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex ">
            <DynamicInput
              name="firstName"
              value={data.firstName}
              type="text"
              className="mx-2 mb-3 "
              label="First name"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            <DynamicInput
              name="lastName"
              value={data.lastName}
              type="text"
              className="mx-2 mb-3 "
              label="Last name"
              classNameInput=" form-control  col-12  "
              classNameContainer=""
              onChange={updateField}
            />
          </div>

          <div className="d-block d-md-flex">
            <DynamicInput
              name="phoneNumber"
              value={data.phoneNumber}
              type="text"
              className=" mx-2 mb-3 "
              label="Phone number"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            <DynamicInput
              name="email"
              value={data.email}
              type="email"
              className=" mx-2 mb-3 "
              label="Email"
              classNameInput=" form-control  col-12  "
              classNameContainer=""
              onChange={updateField}
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3 ">Imagen de perfil:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <div id="profile-pic" className='pl-2' /> 
            <span>{imgName}</span>
            {/* <DynamicInput
              type="file"
              className=" mx-2 mb-3 "
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
            /> */}
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Identidad:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              name="idCard"
              value={data.idCard}
              type="text"
              className=" mx-2 mb-3 "
              label="Cedula profesional"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            <DynamicInput
              name="linkedin"
              value={data.linkedin}
              type="text"
              className=" mx-2 mb-3 "
              label="LinkedIn"
              classNameInput=" form-control  col-12  "
              classNameContainer=""
              onChange={updateField}
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Dirección:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              name="address"
              value={data.address}
              type="text"
              className=" mx-2 mb-3 "
              label="Dirección Completa"
              classNameInput=" form-control  col-12  "
              classNameContainer=""
              onChange={updateField}
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Lugar de trabajo:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              name="enterprise"
              value={data.enterprise}
              type="text"
              className=" mx-2 mb-3 "
              label=" ONG que representas"
              classNameInput=" form-control  col-12  "
              classNameContainer=""
              onChange={updateField}
            />

            <DynamicInput
              name="website"
              value={data.website}
              type="text"
              className=" mx-2 mb-3 "
              label="Sitio web de la compañía"
              classNameInput=" form-control  col-12  "
              classNameContainer=""
              onChange={updateField}
            />
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Cuéntanos de ti:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex ">
            <div className="mx-2 mb-3 w-full">
              <textarea
                className="col-12 "
                placeholder="Cuéntanos"
                name="description"
                value={data.description}
                onChange={updateField}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex mt-4">
        <div className="col-12 col-md-3">
          <h2 className="font-black text-3xl pb-3">Cambia tu contraseña:</h2>
        </div>
        <div className="col-12 col-md-9">
          <div className="d-block d-md-flex">
            <DynamicInput
              name="password"
              value={data.password}
              type="password"
              className=" mx-2 mb-3 "
              label="Password"
              classNameInput=" form-control col-12  "
              classNameContainer=""
              onChange={updateField}
            />
            <DynamicInput
              name="confirm-password"
              type="password"
              className=" mx-2 mb-3 "
              label="Confirm your Password"
              classNameInput=" form-control  col-12  "
              classNameContainer=" "
              onBlur={(event) =>
                event.target.value != data.password
                  ? alert("Password y confirmación no coinciden")
                  : null
              }
            />
          </div>
        </div>
      </div>

      <div className="col-12 flex justify-center align my-3">
        <DynamicButton
          className="bg-prussian rounded-lg shadow-sm my-4 "
          type="submit"
        >
          <p className="text-white m-2 "> Actualizar datos </p>
        </DynamicButton>
      </div>
    </form>
  );
}
