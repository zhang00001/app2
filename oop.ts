


class Animal {
    public do() {
        console.log('我能动');
    }
    say() {
        console.log(`i'm a animal`)
    }
}

class Cat extends Animal {
    say() {
        super.say();
        console.log(`i'm also a Cat`);
    }
}
class Dog extends Animal {
    say() {
        super.say();
        console.log(`i'm also a Dog`);
    }
}
class Pig extends Animal {
    say() {
        super.say();
        console.log(`i'm also a Pig`);
    }
}
var cat = new Cat();
cat.say();
cat.do();

