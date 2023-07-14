import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [form, setForm] = useState(false);
  const handleRegister = () => {
    setForm(true);
  };

  const handleCancel = () => {
    setForm(false);
  };
  return (
    <>
      <h1>Gerenciador de senhas</h1>
      {!form && (
        <button onClick={ handleRegister }> Cadastrar nova senha</button>
      )}
      {form && (
        <Form onCancel={ handleCancel } />
      )}
    </>
  );
}
export default App;
