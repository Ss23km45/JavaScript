/*et Person = {

    Name : "Challa Siva Naga Durga surya Mukesh",
    Father_Name : "Siva Satyanarayana",
    Mother_name : "Kota Lakshmi Satyavathi",
    Borther_Name : "Siva Naga Kedareswara Rao",
    Village : {name: "A. Vemavaram",
               mandal: "Achanta"
    }}

console.log(Person)
console.log(Person["Father_Name"]) //Another Way to access Keys and Values
console.log(typeof(Person["Father_Name"]))


let p1 = {
    personObject :Person,
    namebro : "yes bro"
}

console.log(p1.personObject
    )  */         
    
    
function bey(a,...b)
{
  return a+b[3]
}
//console.log(bey(335))

console.log(bey(1, 2, 3, 4, 5))



let arr = [1]

let val1 = 5

console.log(arr+val1);