import React from "react";
import './Table.scss';
import Products from "./Table.mockdata";


const headers = [
    {key:'name', value:'Produto'},
    {key:'price', value:'Preço'},
    {key:'stock', value:'Estoque'},
];
const Table = ()=>{
    return <table className="AppTable">
        <thead>
          <tr>
            {headers.map(h =>{ return <th key={h.key}>{h.value}</th>})}
          </tr>
        </thead>
        <tbody>
        {Products.map(p =>{
            return (
               <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>$ {p.price}</td>
                  <td>{p.stock}</td>
               </tr>)
              })
        }

        </tbody>
    </table>
}

export default  Table;