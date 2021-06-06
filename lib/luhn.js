"use strict";
var Luhn = /** @class */ (function () {
    function Luhn() {
    }
    /**
    * @description Validatator of Credit Numbers
    * @param cc
    * @returns Validation result of Credit Card Nunbers that are valid or not
    */
    Luhn.validate = function (cc) {
        // Change to number object
        cc = Array.from(String(cc), Number);
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
module.exports = Luhn;
//# sourceMappingURL=luhn.js.map