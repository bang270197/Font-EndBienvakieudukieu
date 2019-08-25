// function main() {
//     console.log("START");
//     if (true){
//         var lang="vi";
//         var target="en-us";
//         console.log("inside block");
//         console.log(target);
//     }
//     console.log(lang);
//     console.log(target);
// }
// function main() {
//
//     var x:number = 5;
//     console.log(x);
//
//     var y:number = 10;
//     console.log(y);
// }
// let fullname:string='Nguyen ngoc  bang';
// let age:number=22;
// let result:string=`hello ,my name is ${ fullname } .I'll be ${age}`;
// console.log(result);

// function main() {
//     let message: string;
//     let total: number = 100;
//     let isProduction = true;
//     let prices: Array<number> = [120, 88, 60];
//     let languages: string[] = ['vi', 'en-us'];
//     let now = new Date();
//     let unknown: any;
//
//     enum Direction {
//         UP,
//         DOWN,
//         LEFT,
//         RIGHT
//     };
//     let d: Direction = Direction.DOWN;
//     console.log(d);
//
//     function log(msg: string): void {
//         console.log("Nguyen " + msg)
//     }
//
//     console.log(log("ngoc bang"))
//
//     //
//     interface IPost {
//         id: string;
//         title: string;
//         body?: string;
//     }
// }
   //
   //  isProduction = false;
   // console.log(unknown) ;
   //  unknown = Direction.UP;
   //  unknown = 'changed';
   //
   //  // const post: IPost = {
   //  //
   //  // };
   //  message = 'bang';
   //
   //  function getPost(postId: string): IPost {
   //      // do something to retrieve post
   //      return {
   //          id: postId,
   //          title: 'Post Title',
   //          body: 'Post Body',
   //          extra: 'data'
   //      } as IPost;
   //  }

// function main(person:string): string {
//     return "hello"+person;
// }
// let user: string="Bang";
// console.log(main(user));
// let count: number=10;
// if (count>0){
//     count--;
// }else {
//     count++;
// }
// console.log(count);
// const keys="asdfgh"
// for (let i=0;i<keys.length;i++){
//     console.log(keys[i]);
// }
// let i=0;
// while (i<keys.length){
//     console.log(keys[i]);
//     i++;
// }
// do {
//     console.log(keys[i]);
//     i++;
// }while (i<keys.length);
// const user={
//     name: 'bang',
//     age: 55
// };
// for (const key in user){
//     console.log(`${key}: ${user[key]}`);
// }
// const list: number[]=[1,2,3];
// const categoryes: Array<string>=['Sport','IT'];
// console.log('list');
// list.forEach((num) =>
// console.log(num.toFixed())
// ) ;
// console.log('categries');
// categoryes.forEach((str) =>
//     console.log(str.length)
// );
// function error(message: string): never {
//     throw new Error(message);
// }
// console.log(error("loi"));

// function f() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }
//
// var g = f();
// console.log(g);
// // console.log(g());
// function f() {
//     var a = 1;
//
//     a = 2;
//     var b = g();
//     a = 3;
//
//     return b;
//
//     function g() {
//         return a;
//     }
// }
// console.log(f());
// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }
//
//     return sum;
// }
// function add(a: number): Function {
//     return function(b: number): number {
//         return a + b;
//     }
// }
// console.log(add(2));
// function square1(num: number): number {
//     return num * num;
// }
// // Hoặc
// const square = function (num: number): number {
//     return num * num;
// }
// console.log(square(2));
const a=function (person) {
    return "goodbye" + person;
}
var user="bang";
document.body.innerHTML=a(user);