"use strict";
var Luhn = /** @class */ (function () {
    function Luhn() {
    }
    /**
    * @description Validatator of Credit Card Numbers
    * @param pan Credit Card Numbers
    * @returns Validation result of Credit Card Nunbers that are valid or not
    */
    Luhn.validate = function (pan) {
        // Change to number object
        var cc = Array.from(String(pan), Number);
        // Luhn Alogorithom
        var sum = 0;
        for (var i = 0; i <= cc.length - 1; i++) {
            var digit = cc[i];
            if (i % 2 === 0) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            sum += digit;
        }
        return sum % 10 === 0;
    };
    return Luhn;
}());
console.log(Luhn.validate(124));
//# sourceMappingURL=luhn.js.map