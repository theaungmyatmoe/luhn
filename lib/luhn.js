"use strict";
var Luhn = /** @class */ (function () {
    function Luhn() {
    }
    Luhn.validate = function (cc) {
        // change cc to Number Object array
        cc = Array.from(String(cc), Number);
        // Luhn Alogorithom to check cc is valid or not
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