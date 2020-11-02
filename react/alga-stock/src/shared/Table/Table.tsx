import React from "react";
import './Table.scss';
import Products from "./Table.mockdata";


declare  interface  TableHeader{
    key:string,
    value:string,
    right?:boolean
}
const headers : TableHeader[]=[
    {key:'name', value:'Produto'},
    {key:'price', value:'Preço'},
    {key:'stock', value:'Estoque'},
];


type IndexedHeaders = {
    [key:string] : TableHeader
}
type OrganizedItem = {
    [key:string] : any
}

function organizeData(data: any[], headers: TableHeader[]): [OrganizedItem[], IndexedHeaders]{

    const indexedHeaders : IndexedHeaders = {}

    headers.forEach(header =>{
        indexedHeaders[header.key] = {
            ...header
        }
     })

    const headerkeysInOrder = Object.keys(indexedHeaders);

    const organizedData = data.map(item => {
        const organizeditem : OrganizedItem ={};

        headerkeysInOrder.forEach(key=>{

            organizeditem[key] = item[key]
        })
        console.log(organizeditem);
        organizeditem.$original = item

        return organizeditem;
    });

    return [organizedData, indexedHeaders];

}
const Table = ()=>{
    const [organizedData, indexedHeaders] = organizeData(Products, headers);

    return <table className="AppTable">
        <thead>
          <tr>
              {
                  headers.map(header =>
                      <th
                          className={header.right ? 'right' : ''}
                          key={header.key}
                      >
                          {header.value}
                      </th>
                  )
              }
          </tr>
        </thead>
        <tbody>
        {
            organizedData.map((row, i) => {
                return <tr key={i}>
                    {
                        Object
                            .keys(row)
                            .map((item, i) =>
                                item !== '$original'
                                    ? <td
                                        key={row.$original.id + i}
                                        className={indexedHeaders[item].right ? 'right' : ''}
                                    >
                                        { row[item] }
                                    </td>
                                    : null
                            )
                    }
                </tr>
            })
        }

        </tbody>
    </table>
}

export default  Table;