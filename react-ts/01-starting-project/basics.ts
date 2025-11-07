// 기본형: nuber, string, boolean
let age: number = 12;
let userName: string = "Max";
let isInstructor: boolean = true;

// 배열, 객체
let hobbies: string[] = ["Sports", "Cooking"];
let person: { name: string; age: number } = {
  name: "Max",
  age: 32,
};
// person = { isEmployee: true }; 오류 발생

// 타입 추론
let course = "React - The Complete Guide";
// course = 12341; 오류 발생

// 유니언 타입
let unionType: string | number = "React";
unionType = 12341;

// 타입 별칭
type Person = { name: string; age: number };
let anotherPerson: Person = {
  name: "Anna",
  age: 25,
};

// void
function printOutput(value: string | number): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

updatedArray[0].split(''); // 오류 발생
