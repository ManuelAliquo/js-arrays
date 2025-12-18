const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.table(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.reverse();
console.table(reversedTeachers);

// const reversedTeachers = null;      //
// let n = teachers.length - 1;        //

// for (let i = 0; i <= n / 2; i++) {  //
//   let temp = teachers[i];           //
//   teachers[i] = teachers[n - i];    // (Funziona ma non ho capito)
//   teachers[n - i] = temp;           //
// }                                   //
// console.table(teachers);            //

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1);
console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let searchTeacher = "Fabio";
let foundTeacher = false;

for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (currentTeacher === searchTeacher) {
    foundTeacher = true;
  }
}
const isFabioPresent = (foundTeacher = true);
console.log("Nome trovato?", foundTeacher);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teacherString = null;
