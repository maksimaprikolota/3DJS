

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,

    getDescription() {
        return `${this.brand} ${this.model}, выпущен в ${this.year} году.`;
    }
};

console.log(car.getDescription());

