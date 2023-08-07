/* 1.导入的{ }中定义的变量 */
import {flag,sum} from './aaa.js';
if(flag){
	console.log('小明是天才');//小明是天才
	console.log(sum(10,90));//100
}

/* 2.直接导入export定义的变量 */
import{num,height} from './aaa.js';
console.log(num);//100
console.log(height);//188

/* 3.导入export的function和类 */
import {mul,Person} from './aaa.js';
console.log(mul(30,50));//1500
const p = new Person();
p.run();//hello

/* 4.导入export default */
import addr from './aaa.js';
//console.log(addr);//上海
addr();//han

/* 5.统一全部导入 */
import * as aaa from './aaa.js';
console.log(aaa.flag);//true
console.log(aaa.height);//188