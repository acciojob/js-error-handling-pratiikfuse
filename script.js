class OutOfRangeError extends Error{
	constructor(message){
		super(message);
		this.message = message;
		this.name  = "OutOfRangeError"
	}
}

class InvalidExprError extends Error{
	constructor(message){
		super(message);
		this.message = message;
		this.name  = "InvalidExprError";
	}
}

function isOperator(op){
  if(op == '-' || op == '/' ||op == '*' || op == '+'){
    return true;
  }
  return false;
}

function evalString(e){
	const input  = document.getElementById("input1");
	const str  = input.value;
	try{
	  for(let i = 0;i<str.length;i++){
	    if((str[i]>=0 && str[i]<=9) || str[i] === ' '  || isOperator(str[i])){
	      if(isOperator(str[i])){
	        if(i == 0){
	          throw new SyntaxError("Expression should not start with invalid operator");
	        }
	        if(i == str.length-1){
	          throw new SyntaxError("Expression should not end with invalid operator");
	        }
	      }
	       if(i != str.length-1){
	         if(isOperator(str[i]) && isOperator(str[i+1])){
	           throw new InvalidExprError("Expression should not have an invalid combination of expression");
	         }
	       }
	    }
	    else{
	      throw new OutOfRangeError("Expression should only consist of integers and +-/* characters and not "+str[i]);
	    }
	  
	}
	}
	catch(e){
	  alert(e);
	}
}