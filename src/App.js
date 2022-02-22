import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing forms</h1>
      <Form onSubmit={console.log} />
    </div>
  );
}

export default App;
