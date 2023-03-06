// calculator starts
// function  put_9(){
// 	document.getElementById('disp_div').innerHTML += 9;
// }
// function put_8(){
// 	document.getElementById("disp_div").innerHTML+=8;
// }
// function put_7(){
// 	document.getElementById("disp_div").innerHTML+=7;
// }
// function put_6(){
// 	document.getElementById("disp_div").innerHTML+=6;
// }
// function put_5(){
// 	document.getElementById("disp_div").innerHTML+=5;
// }
// function put_4(){
// 	document.getElementById("disp_div").innerHTML+=4;
// }
// function put_3(){
// 	document.getElementById("disp_div").innerHTML+=3;
// }
// function put_2(){
// 	document.getElementById("disp_div").innerHTML+=2;
// }
// function put_1(){
// 	document.getElementById("disp_div").innerHTML+=1;
// }
// function put_zero(){
// 	document.getElementById("disp_div").innerHTML+=0;
// }
// function put_add(){
// 	document.getElementById("disp_div").innerHTML+= "+";
// }
// function put_min(){
// 	document.getElementById("disp_div").innerHTML+= "-";
// }
// function put_multi(){
// 	document.getElementById("disp_div").innerHTML+= "*";
// }
// function put_divide(){
// 	document.getElementById("disp_div").innerHTML+= "/";
// }
// function put_dec(){
// 	document.getElementById("disp_div").innerHTML+= ".";
// }


function putExpression(value){
	document.getElementById("disp_div").innerHTML+= value;

}
function clear_div(){
	document.getElementById("disp_div").innerHTML= "";
}
function put_eq(){
	document.getElementById("disp_div").innerHTML=document.getElementById("disp_div").innerHTML+"="+eval(document.getElementById("disp_div").innerHTML) ;
}

// calculator ends