function displayPrompt(E){//显示提示
	var prompt = E.nextSibling.nextSibling.nextSibling;
	prompt.style.display = "block";
}
// 
function test_id(){
	var prompt = document.getElementById("prompt1");
	var E = document.getElementById("user_id");
	var len = 0;

	for (var i = 0; i < E.value.length; i++) { //获取字符长度
		if (/[^\x00-\xff]/.test(E.value[i])) {
 			len = len +2;
		} else {
			len = len +1;
		}
	}

	if(len >= 4 && len <=16){
		prompt.innerHTML = "名称可用";
		prompt.style.color = "#00ff1a";
		E.style.border = "1px solid #00ff1a";
		return true;
	}else{
		prompt.style.color = "#ff0000";
		E.style.border = "1px solid #ff0000";
	 	if (E.value == ""){
			prompt.innerHTML = "名称不可为空";
		}else{
			prompt.innerHTML = "长度必须为4~16个字符";
		}
	}
}

function test_pw(){
	var prompt = document.getElementById("prompt2");
	var E = document.getElementById("user_pw");
	var reg = /\W/;
	prompt.style.color = "#ff0000";
	E.style.border = "1px solid #ff0000"
	if (reg.test(E.value)) {
		prompt.innerHTML = "请输入合法字符";
	}else if(E.value.length < 4 || E.value.length > 16){
		prompt.innerHTML = "密码长度要在4~16字符";
	}else{
		prompt.innerHTML = "密码格式正确";
		prompt.style.color = "#00ff1a";
		E.style.border = "1px solid #00ff1a";
		return true;
	}
	
}

function rtest_pw(){
	var prompt = document.getElementById("prompt3");
	var pw = document.getElementById("user_pw");
	var cpw = document.getElementById("user_cpw");
	if(pw.value == cpw.value){
		prompt.innerHTML = "密码输入一致";
		prompt.style.color = "#00ff1a";
		cpw.style.border = "1px solid #00ff1a";
		return true;
	}else{
		prompt.style.color = "#ff0000";
		cpw.style.border = "1px solid #ff0000";
		prompt.innerHTML = "两次密码输入不一致";
	}
}

function test_email(){
	var prompt = document.getElementById('prompt4');
	var email = document.getElementById("user_em");
	reg = RegExp(/^\w+@\w+.com$/);
	if(reg.test(email.value)){
		prompt.innerHTML = "邮箱格式正确";
		prompt.style.color = "#00ff1a";
		email.style.border = "1px solid #00ff1a";
		return true;
	}else{
		prompt.style.color = "#ff0000";
		email.style.border = "1px solid #ff0000";
		if (email.value == "") {
			prompt.innerHTML = "邮箱不能为空";
		} else {
			prompt.innerHTML = "邮箱格式错误";
		}
		
	}
} 

function test_pn(){
	var prompt = document.getElementById("prompt5");
	var pn = document.getElementById("user_pn");
	var reg = RegExp(/^\d{11}$/);
	if (reg.test(pn.value)) {
		prompt.innerHTML = "手机格式正确";
		prompt.style.color = "#00ff1a";
		pn.style.border = "1px solid #00ff1a";
		return true;
	} else {
		prompt.style.color = "#ff0000";
		pn.style.border = "1px solid #ff0000";
		if (pn.value == "") {
			prompt.innerHTML = "手机不能为空";
		} else {
			prompt.innerHTML = "手机格式错误";
		}
	}

}

function test_all(){//点击提交验证
	var sp = document.getElementsByTagName("span");
	for (var i = 0; i < sp.length; i++) {
		sp[i].style.display = "block";
	}
	if(test_id() && test_pw() && rtest_pw() && test_email() && test_pn()){
		alert("验证通过");
	}else{
		alert("输入有误");
	}
}
