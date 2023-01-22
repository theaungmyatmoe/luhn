import {expect, it} from "vitest";
import {validate} from "../src";

it('should be success when credit card numbers are valid', () => {
    const pan = '4895048712071025';

    const result = validate(pan);

    expect(result).toBe(true)
});

it('should be fail when credit card numbers are invalid', () => {
    const wrong_card_numbers = '4895048712071026';

    const result = validate(wrong_card_numbers);

    expect(result).toBe(false)
});