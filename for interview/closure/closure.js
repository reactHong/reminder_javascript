function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}

function f2() {
    for (var i = 0; i < 3; i++) {
      (function(a) {
        setTimeout(() => {
          console.log(a);
        }, 1000 * a);
      })(i)
    }
}

function f3() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    }
}

function f4() {
    for (var i = 0; i < 3; i++) {
      setTimeout((function(x) {
        console.log(x);
      }).bind(null, i), 1000 * i);
    }
}

// f2();
// f3();
f4();
