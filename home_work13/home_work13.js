const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

let newObj = JSON.parse(JSON.stringify(obj));
let endObj = {};

for(let key in newObj) {
	endObj = Object.assign(obj, newObj[key]);
}

delete endObj.inner;
delete endObj.foo2;

console.log(endObj);
