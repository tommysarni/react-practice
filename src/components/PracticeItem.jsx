import './PracticeItem.css'

const PracticeItem = ({title, component, description}) => { //eslint-disable-line

  return <div className='container'>
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {component}
  </div>;
};

export default PracticeItem;
