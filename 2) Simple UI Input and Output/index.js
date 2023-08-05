// Creates and outputs an alert
alert("This is an alert output.");


/*  Shows a modal window with a message, an input field and the
    buttons OK/Cancel
 */
let response = prompt("This is a prompt. What is your name?");

if (response != null) {
    alert(`Hello ${response}!`);
} else {
    alert(`Hello Guest!`);
}


/*  Creates a modal window that returns true if OK is pressed and
    false otherwise
*/
let isCreator = confirm("Are you my creator?");

if (isCreator) {
    alert(`Hello Creator!`);
} else {
    alert(`Hello Visitor!`);
}