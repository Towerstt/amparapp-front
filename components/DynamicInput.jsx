export default function DynamicInput(props) {
  const { className: style, classNameInput:styleInput, classNameContainer:styleContainer, onClick, type, placeholder, id, label } = props;
  return (
    <div className={`container-input  ${style}`}>
      <div className={`material-textfield ${styleContainer}`}>
        <input
          id={id}
          placeholder={placeholder? placeholder:' '}
          required
          type={type}
          onClick={onClick}
          className={styleInput}
        />
        <label className="">{label}</label>
      </div>
    </div>
  );
}

