import {TableHeader} from "./Table";


type IndexedHeaders = {
    [key:string] : TableHeader
}
type OrganizedItem = {
    [key:string] : any
}

export default function organizeData(data: any[], headers: TableHeader[]): [OrganizedItem[], IndexedHeaders]{

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

