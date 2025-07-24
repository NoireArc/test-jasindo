// const user = {
//     name: "Andi",
//     age: "twenty five",
//     isActive: "yes"
// };
// if (user.isActive === true) {
//     console.log(user.name + " is active");
// } else {
//     console.log(user.name + " is not active");
// }

//Output adalah Andi is not active
//Karena user.isActive bernilai "yes" (string), sedangkan perbandingan menggunakan === true (boolean).

//Solusi:
const user = {
    name: "Andi",
    age: "twenty five",
    isActive: true // ubah dari "yes" menjadi true
};

if (user.isActive === true) {
    console.log(user.name + " is active");
} else {
    console.log(user.name + " is not active");
}

//node src\component\Case5\Case5.js