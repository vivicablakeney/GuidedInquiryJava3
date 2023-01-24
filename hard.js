// class Pii {
//      name: 'Monica',
//     let_snn;
//     get getName() {
//         return this.name;
//     }
//     function paitent(){

//     }
//   }

// const person = {
//     name: "John",
//     SSN: "123-45-6789",
   
//     get Name () {
//         return this.name;
//     }
// };

// const pii = new Object();

// // console.log(pii.getName);

// console.log(perosn.getName())

const personDetails = function(personName, personSsn){
    let pii = {
        name:personName,
        _ssn:personSsn
    }
    return{
        getName: () => {
            return pii.name
        },
        getSsn: () => {
            return pii.ssn
        }
    }
}
const patientOne = personDetails('Vivica', 253911980)
console.log(patientOne.getName())
console.log(patientOne.getSsn())