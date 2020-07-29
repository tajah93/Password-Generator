var submitEL = document.querySelector("#GenPass");
var Cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var SpecCharac = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var Characters = "";
var capAns;
var lowAns;
var numAns;
var scAns; 
var CreatePass = "";



function Gen(event) {
    event.preventDefault()
    var PassQ = confirm("Do you want to create a new and secure password?");
        if (PassQ === true) {
            var Characters = prompt("Enter the number of characters you would like. Note: Must be a min of 8, max of 128."); {
                while(Characters <=7 || Characters >= 129) {
                    alert("Your password must be between 8- 128 characters in length!")
                    Characters = prompt("Enter the number of characters you would like. Note: Must be a min of 8, max of 128.")
                }
            }

        capAns = prompt("Enter 'C' if you would like at least one capital letter.") 
            if (Cap === "C") {
            console.log(Cap)
        }
        lowAns = prompt("Enter 'L' if you would like at least one lowercase letter.")
            if (Low === "L") {
                console.log(Low)
            }
        numAns = prompt("Enter 'N' if you would like at least one number.")
            if (Num === "N") {
                console.log(Num)
            }
        scAns = prompt("Enter 'S' if you would like at least one special character.")
            if (SpecCharac === "S") {
                console.log(SpecCharac)
            }
            while(capAns !== "C" && lowAns !== "L" && numAns !== "N" && scAns !== "S") {
                alert("You must confirm at least one character!")
                capAns = prompt("Enter 'C' if you would like at least one capital letter."); 
                if (Cap === "C") {
                console.log(Cap)
                }
                lowAns = prompt("Enter 'L' if you would like at least one lowercase letter.")
                    if (Low === "L") {
                        console.log(Low)
                    }
                numAns = prompt("Enter 'N' if you would like at least one number.")
                    if (Num === "N") {
                        console.log(Num)
                    }
                scAns = prompt("Enter 'S' if you would like at least one special character.")
                    if (SpecCharac === "S") {
                        console.log(SpecCharac)
                    }
                }


        var finalCharac = []

        if (capAns === "C") {
            finalCharac = finalCharac.concat(Cap)
        }

        if (lowAns === "L") {
            finalCharac = finalCharac.concat(Low)
        }

        if (numAns === "N") {
            finalCharac = finalCharac.concat(Num)
        }

        if (scAns === "S") {
            finalCharac.concat(SpecCharac)
        }

        console.log(finalCharac)

        
        for  (var p = 0; p < Characters; p++ ) {
            CreatePass = CreatePass + finalCharac[Math.floor(Math.random() * finalCharac.length)];
            console.log(CreatePass); 
        
        }


        alert("Your new and secure password is: " +  CreatePass)



} 
}

submitEL.addEventListener("click", Gen);



















