import './App.css';
import Message from './Mensaje.js'


function App() {
  return (
    <div className="App">
      <Message color='green' name = 'Hola soy una ..' />
      <Message color='red' name = 'Persona que esta usando ..' />
      <Message color='purple' name = 'React desde el inicio.' />   
    </div>
  );
}

export default App;
