import './App.css';
import Message from './Message.js';


function Description(){
  return(
    <div className="Mensaje">
      <h1>Este es un ejemplo de fullstack en react</h1>
    </div>
  );
}

function App() {

  return (
    <div className="App">
        <Message color= "red" title="Hello, world!"/>
        <Message color = "green" title="Andres Valarezo"/>
        <Description/>
    </div>
  );
}

export default App;
