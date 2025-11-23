function numberLines(strings) {
    strings.forEach((str, index) => {
        console.log(`${index + 1}. ${str}`);
    });
}

const greetings = ["Привет", "Как дела?", "До свидания"];

numberLines(greetings);
