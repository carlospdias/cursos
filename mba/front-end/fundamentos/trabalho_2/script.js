getFullName = (...names)=>{
    return names.join(' ');
}
onlyNumbersFrom=(number)=>{
    //const n = number.toString();
    //return n.replace(/\D+/g,'');
    return number.split('').filter((n)=>!isNaN(n)).join('');
}
getGroupMembers = (members)=>{
   return members.sort((a,b)=> a.toLocaleUpperCase().localeCompare(b.toLocaleUpperCase()));
}
 transform = (numbers)=>{
    return numbers.map((number=>{
       return (number +10) / 10;
    }))
 }