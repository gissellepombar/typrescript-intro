
let name: string = "Gisselle"

let age: number = 26

let teaching: boolean= true

let classes: string[]= ["typrescript", "c#", "presenting"]

// console.log(name, age, teaching)
// console.table(classes)

enum TaxesForms {
    StandardTaxes=1040,
    childCredit=647, 
    crypt_Credit=2055,
}

// console.log(TaxesForms.StandardTaxes)

let code: string | number = '11'

code = 11

// console.log(code)

let cars: string[] = ["mustang", "tesla", "accord", "truck"];

function findValue(index: number, array: string[]) : string {
    console.log(array[index])
    return array[index]
}
// console.log(findValue(1,cars))

//doesnt return anything ( hence "void"")
function findValue2(index: number, array: string[]) : void {
    console.log(array[index])

}

// findValue2(1, cars)

// let classroom: any = {
//     name: "typescript", 
//     duration: 6, 
//     boring: false
// }
// console.log(classroom)

interface classroom {
    name: string, 
    duration: number, 
    boring: boolean,
    room: string
}

let thisClassroom: classroom = {
    name: "typescript", 
    duration: 6, 
    boring: false
}

// console.log(thisClassroom)

let thatClassroom: classroom = {
    name: "javascript 2.0", 
    duration: 2, 
    boring: false
}