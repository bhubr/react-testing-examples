import HookForm from './HookForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing forms</h1>
      <HookForm onSubmit={(data) => console.log('data from form', data)} />
    </div>
  );
}

export default App;
