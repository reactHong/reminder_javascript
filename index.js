function solution(number) {

    console.log(new Array(number).keys());
    console.log([...new Array(number).keys()]);
    console.log([...new Array(number).keys()].filter(n => n%3 === 0 || n%5 === 0));
    console.log([...new Array(number).keys()].filter(n => n%3 === 0 || n%5 === 0).reduce((a, b) => a + b));
}

solution(10);



