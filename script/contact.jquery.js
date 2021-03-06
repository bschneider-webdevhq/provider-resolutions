

console.log("Ready");

// Regex
var numRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/g;
var nameVal = /[A-Za-z]{1}[A-Za-z]/;
var mobileVal = /[0-9.()-]{10}/;
var emailVal = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;

// Validates string into a phone number for all browsers and calls it in a new tab/window.
function callNumber(num) {
    vNum = num.replace(numRegex, "tel:$&");
    window.open(vNum);
}

function sendGeneralEmail() {
    let toAddress = $("#toEmailAddress").text();
    // Removes padding carried from string.
    const toAddressRegex = toAddress.replace(/^\s+|\s+$/g, '');
    const subj = "Provider Resolutions Inquiry";
    document.location = "mailto:" + toAddressRegex + "?subject=" + subj;
}

function prLocation() {
    const point = "https://www.google.com/maps/place/Portland,+OR/@45.5428515,-122.9345043,10z/data=!3m1!4b1!4m5!3m4!1s0x54950b0b7da97427:0x1c36b9e6f6d18591!8m2!3d45.5051064!4d-122.6750261";
    window.open(point);
}

//https://www.google.com/maps/place/Portland,+OR/@45.5428515,-122.9345043,10z/data=!3m1!4b1!4m5!3m4!1s0x54950b0b7da97427:0x1c36b9e6f6d18591!8m2!3d45.5051064!4d-122.6750261

function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://ss0981l870.execute-api.us-east-1.amazonaws.com/product";

    // Input form validation

    // could store ids in an array, and call a single function that checks each to refactor below, make it original
    if (!nameVal.test($("#name-input").val())) {
        document.getElementById("name-error").innerHTML = "Please enter a valid name";
        return;
    }

    if (!mobileVal.test($("#phone-input").val())) {
        document.getElementById("tel-error").innerHTML = "Please enter a valid phone number";
        return;
    }

    if ($("#email-input").val() == "") {
        document.getElementById("email-error").innerHTML = "Email address can not be left blank";
        return;
    }

    if (!emailVal.test($("#email-input").val())) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return;
    }

    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        name: name,
        phone: phone,
        email: email,
        desc: desc
    };

    // Stringify JSON posted to API Gateway, triggers SES methods integrated with Lambda 
    $.ajax({
        type: "POST",
        url: "https://ss0981l870.execute-api.us-east-1.amazonaws.com/product",
        dataType: "json",
        crossDomain: "true",
        contentType: "text/plain; charset=utf-8",
        data: JSON.stringify(data),

        // Alerts user, resets form on success.
        success: function () {
            // clear form and show a success message
            alert("Your inquiry has been received. Thank you!");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        // Alerts user on fail.
        error: function () {
            alert("Message failed to receive. Please try again later.");
        }
    });
}
console.log("Load Complete");

