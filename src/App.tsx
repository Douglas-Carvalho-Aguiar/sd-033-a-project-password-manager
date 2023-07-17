import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [form, setForm] = useState(false);

  const handleCancel = () => {
    setForm(false);
  };
  return (
    <>
      <h1>Gerenciador de senhas</h1>
      <Form onCancel={ handleCancel } />
    </>
  );
}
export default App;
