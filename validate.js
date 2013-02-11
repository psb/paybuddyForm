$(document).ready(function(){

  var formHandler = function(event){
  	var descRegex = /^(\w+\s?)+$/;
  	var amountRegex = /^\d+(\.\d\d)?/;
  	var cardNumberRegex = /^\d{16}$/;
  	var ccvRegex = /^\d{3,4}/;
  	var nameRegex = /^(\w+\s?)+$/;
  	var billingAddressNumberRegex = /^\d+$/
  	var billingAddressStreetRegex = /^(\w+\s?)+$/
  	var billingAddressCityRegex = /^(\w+\s?)+$/
  	var billingAddressStateRegex = /^\w{2}$/
  	var billingAddressZipcodeRegex = /^\d{5}$/

  	var desc = $("#desc").val();
  	var amount = parseFloat($("#amount").val());
  	var cardNumber = parseInt($("#cardNumber").val());
  	var ccv = parseInt($("#ccv").val());
  	var cardHolder = $("#name").val();
  	debugger;
  	var billingAddressNumber = parseInt($("#billingAddressNumber").val());
  	var billingAddressStreet = $("#billingAddressStreet").val();
  	var billingAddressCity = $("#billingAddressCity").val();
  	var billingAddressState = $("#billingAddressState").val();
  	var billingAddressZipcode = parseInt($("#billingAddressZipcode").val());

  	var addValidClass = function (node, validity) {
  		node.addClass(validity);
  	}

  	if (descRegex.test(desc)){
      addValidClass($("#desc"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#desc"), "invalid");
      console.log("Oops!");
    }

    if (amountRegex.test(amount)){
      addValidClass($("#amount"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#amount"), "invalid");
      console.log("Oops!");
    }
    if (cardNumberRegex.test(cardNumber)){
      addValidClass($("#cardNumber"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#cardNumber"), "invalid");
      console.log("Oops!");
    }
    if (ccvRegex.test(ccv)){
      addValidClass($("#ccv"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#ccv"), "invalid");
      console.log("Oops!");
    }
    if (nameRegex.test(cardHolder)){
      addValidClass($("#name"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#name"), "invalid");
      console.log("Oops!");
    }
    if (billingAddressNumberRegex.test(billingAddressNumber)){
      addValidClass($("#billingAddressNumber"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#billingAddressNumber"), "invalid");
      console.log("Oops!");
    }
    if (billingAddressStreetRegex.test(billingAddressStreet)){
      addValidClass($("#billingAddressStreet"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#billingAddressStreet"), "invalid");
      console.log("Oops!");
    }
    if (billingAddressCityRegex.test(billingAddressCity)){
      addValidClass($("#billingAddressCity"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#billingAddressCity"), "invalid");
      console.log("Oops!");
    }
    if (billingAddressStateRegex.test(billingAddressState)){
      addValidClass($("#billingAddressState"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#billingAddressState"), "invalid");
      console.log("Oops!");
    }
    if (billingAddressZipcodeRegex.test(billingAddressZipcode)){
      addValidClass($("#billingAddressZipcode"), "valid");
      console.log("Super!");
    } else {
      addValidClass($("#billingAddressZipcode"), "invalid");
      console.log("Oops!");
    }
    var dateToday = new Date();
    var monthToday = dateToday.getMonth();
    var yearToday = dateToday.getFullYear();

    var cardMonth = parseInt($("#expMonth").val());
    var cardYear = parseInt($("#expYear").val());

    var nowDate = new Date(yearToday, monthToday);
    var cardDate = new Date(cardYear,cardMonth);

    if (cardDate > nowDate) {
    	console.log("Good!");
    } else {
    	console.log("Rats!");
    }

    










    console.log("submitted"); // fixme: validate form here

    event.preventDefault(); // prevents the page from reloading
  };

  $("form").submit(formHandler); // register a callback
});