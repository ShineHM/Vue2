var name = '小明';
var age = 20;
var flag = true;
function sum(num1,num2){
	return num1 + num2
}
if(flag){
	console.log(sum(20,30));
}
/* 1.导出方式一 */
export {
	flag,sum
}
/* 2.导出方式二 */
export var num = 100;
export var height = 188;

/* 3.导出函数/类 */
export function mul(num1,num2){
	return num1 * num2
}
export class Person{
	run(){
		console.log('hello');//hello
	}
}

/* 4.export default导入者自己命名 只能有一个，导入时import addr from './aaa.js';*/
// const address = '上海';

export default function a(){
	console.log('han');//han
}