import { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [service, setServico] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validForm, setValidForm] = useState(false);

  const handleService = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setServico(event.target.value);
    formValidator();
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    formValidator();
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    formValidator();
  };

  const formValidator = () => {
    const nameValidator = service.length !== 0;
    const loginValidator = login.length !== 0;
    const passwordValidator = password.length >= 8
      && password.length <= 16
      && /[a-zA-Z]/.test(password)
      && /\d/.test(password)
      && /[!@#$%^&*]/.test(password);

    setValidForm(nameValidator && loginValidator && passwordValidator);
  };

  return (
    <form>
      <label htmlFor="serviceName">
        Nome do serviço
        <input
          type="text"
          name="serviceName"
          id="serviceName"
          value={ service }
          onChange={ handleService }
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          name="login"
          id="login"
          value={ login }
          onChange={ handleLogin }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          id="password"
          value={ password }
          onChange={ handlePassword }
        />
      </label>
      <label htmlFor="URL">
        URL
        <input type="text" name="URL" id="URL" />
      </label>
      <button disabled={ !validForm }>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </form>
  );
}
export default Form;
