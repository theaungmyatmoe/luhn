export default function createLuhn() {
    /**
     *  @param {string} pan - The credit card number to validate.
     * @returns boolean - A boolean value.
     */
    const validate = (pan: string): boolean => {
        const card_numbers = Array.from<string, number>(pan, Number);

        // luhn algorithm
        let sum = 0;
        for (let i = 0; i <= card_numbers.length - 1; i++) {
            let digit = card_numbers[i];
            if (i % 2 === 0) {
                digit *= 2;

                if (digit > 9) digit -= 9;
            }
            sum += digit;
        }
        return sum % 10 === 0;
    }

    return {
        validate,
    }
}