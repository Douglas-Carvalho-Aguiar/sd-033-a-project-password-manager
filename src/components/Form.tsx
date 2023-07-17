import { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

type Service = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

function Form({ onCancel }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validForm, setValidForm] = useState(false);
  const [url, setUrl] = useState('');
  const [form, setForm] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  const handleRegister = () => {
    setForm(true);
  };

  const handleService = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setServiceName(event.target.value);
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

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const newForm = () => {
    setServiceName('');
    setLogin('');
    setPassword('');
    setUrl('');
  };

  const handleCadastrar = (event: React.FormEvent) => {
    event.preventDefault();
    const newService: Service = {
      serviceName,
      login,
      password,
      url,
    };
    setServices([newService, ...services.slice().reverse()]);
    newForm();
    setForm(false);
  };

  const validPassword = 'valid-password-check';
  const invalidPssword = 'invalid-password-check';
  const nameValidator = serviceName.length !== 0;
  const loginValidator = login.length !== 0;
  const minPassword = password.length >= 8;
  const maxPassword = password.length <= 16;
  const letters = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const specialCharacter = /[!@#$%^&*]/.test(password);
  const formValidator = () => {
    setValidForm(nameValidator && loginValidator && minPassword && maxPassword
      && letters && specialCharacter);
  };
  if (form) {
    return (
      <form onSubmit={ handleCadastrar }>
        <label htmlFor="serviceName">
          Nome do serviço
          <input
            type="text"
            name="serviceName"
            id="serviceName"
            value={ serviceName }
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
        <div>
          <p
            className={
            minPassword ? validPassword : invalidPssword
         }
          >
            Possuir 8 ou mais caracteres
          </p>
          <p
            className={
            maxPassword ? validPassword : invalidPssword
         }
          >
            Possuir até 16 caracteres
          </p>
          <p
            className={
            letters ? validPassword : invalidPssword
         }
          >
            Possuir letras e números
          </p>
          <p
            className={
            specialCharacter ? validPassword : invalidPssword
         }
          >
            Possuir algum caractere especial
          </p>
        </div>
        <label htmlFor="URL">
          URL
          <input type="text" name="URL" id="URL" value={ url } onChange={ handleUrl } />
        </label>
        <button disabled={ !validForm }>Cadastrar</button>
        <button onClick={ onCancel }>Cancelar</button>
      </form>
    );
  }

  return (
    <>
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <>
          <h2>Serviços cadastrados:</h2>
          <ul>
            {services.reverse().map((element, index) => (
              <li key={ index }>
                <a href={ element.url } target="_blank" rel="noopener noreferrer">
                  {element.serviceName}
                </a>
                <p>{element.login}</p>
                <p>{element.password}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={ handleRegister }>
        Cadastrar nova senha
      </button>
    </>
  );
}
export default Form;
