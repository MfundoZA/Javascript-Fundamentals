function copyToClipboard() {
    let textElement = document.getElementById("txtCopy");

    textElement.select();
    textElement.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textElement.value);

    // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}