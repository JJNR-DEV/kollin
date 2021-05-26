import './ProgressEvaluationCard.scss';

const ProgressEvaluationCard = (props) => (
  <div className={`progressEvaluationCard ${ props.type  }`}>
    <h3>{ props.amount }</h3>
    <p>{ props.type }</p>
  </div>
);

export default ProgressEvaluationCard;
