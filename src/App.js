import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App({title}) {

  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
