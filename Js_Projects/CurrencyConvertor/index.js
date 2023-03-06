function conversion_curr(x,y){
	
	if(x=="USD to INR"){
		var ans=y+" USD ="+Number(y*82.94)+" INR"
	}
	else if(x=="INR to USD"){
		ans=y+" INR ="+Number(y/82.94)+" USD"
	}
	else if(x=="YEN to INR"){
		ans=y+" YEN ="+Number(y/1.8)+" INR"
	}
	else if(x=="INR to YEN"){
		ans=y+" INR ="+Number(y*1.8)+" YEN"
	}
	else if(x=="GBP to INR"){
		ans=y+" GBP ="+Number(y*93.42)+" INR"
	}
	else if(x=="INR to GBP"){
		ans=y+" INR ="+Number(y/93.42)+" GBP"
	}
	else if(x=="EURO to INR"){
		ans=y+" EURO ="+Number(y*81.23)+" INR"
	}
	else if(x=="INR to EURO"){
		ans=y+" INR ="+Number(y/81.23)+" EURO"
	}
	return ans
}

function curr_convert(){
	var user_ip=Number(document.getElementById('ip1').value)
	var select_ip=document.getElementById('ip2').value
	document.getElementById('op').innerHTML=conversion_curr(select_ip,user_ip)
}