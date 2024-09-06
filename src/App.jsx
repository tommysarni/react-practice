import "./App.css";
import EffectHookComponent from "./challenges/EffectHookComponent";
import PropsComponent from "./challenges/Props";
import StateHookComponent from "./challenges/StateHookComponent";
import PracticeItem from "./components/PracticeItem";

function App() {
  return (
    <>
      <h1>React Practices</h1>
      <div className="maincontent">
        <PracticeItem
          title={"useState Hook Example"}
          component={<StateHookComponent />}
          description={"Boss Battle Component with enemy health state."}
        />
        <PracticeItem
          title={"useEffect Hook Example"}
          component={<EffectHookComponent />}
          description={"Easing Function Visualizers"}
        />
        <PracticeItem
          title={"Child-Parent Prop Example with State"}
          component={<PropsComponent />}
          description={"Dashboard with 2 Switch Components"}
        />
      </div>
    </>
  );
}

export default App;
