    let btn = document.getElementById('run');
    let error = document.getElementById('print1');
    let result = document.getElementById('print1');
    let resultDigits = document.getElementById('print2');
    let positiveResult = " is a Narcissistic Number";
    let negativeResult = " is NOT a Narcissistic Number";
    
    btn.addEventListener('click', Narcissistic);

        function Narcissistic() {
               
            
				//<----------- Naming variables and defining named variables ------------>
                    
                    let originalNumber,number,numberOfDigits,sum = 0;

                    number = Number(document.getElementById("Num").value);

				originalNumber = number;
                numberOfDigits = number.toString().length;
                    
            // <----------- Checking the calculations of input number ------>         
				while(number > 0) {
					
                    let lastDigit = number % 10;
					sum += Math.pow(lastDigit,numberOfDigits);
					number = Math.floor(number/10);
                    
				} 
            // <------------- Passing conditions for printing results-------->
            
            if (originalNumber < 0 && " " ) {
                error.innerHTML= "Please enter a positive integer";
                 resultDigits.innerHTML= "(" + "No acceptable digits" + ")";
                
                return;
                
            } else if (sum == originalNumber) {
					
                   result.innerHTML= originalNumber + positiveResult;
                    resultDigits.innerHTML= numberOfDigits + " digit"+"(s" + ")";
				
                } else {
					
                    result.innerHTML= originalNumber + negativeResult;
                    resultDigits.innerHTML= numberOfDigits + " digit"+"(s" + ")";
				}
			}
		

