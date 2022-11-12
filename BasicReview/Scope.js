// 스코프 : 변수의 유효 범위
// 전역 스코프, 함수 스코프, 블록 스코프

// 전역 스코프 => 전역 공간에 선언된 변수

// 함수 스코프 => 함수 안에서만 사용가능한 변수

let val = 1;

// console.log(val);

let a = 20;

function test() {
    g = 10;
    // 위와 같이 아무런 키워드 없이 선언하면 무조건 전역변수가 됨.
    let a = 1;
    let b = 2;
    return a + b;
}

// console.log(test());

// console.log(b); // 에러가납니다.

// 함수안에 정의된 변수는 외부에서는 접근할 수 없죠.
// 대신 함수 안에서 정의된 변수는 함수 안에서는 어디든 접근이 가능합니다.
const myFunc = function () {
    let a = 1;
    let b = 2;

    const myFunc2 = function () {
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a);
    };

    myFunc2();
};

myFunc();
