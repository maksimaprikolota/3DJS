let student = {
    name: "Максим",
    age: 23,
    courses: ["HTML", "CSS", "React"],
    address: {
        city: "Москва",
        street: "Нет",
        number: 12,
    },
};

student.courses.push("JavaScript");

student.address.city = "Зеленоград";

student.courses.shift();

student.grades = {
    HTML: 5,
    CSS: 5,
    React: 5,
    JavaScript: 5,
};

console.log("Информация о студенте:");
console.log("Имя:", student.name);
console.log("Возраст:", student.age);

console.log("Курсы:", student.courses.join(", "));

console.log("Адрес:");
console.log("  Город:", student.address.city);
console.log("  Улица:", student.address.street);
console.log("  Дом:", student.address.number);

console.log("Оценки:");
for (let course in student.grades) {
    console.log(`  ${course}: ${student.grades[course]}`);
}

console.log("Полный объект student:", student);
