let obj1 = {
    name : "Mukesh",
    lname : "Challa"
}

let obj2 = {
    name : "Kedhar",
    lname : "Challa"
}

let par2 = {
    fname : "Satyanarayana",
    mname : "Satyavathi",
    son1 : obj2,
    son2 :obj1
}
console.log(par2.son2)

far = []
far.push(obj1);
far.push(obj2);
far.unshift(par2);
console.log(far[0])


let art = [1,2,3,5,3,93,3985,3974]
let art2 = []
art2 =art
console.log(art)
console.log(art2)