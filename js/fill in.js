function getele(selector){
	return document.querySelector(selector)
}
function geteles(selector){
	return document.querySelectorAll(selector)
}
var num1 = 0
var num2 = 0
var sums = parseInt(getele('.sum').innerText)
var num = parseInt(getele('.counts').innerText)
function fun(){
	if(getele('.but').checked ===true){
	num1 = 100
	}else if(getele('.butt').checked ===true){
	num1 = 3500
	}
	num2 = num * num1
	getele('.sum').innerText =Number(sums) +Number(num2)
}
fun()
getele('.butt').onchange = function(){
	if(getele('.butt').checked ===true){
	num1 = 3500
	}
	num2 = num * num1
	console.log(num2)
	getele('.sum').innerText =Number(sums) +Number(num2)
}
getele('.but').onchange = function(){
	if(getele('.but').checked ===true){
	num1 = 100
	}
	num2 = num * num1
	console.log(num2)
	getele('.sum').innerText =Number(sums) +Number(num2)
}
getele('.number').onclick = function(){	
	var target = event.target
	fun()
	if(target.className === 'minus'){
		if(num>1){
			num--
		}
	}else if(target.className === 'plus'){
			num++
		}
		this.getElementsByTagName('p')[0].innerText = num
	fun()
}



var names
var val
var bool
$('.name1').blur(function(){
	names = /[\u4e00-\u9fa5]{2,5}/
	val = $(this).val()
	bool = names.test(val)
	if(bool === false){
		$('.tex').text('姓名输入错误')
	}else{
		$('.tex').text('')
	}
})
var names1
var val1
var bool1
$('.tel').blur(function(){
	names1 = /^[1](3[0-9]|4[57]|5[012356789]|7[3678]|8[0-9])[0-9]{8}$/
	val1 = $(this).val()
	bool1 = names1.test(val1)
	if(bool1 === true){
		$('.tex').text('')
	}else{
		$('.tex').text('电话输入错误')
	}
})
$('.email').blur(function(){
	names1 = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/
	val1 = $(this).val()
	bool1 = names1.test(val1)
	if(bool1 === true){
		$('.tex').text('')
	}else{
		$('.tex').text('邮箱输入错误')
	}
})



