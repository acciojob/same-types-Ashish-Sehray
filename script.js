function isSameType(value1, value2) {
  //your js code here
	let newValue1=parseInt(value1);
	let newValue2 =parseInt(value2);
	console.log(newValue1,newValue2);
	console.log(typeof(newValue1));
	console.log(typeof(newValue2))
	if(isNaN(newValue1)||isNaN(newValue2)){
	    if(isNaN(newValue1)){
	        if(isNaN(newValue2)){
	        return true;}
	    }
	     if(isNaN(newValue2)){
	        if(isNaN(newValue1)){
	        return true;}
	    }
		return false;
	}else if(typeof(newValue1)==typeof(newValue2)){
		return true;
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
