import Checks from "./components/Checks";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
function App() {
  return (
    <div className="App">
      <Header />
      <Checks />
      <div>
        <ModalForm />
      </div>
    </div>
  );
}

export default App;
