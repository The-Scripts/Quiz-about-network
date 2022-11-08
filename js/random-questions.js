const question1 = {
    question: "Jakie urządzenia mają adres MAC?",
    options: ["Sprzęt sieciowy", "Każde urządzenie", "Peryferia", "Procesory"]
};

const question2 = {
    question: "Co to jest numer IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question3 = {
    question: "Jakie mamy klasy numerów IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question4 = {
    question: " Jakie mamy klasy numerów IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question5 = {
    question: "Co to jest numer IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question6 = {
    question: "Co to jest numer IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question7 = {
    question: "Co to jest numer IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question8 = {
    question: "Co to jest numer IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const question9 = {
    question: "Co to jest numer IP?",
    options: ["Ciąg liter i cyfr", "Lista urządzeń w sieci", "Maska podsieci", "Geolokalizacja urządzenia"]
};

const questions = [question1, question2, question3,
    question4, question5, question6, question7, question8,
    question9
    ];

let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    let nextNumber = true;
    let number;
    do {
        nextNumber = true
        number = Math.round(Math.random() * 10);

        for (let a = 0; a < i; a++) {
            if (number == randomNumbers[a]) {
                nextNumber = false;
            }
        }
    } while (nextNumber == false);
    
    randomNumbers[i] += number; 

    console.log(number)
}