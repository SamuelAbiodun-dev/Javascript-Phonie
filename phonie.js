function show() {
  let inputNumber = document.getElementById("inputUser").value;
  confirmPhoneNumber(inputNumber);
}

let listMTN = ["0810", "0813", "0814", "0816", "0703", "0803", "0903", "0906"];
let listAIRTEL = ["0802", "0808", "0902", "0907", "0701", "0812"];
let listGLO = ["0705", "0805", "0905", "0807", "0811", "0815"];
let list9Mobile = ["0809", "0908", "0909", "0817", "0818"];
let listDigit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function confirmPhoneNumber(number) {
  let displayText = document.getElementById("txt2");

  let image = document.getElementById("image1");
  for (let index = 0; index < number.length; index++) {
    if (!listDigit.includes(number.charAt(index))) {
      return "Only numbers 0-9 are allowed";
    }
  }

  if (number.length !== 11) {
    return "Phone number must be of 11 digits";
  }

  let num = number.slice(0, 4);

  if (listMTN.includes(num)) {
    displayText.innerText = "An MTN Line";
    image.src = "./images/mtn-logo.png";
  }

  if (listAIRTEL.includes(num)) {
    displayText.innerText = "An Airtel Line";
    image.src = "./images/Airtel-logo.jpg";
  }

  if (listGLO.includes(num)) {
    displayText.innerText = "A Glo Line";
    image.src = "./images/Glo-logo.jpg";
  }

  if (list9Mobile.includes(num)) {
    displayText.innerText = "A 9mobile Line";
    image.src = "./images/9mobile-logo.webp";
  }
}
