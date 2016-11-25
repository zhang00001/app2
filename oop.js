var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.do = function () {
        console.log('我能动');
    };
    Animal.prototype.say = function () {
        console.log("i'm a animal");
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    Cat.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i'm also a Cat");
    };
    return Cat;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i'm also a Dog");
    };
    return Dog;
}(Animal));
var Pig = (function (_super) {
    __extends(Pig, _super);
    function Pig() {
        _super.apply(this, arguments);
    }
    Pig.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i'm also a Pig");
    };
    return Pig;
}(Animal));
var cat = new Cat();
cat.say();
cat.do();
//# sourceMappingURL=oop.js.map