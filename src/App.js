import logo from './logo.svg';
import './App.css';
import SimpleForm from './form';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <SimpleForm people={props.people}  />
      </header>
    </div>
  );
}

export default App;
