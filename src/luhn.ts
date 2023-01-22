/**
 *  @param {string} pan - The credit card number to validate.
 * @returns boolean - A boolean value indicating whether the credit card number is valid.
 */
export const validate = (pan: string): boolean => {
    const cardNumbers = Array.from<string, number>(pan, Number);
 

    // luhn algorithm
    let sum = 0;
    for (let i = 0; i <= cardNumbers.length - 1; i++) {
        let digit = cardNumbers[i];
        if (i % 2 === 0) {
            digit *= 2;

            if (digit > 9) digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

