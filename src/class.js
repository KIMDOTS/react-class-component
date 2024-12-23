class human {
    constructor(이름, 나이, 성별) {
        this.이름 = 이름;
        this.나이 = 나이;
        this.성별 = 성별;
    }
    speak() {
        console.log(this.이름 + " : 안녕!");
    }
}

class student extends human {
    constructor(이름, 나이, 성별, 성적) {
        super(이름, 나이, 성별)
        this.성적 = 성적;
    }
    study(){
        console.log(`${this.이름} : 태정태세문단세예성연중인명선광인효연숙경현...`);
    }
}

const 김학생 = new student('김학생', 17, '남', 90);
console.log(김학생);
김학생.speak();
김학생.study();