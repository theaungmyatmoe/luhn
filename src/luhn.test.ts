import {Luhn} from './luhn';
import {describe, expect, it} from "vitest";

it('should be success when credit card numbers are valid', () => {
    const card_numbers = 4895048712071025;

    const result = Luhn.validate(card_numbers);

    expect(result).toBe(true)
});

it('should be fail when credit card numbers are invalid', () => {
    const wrong_card_numbers = 4895048712071026;

    const result = Luhn.validate(wrong_card_numbers);

    expect(result).toBe(false)
});