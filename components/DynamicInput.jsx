export default function DynamicInput(props) {
  const { className: style, classNameInput:styleInput, classNameContainer:styleContainer, onClick, onChange, type, placeholder, id, label, value, name } = props;
  return (
    <div className={`container-input  ${style}`}>
      <div className={`material-textfield ${styleContainer}`}>
        <input
          value={value}
          name={name}
          id={id}
          placeholder={placeholder? placeholder:' '}
          required
          type={type}
          onClick={onClick}
          onChange={onChange}
          className={styleInput}
        />
        <label className="">{label}</label>
      </div>
    </div>
  );
}

