$(document).ready(function() {



    $(document).on('click', '#submit', function(e) {
        //Init var
        var guessNumber = document.getElementById('userinput').value;
        var result = document.getElementById("result-list");
        var ul = $("ul");

        //Check user input

        if (isNaN(parseInt(guessNumber))) {
            //init variable for error notification
            var notify = document.createElement('li');
            notify.innerHTML = "<p>Whoops! Try Again! </p>";

            //Clean result container
            while (result.hasChildNodes()) {
                result.removeChild(result.lastChild);
            }

            result.appendChild(notify);
            return false;
        } else {

            while (result.hasChildNodes()) {
                result.removeChild(result.lastChild);
            }

            for (var count = 1; count <= guessNumber; count++) {
                if (count % 3 === 0 && count % 5 === 0) {
                    ul.append("<li class='animated fadeIn fizzbuzz'><span>FizzBuzz!</span></li>");
                } else if (count % 3 === 0) {
                    ul.append("<li class='animated fadeIn fizz'><span>Fizz</span></li>");
                } else if (count % 5 === 0) {
                    ul.append("<li class='animated fadeIn buzz'><span>Buzz</span></li>");
                } else {
                    ul.append("<li class='animated fadeIn'><span>" + count + "</span></li>");
                }
            }


        }
        e.preventDefault();
    })



});



