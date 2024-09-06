import './App.css'
import StateHookComponent from './challenges/StateHookComponent';
import PracticeItem from './components/PracticeItem';

function App() {


  return (
    <>
      <h1>React Practices</h1>
      <div>
        <PracticeItem title={"useState Hook Example"} component={ <StateHookComponent />} description={'Boss Battle Component with enemy health state.'} />
      </div>
    </>
  )
}

export default App
