console.log('yes');

let myRealAage:number = 26;




///array
let hobbies: number[] = [100,200,300];


const mapArray = (array:number[]) => {
  return array.map(value => value * 2);
}

//order is important tuples
let address: [string,number] = ['SuperCast',99]

//enum
enum Color {
  Gray = 2,
  Green = 100,
  Blue = 104
};

let myColor:Color = Color.Green
console.log(myColor);

enum Man{
  first,
  second
}

let myMan :Man = Man.first;
console.log(myMan)


//any
let car:any = 'BMW';
console.log(car);
car = {
  brand:'yes',
  series:404
}
console.log(car);


//functions
function myName(): string{
  return 'yes'
}

const myName2 = ():string => {
  return ',an';
}

const voidFunction = ():void => {
  console.log('I am not returning anything')
}

//argument types
const multiply = (val1:number,val2:number): number => {
  return val1 * val2;
}

console.log(myName())
console.log(multiply(1,2))

let myMultiply:(val1:number, val2:number) => number;
myMultiply = multiply;
console.log(myMultiply(11,12))


//Object
let userData: {name:string,age:number} = {
name:'Max',
age:27
};

let complex : {data:number[],output: (all:boolean) => number[] } = {
  data:[100,99,100,11],
  output:function(all:boolean):number[]{
    return this.data;
  }
}


//type alias
type Complex = {data:number[],output: (all:boolean) => number[] };


let complex2: Complex = {
  data:[111,23],
  output:function(all:boolean):number[]{
    return this.data
  }
};


////union types
let unionType: number | string = '222';
unionType = 22

if(typeof unionType === 'number') console.log('yes')


//never types
function neverReturn():never{
 throw new Error('an Error');
}


let canAlsoBeNull: number | null = 6;
canAlsoBeNull = null;

let canThisBeAny:any = null;
canThisBeAny = 'yes';




//typescript problem
type bankAccount = {money:number,deposit:(value:number) => void}
type userAccount = {name:string,bankAccount:bankAccount,hobbies:string[] }
let bankAccount: bankAccount = {
  money:2000,
  deposit(value:number):void{
      this.money +=value;
  }
}

let myself:userAccount = {
  name:"max",
  bankAccount:bankAccount,
  hobbies:['Coding,Sex']
}

myself.bankAccount.deposit(1000);

console.log(myself)


function controlMe(isTrue:boolean):number{
  let result:number;
  if(isTrue){
    result = 12;
    return result;
  }
  return 23;
}

let variable:string = 'Test';
console.log(variable);



//Block scope
function reset(){
let varaible:null = null;
console.log(varaible)
}
reset();
console.log(variable)



//arrow functions
const addNumbers = (num1:number = 10):number => {
  return num1 * 10;
}

console.log(addNumbers())
