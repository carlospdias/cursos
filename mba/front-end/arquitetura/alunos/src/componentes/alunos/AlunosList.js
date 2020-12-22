import {useState} from 'react';

/*function alunos(){

  let alunos = [];
  alunos.push({'nome':'Edite Santana', 'id' : Date.now()});

  return alunos;
}*/

const AlunosList=(props)=> {
    const [nome,setNome] = useState('');
    const [alunos, setAlunos] = useState([]);

    const handleNameSetter=(e)=>{
        setNome(e.target.value);
    }
    const handleClickButton=(e)=>{
        setAlunos(previous=>[...previous,{id:Date.now(),nome}]);
    }
    const handleDeleteNome=(id)=>{
        //setAlunos(previous=>[...previous,{id:Date.now(),nome}]);
        setAlunos(previous=>previous.filter(aluno=>aluno.id!==id));
    }

    return (
     <>
     <label>Nome<input type="text" size="40" maxLength="35" required onChange={handleNameSetter} /></label>
      <button className="button primary"  onClick={handleClickButton}>Gravar</button>
      <div className="card">
        <ul className="no-bullet">

        {alunos.map((aluno, idx)=>{
          return <li key={aluno.id}>{aluno.nome} <button className="button warning" onClick={()=>handleDeleteNome(aluno.id)}>x</button> </li>
        })}
        </ul>
      </div>
      </>
    );
  }
  
  export default AlunosList;
  