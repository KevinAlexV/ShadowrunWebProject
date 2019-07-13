// THOMAS' TYPESCRIPT LINK:
// http://www.typescriptlang.org/play/?target=0#code/C4TwDgpgBAyg1gSwDZKgXigbwFBT1AOwEMBbCALlmACcECBzAbl3wGcBjAe2osIFcSAIwjVmAX2yhIUAILAaCQX2DQM8ZEmbZ2SIq1ZQAwgAsi1IuxXUYxiBGBY8AeidQAkgQTAERJAgBe0MCcUAAiEABmRHxIDjDARCoseMRk6FAARBnM+FDm7KqZ2clQOnoGGFk5+CScBBAg6QAM1XiJCkoqrJQy1OYgADxyHcoQAHzpANoAuq1QrIgo3bJ9RIPqKBMYM1q5XASsNHyW3AAUdF4AshDspp6sJAD8lPG0DACUWCW5F8DXt0R7iR0r9-ncEA8oAAfKGZAByAFEAOrFXK5VgAdy8tyg508fxu4IeADpggBVMCQaiGPQQU7vT44NHM0q0+HIjKUdhsjJwznfFm5QQ8IhwOaC7msaAZAAyAHkZKFOaypZkZfzBYLhRBReL8BJchISkQACYmjZIU6pXivOj0AA08y4PEoBAEwmojIFeCQ9igCGaerwEW4uIDGBa-qgAygwGMEOJCw0rGJvoYccY-oA1FmvZr8AgIri4wmk0tJghpsTreg0BhrXn82iSymy0hWBWqxxuIVuzwg5qeMA+NQCAPDd6oAaWS3E4t25NZ22U2n6HHpukmU3ra7SBB7ZP0c7eH2IJOxHNp3gSjxagA3CAWq17l4KD5fQW+hzhqAtSch6gw0DKMYyXecVwgdNjEzBAc0bfNC2LeNW3Aztqz3Wt6z3eCmzwMDk0TMA-AKc5HQARneccWSHEcx0PfVzxKCQJCAA
"use-strict";
var CharacterSheet = /** @class */ (function () {
    function CharacterSheet(initMechanism) {
        this.name = "";
        this.race = "";
        this["class"] = "";
        this.money = 0;
        this.attributes = [];
        this.skills = [];
    }
    CharacterSheet.prototype.addSkill = function (name, score) {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === name) {
                this.skills[i].score = score;
                return this.skills[i];
            }
        }
        this.skills[this.skills.length] = {
            name: name,
            score: score
        };
		return this.skills[this.skills.length - 1];
    };
    CharacterSheet.prototype.removeSkill = function (name) {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === name) {
                this.skills.splice(i, 1);
                return;
            }
        }
    };
    return CharacterSheet;
}());