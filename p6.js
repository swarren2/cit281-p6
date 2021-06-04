//Sydnee Warren Project 6

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
perimeter = () => {
    return this.sides.reduce( (acc, val) => Array.isArray(val) ? val : acc + val, 0);
}
}

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area = () => {
return this.length * this.width
    }
}

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC =0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        let x = (this.sideA + this.sideB + this.sideC)/2
        return Math.sqrt(x * (x - this.sideA) * (x - this.sideB) * (x - this.sideC))
    }
}

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
let returnStatement = "";
let splitArr = []
for (let i = 0; i < data.length; i++) {
     splitArr = (data[i]);
    if (splitArr.length == 3) {
    returnStatement = `Triangle with sides ${splitArr.toString()} has perimiter of ${new Triangle(splitArr[0], splitArr[1], splitArr[2]).perimeter()} and area of ${new Triangle(splitArr[0], splitArr[1], splitArr[2]).area()}`
        } else if (splitArr.length == 2 && splitArr[0] != splitArr[1]){
            returnStatement = `Rectangle with sides ${splitArr.toString()} has perimiter of ${new Rectangle(splitArr[0], splitArr[1]).perimeter()} and area of ${new Rectangle(splitArr[0], splitArr[1]).area()}`
        } else if (splitArr.length == 2 && splitArr[0] == splitArr[1]) {
            returnStatement = `Square with sides ${splitArr.toString()} has perimiter of ${new Rectangle(splitArr[0], splitArr[1]).perimeter()} and area of ${new Rectangle(splitArr[0], splitArr[1]).area()}`
        } else if (splitArr.length == 1) {
            returnStatement = `Shape with ${splitArr.length} side unsupported`
        } else {
            returnStatement = `Shape with ${splitArr.length} sides unsupported`
        }
        console.log(returnStatement)
}

//Testing blocks

//Testing Shape
console.log("***Testing Shape***")
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

//Testing Rectangle
console.log("***Testing Rectangle***")
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

//Testing Triangle
console.log("***Testing Triangle***")
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0