//variables
var ul =$("ul")

//Init Function
function myBuzz(){
for ( var count = 1; count <= 100; count++) {
		if (count % 3 === 0 && count % 5 === 0) {
			ul.append("<li><span>FizzBuzz!</span></li>");
		}
		else if (count % 3 === 0) {
			ul.append("<li class='fizz'><span>Fizz</span></li>");
		}
		else if (count % 5 === 0) {
			ul.append("<li><span>Buzz</span></li>");
		}
		else {
			ul.append("<li><span>" + count + "</span></li>");
		}
	}
  }
myBuzz();
