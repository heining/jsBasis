console.log('ning')

// alert('hello ning')

var num = 100;
// 一个'+'可以将字符串类型转化为number类型
var strNum = + '123'
// console.log(parseInt(strNum) + num)
console.log(typeof strNum)

// 文档注释
/**
 * 对两个操作数进行求和运算
 * @param {number} a 第一个操作数
 * @param {number} b  第二个操作数
 * @returns 两个操作数的和
 */
function add(a, b) {
	return a + b
}

add(1, 2)
console.log(add(5, 1000)) 

// ** : 指数相乘
console.log('4 ** 3 = ', 4 ** 3)

// 逻辑操作符
// && :当第一个值为false时,结果肯定为false,故第二个值不会进行判断
// || :当第一个值为true时,结果肯定为true,故第二个值不会进行判断
console.log('false && "not printed"', false && "not printed")  //false
console.log('true || "not printed"', true || "not printed")    //true

// arguments: 函数参数的数组集合
function sum(a,b) {
	console.log(arguments[0])
}
sum('abc', 'bcd')

// 闭包
// 高阶函数
function squareSum(a, b) {
	function square(x) {
		return x * x
	}
	// 将内部函数返回出来
	return square(a) + square(b)
}
console.log(squareSum(2, 3))

function person() {
	let name = 'ning'
	function getName() {
		return name
	}
	return getName
}
var getName = person();
console.log(getName)
console.log(getName())

// 柯里化
function addThreeNums(a, b, c) {
	return a + b + c
}
console.log(addThreeNums(1, 2, 3))

function addThreeNumsCurry(a) {
	return function(b) {
		return function(c) {
			return a + b + c
		}
	}
}
console.log(addThreeNumsCurry(1)(2)(3))

// 自执行函数
console.clear()
var num1 = 10;
(function() {
	var num1 = 20
	console.log(num1)
})();
console.log(num1)

// 回调函数
console.clear()
function request(cb) {
	console.log("请求数据")
	cb()
	console.log('请求结束')
}

// function callback() {
// 	console.log('执行回调')
// }

request(() => console.log('执行回调'))

// 创建数组
var arr1 = [1, 2, 3]
console.log(arr1)
var arr2 = new Array(4, 5, 6)
console.log(arr2)
var arr3 = Array(7, 8, 9)
console.log(arr3)
var arr4 = Array.of(10, 11, 12)
console.log(arr4)

// 创建单个数组
var arrSingle1 = [9]
console.log(arrSingle1)
var arrSingle2 = Array.of(13)
console.log(arrSingle2)

// 删除元素
console.clear()
var arr = [1, 2, 3, 4, 5, 6]
console.log(arr)
arr.splice(2, 1)
console.log(arr)

arr.splice(1, 2, 7, 8, 9)
console.log(arr)

arr.splice(1, 0, 11, 12, 13)
console.log(arr)

// 数组遍历
console.clear()
var arr = [1, 2, 3, 4, 5, 6]
for(var i = 0; i < arr.length; i++) {
	console.log(arr[i])
}

console.log('for...of')
for(var item of arr) {
	console.log(item)
}

console.log('forEach')
arr.forEach((item, index, self) => console.log(item, index, self))

console.log('map')
arr.map((item, index, self) => console.log(item, index, self))

// 栈模式: 先进后出
console.clear()
var arr = [1, 2, 3]

// 入栈
arr.push(4, 5, 6)
console.log(arr)

// 出栈
arr.pop()
console.log(arr)

// 取栈顶元素
console.log(arr[arr.length - 1])

// 队列模式:先进先出
console.clear()
var queue = [1, 2, 3]
console.log(queue)

// 入队
queue.push(4, 5, 6)
console.log(queue)

// 出队
var first = queue.shift()
console.log(first)
console.log(queue)

// 插队
queue.unshift(7, 8, 9)
console.log(queue)

// 反转数组
console.clear()
var arr = [1, 2, 3]
console.log(arr.reverse())
console.log(arr)  //数组也发生改变

// split() 方法用于把一个字符串分割成字符串数组。
// 反转字符串
console.log('hello'.split(''))
console.log('hello'.split('').reverse())

// 数组排序
console.clear()
var arr = [1, 5, 8, 4, 9, 0]
arr.sort()
console.log(arr)

// 降序
arr.sort((a, b) => b - a)
console.log(arr)

// 数组连接
console.clear()
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))
console.log(arr1, arr2) //原数组未发生改变

// 数组的裁切
console.clear()
var arr = [1, 2, 4, 7, 9]
// slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
// 包括数组下标1的元素，不包括下标3的元素
console.log(arr.slice(1, 3))
// -1为最后一个元素
console.log(arr.slice(-1))

// 数组 map: 返回一个新的数组
console.clear()
var arr = [1, 2, 3, 4]
var mappedArr = arr.map(item => item * 2)
console.log(mappedArr)
console.log(arr)

// 数组 reduce((前一次的结果， 当前元素， 当前的索引，数组本身) => {}, 初始值)
console.clear()
var arr = [1, 2, 3, 4]
var result = arr.reduce((previous, current) => previous + current, 0)
console.log(result)

// 数组过滤
console.clear()
var arr = [1, 5, 8, 0, 4, 2]
var filteredArr = arr.filter(item => item > 4)
console.log(filteredArr)

// 数组测试, every: 数组中的每一个元素， some: 数组中的一些元素
console.clear()
var arr = [1, 3, 5, 7, 10]
var result = arr.every(item => item > 10)
console.log(result)

var resultSome = arr.some(item => item > 5)
console.log(resultSome)

// destructuring 解构操作符
console.clear()
var arr = [1, 2, 3]
var [a, b, c] = arr
console.log(a, b, c)

var [d, e] = arr
console.log(d, e)

var [, f] = arr
console.log(f)

function multipleReturns() {
	let name = 'ning'
	let position = '前端工程师'
	return [name, position]
}

var [myName, myPosition] = multipleReturns()
console.log(myName, myPosition)

// rest 操作符: 解构后取剩下的元素
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var [a, b, ...rest] = arr
console.log(a, b, rest)

var [d, , e, ...rest] = arr
// 前面的数据都已取出，,rest均不包括
console.log(d, e, rest)

function variousArgs(...args) {
	console.log(args)
}

variousArgs(1, 2, 3, 9)

// 创建对象
var employee = {
	name: 'ning',
	age: 18,
	position: '前端工程师',
	signaIn: function() {
		console.log('打卡成功')
	}
}

var employee2 = new Object();
employee2.name = 'ning'
employee2.signaIn = function() {
	console.log('打卡失败')
}

// 对象属性
console.log(employee.name)
console.log(employee['name'])

// 遍历对象属性
console.log(Object.keys(employee))
for(key in employee) {
	console.log(key)
}

// 删除对象属性
delete employee.age
console.log(Object.keys(employee))

// 构造函数
function Employee(name, position) {
	this.name = name
	this.position = position
}

// 实例
var emp1 = new Employee('ning', '前端工程师')
console.log(emp1)

var emp2 = new Employee('张三', '后端工程师')
console.log(emp2)

// this 指向
console.clear()
var emp3 = {
	name: 'ning',
	position: '前端工程师',
	signIn() {
		console.log(this.name + '上班打卡')
	}
}

emp3.signIn()

// 对象中的普通函数this指向的是对象本身
emp3.goToWork = function() {
	console.log(this.name + '下班')
}

// 对象中的箭头函数this指向的windows(不推荐)
// emp3.goToWork = () => {
// 	console.log(this.name + '上班')
// 	console.log(this)
// }

emp3.goToWork()

// 构造函数中的箭头函数this指向的是构造函数的作用域
function Employee(name, position) {
	this.name = name
	this.position = position
	this.signIn = () => {
		console.log(this.name + '去上班')
	}
}

var emp4 = new Employee('ning', '前端工程师')
emp4.signIn()

// getters 和 setters
console.clear()
var person = {
	firstName: '三',
	lastName: '张',
	get fullName() {
		return this.lastName + this.firstName
	},
	set fullName(fullName) {
		let [lastName, firstName] = fullName.split(',')
		this.lastName = lastName
		this.firstName = firstName
	}
}

// get: 访问对象方法时读取该方法体
console.log(person.fullName)
// set:访问对象方法时修改该方法体
person.fullName = '李,四'
console.log(person.fullName)

function Employee2(name, position) {
	this.name = name
	this.position = position
}

var emp5 = new Employee2('赵武', '前端工程师')
console.log(emp5)
// Object.defineProperty: 设置或修改对象属性
Object.defineProperty(emp5, 'info', {
	get: function() {
		return this.name + ' ' + this.position
	},
	set: function(info) {
		let [name, position] = info.split(' ')
		this.name = name
		this.position = position
	}
})

console.log(emp5.info)
emp5.info = '赵琦 后端工程师'
console.log(emp5.info)

// 原型
function Employee3(name, position) {
	this.name = name
	this.position = position
	this.signIn = function() {
		console.log(this.name + '打卡下班')
	}
}

var emp6 = new Employee3('ning', '前端工程师')
var emp7 = new Employee3('张三', '前端工程师')

console.log(Employee3.prototype)

Employee3.prototype.age = 20
console.log(emp6.age)
console.log(emp7.age)

Employee3.prototype.printInfo = function() {
	console.log(this.name, this.age, this.position)
}

// 实例会继承其构造函数原型的所有属性
emp6.printInfo()
emp7.printInfo()

// __proto__: 两个下划线
console.log(emp6.__proto__)
console.log(Employee3.prototype)
console.log(Employee3.prototype === emp6.__proto__)

// Object.create:创建一个新的对象
var manager = Object.create(emp6)
for(key in manager) {
	console.log(key)
}

// Object.getPrototypeOf: 获取对象的原型
var protoOfManager = Object.getPrototypeOf(manager)
console.log(protoOfManager)

// 解构赋值和rest
console.clear()
var post2 = {
	id: 2,
	title: '标题2',
	content: '这是内容',
	comments: [
		{
			userId: 1,
			comments: '评论1'
		},
		{
			userId: 2,
			comments: '评论2'
		},
		{
			userId: 3,
			comments: '评论3'
		}
	]
}

var {comments: [, {comments}]} = post2
console.log(comments)

// idKey:动态变化的key放在[]中
function getId(idKey, obj) {
	let {[idKey]: id} = obj
	return id
}
console.log(getId('userId', {userId: 3}))

// 引用传递：数组，对象
console.clear()
function byReference(arr) {
	arr[0] = 5
}
var array = [1, 2, 3]
byReference(array)
console.log(array)

function byReferenceObj(obj) {
	obj.title = '标题标题'
}
var post = { id: 1, title: '标题'}
byReferenceObj(post)
console.log(post)

// srting: 引用传递，但会创建一个新的字符串，原字符串不变
function byReferenceStr(str) { 
	str = 'abc'
 }
var testStr = 'test'
byReferenceStr(testStr)
console.log(testStr)

// 值传递
function byValue(num) {
	num = 10
	console.log(num)
}
var testNum = 1
byValue(testNum)
console.log(testNum)

// call, apply, bind,
console.clear()
var emp = {
	id: 1,
	name: 'ning'
}

function printInfo(dep1, dep2, dep3) {
	console.log('员工姓名：' + this.name, dep1, dep2, dep3)
}

printInfo.call(emp, '技术部', 'IT事业部', '总裁办公室')
printInfo.apply(emp, ['技术部', 'IT事业部', '总裁办公室'])

// bind:创建一个新的方法
var empPrintInfo = printInfo.bind(emp, '技术部', 'IT事业部', '总裁办公室')
empPrintInfo()

// 字符串定义
var str = 'ning'
console.log(str)

var str2 = new String('hello')
console.log(str2)

// 字符串遍历
for(let i = 0; i < str.length; i++) {
	console.log(str.charAt(i))
}

for(let c of str) {
	console.log(c)
}

// 字符串裁切
console.clear()
var str = 'This is a long string'

// slice 和 substring：包括开始下标值，不包括结束下标值
console.log(str.slice(0, 4))
console.log(str.slice(4))
console.log(str.slice(0, -1))  //-1:最后一个
console.log(str.slice(-6, -1)) //-6：倒数第六个

console.log(str.substring(0, 4))
console.log(str.substring(0, -1)) //不接收负数

// 字符串拼接
console.clear()
var str1 = 'hello'
var str2 = 'world'

console.log(str1 + str2) 
console.log(str1.concat(str2))

// 字符串大小写转换
console.log(str1.toUpperCase()) //小写转大写
console.log('NING'.toLocaleLowerCase()) //大写转小写

// 去除首尾空格
var str = '   hello  world  '
console.log(str)
console.log(str.trim())

// 模板字符串
var name = 'ning'
var str = `你好, ${name}`
console.log(str)

// 创建正则表达式
var str = 'where when what'

var re = /wh/g  //g:全局搜索
var re2 = new RegExp('wh')

console.log(re.exec(str))
console.log(re.exec(str))
console.log(re.exec(str))
console.log(re.exec(str))

// 字符匹配
console.log(/n/.test(str))
console.log(/t/.test(str))

// 特殊字符匹配
var str = `This str contains 123 CAPO _-&^%`
console.log(str.match(/Th.s/g))
console.log(str.match(/1../g))

// \d: 0-9
console.log(str.match(/\d/g))
// \W:大小写字母和下划线
console.log(str.match(/\W/g))
// \s: 空格，换行符
console.log(str.match(/\s/g))

// 匹配次数
console.clear()
var str = `This str contains 123 CAPO _-&^%`
// *:任意次数
console.log(str.match(/This.*/g))
// +: 一次及一次以上
console.log(str.match(/T+/g))
// ?:0次或者1次
console.log(str.match(/t?/g))
// {2}:出现几次
console.log(str.match(/t{2}/g))
// 数字出现了一到两次
console.log(str.match(/\d{1,2}/g))

// 区间、逻辑和界定符
// [abc]:包括任意a、b、c
console.log(str.match(/[abc]/g))
// 匹配所有的小写字母
console.log(str.match(/[a-z]/g))
// 匹配所有的大写字母
console.log(str.match(/[A-Z]/g))
// ^:匹配非数字字符
console.log(str.match(/[^0-9]/g))
// 转义字符
console.log(str.match(/[\-_&]/g))
// |:两者中的任意一个
console.log(str.match(/This|CAPO/g))

var str = 'this athata this and that'
// 匹配首个this
console.log(str.match(/^this/g))
// 匹配结尾的this
console.log(str.match(/this$/g))
// \b:边界
console.log(str.match(/\bthat\b/g))

// 分组
var str = `this that this and that`
console.log(/(th).*(th)/.exec(str))

var str = `aaaab abb cddaa`
// (aa):整体匹配
console.log(str.match(/(aa){2}/g))

// 常见正则表达式
console.clear()
// 验证手机号
var mobileRe = /^1[3-9]\d{9}/g
console.log(mobileRe.test('17743128590'))
// 验证邮箱
var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g
console.log(emailRe.test('admin@163.com'))
// 验证用户名
var usernameRe = /^[a-zA-Z][A-Za-z0-9_]{5,14}$/g
console.log(usernameRe.test('ning2020'))

// 字符串替换
console.clear()
var str = 'Tish is an apple'
console.log(str.replace('Tish', 'This'))

var str2 = 'Tish 1is 2an 3apple'
console.log(str2.replace(/\d+/g, ''))

// 字符串分隔
var tags = 'html, css, javascript'
console.log(tags.split(', '))

var str = 'This | is , an &'
console.log(str.split(/\W+/g))

// Number
var strNum = '15'
var num = parseInt(strNum)
console.log(num)

var srtNum2 = '1.13'
var num2 = parseFloat(srtNum2)
console.log(num2)

// toFixed():保留几位小数
var strNum3 = 12.33645
var num = strNum3.toFixed(2)
console.log(num)

// date
console.clear()
var date = new Date()
console.log(date)
// 年份
console.log(date.getFullYear())
// 月份
console.log(date.getMonth())
// 周几
console.log(date.getDay())
// 几号
console.log(date.getDate())
// 小时
console.log(date.getHours())
// 分钟
console.log(date.getMinutes())
// 秒钟
console.log(date.getSeconds())
// 时间戳
console.log(date.getTime())
// 27/7/2020
console.log(date.toLocaleDateString())

// set: 没有重复元素的集合
var set = new Set()
set.add(1)
set.add(3)
set.add(5)
console.log(set)

set.add(3)
console.log(set)

// has:判断set中是否包含此元素
console.log(set.has(3))
console.log(set.has(4))

// 遍历
set.forEach(value => {
	console.log(value)
})
// 删除
set.delete(3)
console.log(set)
// 清空
set.clear()
console.log(set)

// Map


// 异常处理
try {
	var emp = undefined
	console.log(emp.name)
} catch(err) {
	console.error(err)
} finally {
	console.log('总会执行')
}

// throw:将异常主动抛出
function fetchData() {
	console.log('获取数据')
	throw '404'
}

try {
	fetchData()
} catch(e) {
	if(e === '404') {
		console.error('未查询到数据')
	}
}

// 异步-setTimeout
// console.log('第一行执行')
// setTimeout(() => {
// 	console.log('1秒后执行')
// }, 1000)
// console.log('第二行执行')

// clearTimeout():中断计时器

// setInterval
// var interval = setInterval(() => {
// 	let date = new Date()
// 	console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }, 1000);

// setTimeout(() => {
// 	clearInterval(interval)
// }, 5000);

// Promise
// console.clear()
// var promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('执行成功')
// 		reject('执行异常')
// 	}, 2000)
// })

// // promise.then(value => console.log(value))
// promise.catch(error => console.log(error))
// console.log('在 Promise 之前执行')

// 多个promise同时执行
console.clear()
var p1 = new Promise(resolve => {
	setTimeout(() => {
		resolve(1)
	}, 1000)
})

var p2 = new Promise(resolve => {
	setTimeout(() => {
		resolve(2)
	}, 2000)
})

var p3 = new Promise(resolve => {
	setTimeout(() => {
		resolve(3)
	}, 500)
})

Promise.all([p1, p2, p3]).then(values => console.log(values))