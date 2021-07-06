export default function Faqs(props) {

  const {id, dataTarget, ariaControls, number, question, collapse, answer} = props
  return (
    <div className="card">
      <div className="card-header" id={id}>
        <h2 className="mb-0">
          <button
            className="btn btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target={dataTarget}
            aria-expanded="true"
            aria-controls={ariaControls}
          >
            <span>{number} </span> {question}
          </button>
        </h2>
      </div>

      <div
        id={ariaControls}
        className={collapse}
        aria-labelledby={id}
        data-parent="#accordionExample"
      >
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
}
