var Apl = Apl || {};

(function(){
    this.getFullName = (...names)=>{
        return names.join(' ');
    }
    this.onlyNumbersFrom=(number)=>{
        return number.split('').filter((n)=>!isNaN(n)).join('');
    }
    this.getGroupMembers = (members)=>{
       return members.sort((a,b)=> a.toLocaleUpperCase().localeCompare(b.toLocaleUpperCase()));
    }
    this.transform = (numbers)=>{
        return numbers.map((number=>{
           return (number +10) / 10;
        }))
     }
}).apply(Apl);
