export default function DynamicInput(props) {
  const { className: style, classNameInput:styleInput, classNameContainer:styleContainer, onClick, onChange, onBlur, type, placeholder, id, label, value, name } = props;
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
          className={`${styleInput} rounded-lg`}
          onBlur={onBlur}
        />
        <label className="">{label}</label>
      </div>
    </div>
  );
}

