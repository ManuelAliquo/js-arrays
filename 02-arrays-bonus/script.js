const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE
console.table(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//const reversedTeachers = teachers.reverse();
//console.table(reversedTeachers);

const reversedTeachers = [];

for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  reversedTeachers.unshift(currentTeacher);
}
console.table(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (currentTeacher.length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.table(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
console.table(teachers);

const edIndex = teachers.indexOf("Ed");
console.log("edIndex:", edIndex);

teachers.splice(edIndex, 1);
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
const isFabioPresent = foundTeacher;
console.log("Nome trovato?", foundTeacher);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let teacherString = "";

for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  teacherString += currentTeacher;
  if (i !== teachers.length - 1) {
    teacherString += ", ";
  }
}
console.log(teacherString);
