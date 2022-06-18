
let name ={
    firstname:"Akshay",
    lastname:"kumar",
}
let prinFullName = function (hometown, state){
    console.log(this.firstname + " "+this.lastname + "from  "+ hometown +","+ state);
}
prinFullName.call(name,"dehradun","utrakhand");
let name2={
    firstname:"muskan",
    lastname:"kulsum",
}
prinFullName.call(name2,"mumbai","Maharastra");

prinFullName.apply(name2,["mumbai","maharastra"]);

let printMyName =prinFullName.bind(name2,"mumbai","maharastra");
console.log(printMyName)
printMyName();