let num = parseInt(prompt("Gimme a number."));
let num1
let sent = prompt("Now gimme a fruit.");

function add7 ()
{
    num1 = num + 7;
    alert("if you add 7  to your number it's " + num1);
}
add7();

function multiply ()
{
    let num2 = num * num1;
    alert("and then if you multiply this with your original number it's " +num2);
}
multiply();

function capitalize ()
{
    sent1 = sent.charAt(0).toUpperCase() + sent.substring(1).toLowerCase();
    alert("Do you mean " + sent1 + " for the fruit?");
}
capitalize();

function lastLetter ()
{
    sent = sent.slice(-1);
    alert("The last letter of that is " + sent);
}

lastLetter();


