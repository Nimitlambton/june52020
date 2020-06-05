
//REPORT on the SUM of all numbers from 1000 going down to 17Count down by 11 each timeADD UP all the numbers you step over 
//as you are counting down from 1000, going down 11 each time, until you get to 17Output the result


var val = 0;
  var i = 1000;
	for (i; i > 17; i--) {
  		val += i;
        i -= 11;
	}

		document.write(val)