type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  return (
    <form>
      <label htmlFor="serviceName">
        Nome do serviço
        <input type="text" name="serviceName" id="serviceName" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" name="login" id="login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="URL">
        URL
        <input type="text" name="URL" id="URL" />
      </label>
      <button>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </form>
  );
}
export default Form;
