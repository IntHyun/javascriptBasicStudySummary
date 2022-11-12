function makeClosure() {
    const val1 = 100; // 클로저공간
    const val2 = 200; // 클로저공간

    return {
        getVal1: function () {
            return val1;
        },
        getVal2: function () {
            return val2;
        },
    };
}

let result = makeClosure(); // 이렇게 되면 result안에 리턴값이 들어가게 되는 것입니다.
// 따라서 리턴된 객체가 들어갑니다.
// 따라서 result는
/*{
        getVal1: function () {
            return val1;
        },
        getVal2: function () {
            return val2;
        },
    };
} */
// 가 됩니다.
// 그렇기 때문에 아래와 같이 접근이 가능해지는 것입니다.
console.log(result.getVal1());
console.log(result.getVal2());
