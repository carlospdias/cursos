import React from 'react';

const login = (e)=>{
  e.preventDefault();

  console.log('e' + e);
}
function Login() {
  
    return (
      <div>
        <form className="form">
            <label>Usuário:<input type="text"       /></label>
            <label>Senha: <input type="password"    /></label>

            <button onClick={login} className="button primary">Autenticar</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  