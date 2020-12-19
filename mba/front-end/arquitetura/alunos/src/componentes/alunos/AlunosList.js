import React from 'react';


function alunos(){
  let alunos = [];
  alunos.push({'nome':'Edite Santana', 'nascimento':'15/05/2005'});
  alunos.push({'nome':'Eisabel Gordim', 'nascimento':'15/05/2005'});
  alunos.push({'nome':'Tâmara Vergueiro', 'nascimento':'15/05/2005'});
  alunos.push({'nome':'Sandra Linhares', 'nascimento':'17/10/1980'});
  alunos.push({'nome':'Penelope Vieira', 'nascimento':'07/02/1995'});
  alunos.push({'nome':'Janimete Okahara', 'nascimento':'02/05/2010'});

  return alunos;
}

function AlunosList(props) {
    return (
      <div className="card">
        <ul className="no-bullet">
        {alunos().map((aluno, idx)=>{
          return <li id="{idx}">{aluno.nome}-{aluno.nascimento}</li>
        })}
        </ul>
      </div>
    );
  }
  
  export default AlunosList;
  