import './PracticeItem.css'

const PracticeItem = ({title, component, description}) => { //eslint-disable-line

  return <div className='container'>
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    <h3>{component}</h3>
  </div>;
};

export default PracticeItem;
