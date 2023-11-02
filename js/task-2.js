function formatMessage(message, maxLength) {
    if (message <= maxLength)
    { return message; } 
    else if (message > maxLength)


}



// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.