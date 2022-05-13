/*my functions to implement Jade Delight assignment specifications*/

/* add event listeners once elements are loaded */
$(document).ready(function () {
    var obj = document.getElementsByClassName("address");
    for (let element of obj) {
        element.style.visibility = 'hidden';
    }
    $('input[type=radio][name=p_or_d]').on('change', function() {reveal();});
    for (var i = 0; i < menuItems.length; i++) {
        qname = "quan" + i
        $('#' + qname).on("change", function () {updateCost(qname);});
    }
    $('input[type=button]').on('click', function () {verify();});
});

/* unhides address inputs when change is made from pickup to delivery */
function reveal()
{
    var obj = document.getElementsByClassName("address");
    for ( let element of obj) {
        if (element.style.visibility === 'hidden') {
            element.style.visibility = 'visible';
        } else {
            element.style.visibility = 'hidden';
        }
    }
}

/* updates total cost for item when quantity changes */
function updateCost(qname = "")
{
    console.log(qname);
    index = parseInt(String((qname).replace(/[^0-9]/g, "")));
    quantity = document.getElementById(qname).value;
    total = (quantity * menuItems[index].cost).toFixed(2);
    console.log(quantity + " " + total);
    tcost = document.getElementById(index).getElementsByClassName("totalCost")[0];
    console.log("old: " + tcost.getElementsByTagName("input")[0].value);
    tcost.getElementsByTagName("input")[0].value = total;
    console.log("new: " + tcost.getElementsByTagName("input")[0].value);
    updateTotal();
}

function updateTotal()
{
    console.log("update total");
    var sum = 0;
    for (i = 0; i < menuItems.length; i++) {
        tcost = document.getElementById(i).getElementsByClassName("totalCost")[0];
        cost = tcost.getElementsByTagName("input")[0].value;
        sum += parseInt(cost);
    }
    console.log(sum);
    document.getElementById("subtotal").value = sum;
    ttax = (0.0625 * document.getElementById("subtotal").value).toFixed(2);
    document.getElementById("tax").value = ttax;
    document.getElementById("total").value = sum + ttax;
}

function verify()
{
    console.log("verify");
    last = document.getElementsByClassName("userInfo")[1].getElementsByTagName("input")[0].value;
    if (last == null) {
        alert("Please enter your last name");
        return;
    }
    phone = document.getElementsByClassName("userInfo")[4].getElementsByTagName("input")[0].value;
    phone = String(phone.replace(/[^0-9]/g, ""))
    if (phone.length != 7 || phone.length != 10) {
        alert("Please enter a valid phone number");
        return;
    }

    currTime = new Date.now();
    currHour = currTime.getHours();
    currMinute = currTime.getMinutes();

    method = document.p_or_d[0];
    if (method.checked === "checked") {
        newMin = currMinute + 15;
    } else {
        newMin = currMinute + 30;
        street = document.getElementsByClassName("userInfo")[2].getElementsByTagName("input")[0].value;
        city = document.getElementsByClassName("userInfo")[3].getElementsByTagName("input")[0].value;
        if (street == null || city == null) {
            alert("Please enter your address");
            return;
        }
    }

    if (newMin > 60) {
        newMin -= 60;
        newHour = currHour + 1;
    }

    total = document.getElementById(total).value;
    if (total == 0) {
        alert("Invalid Order: No items selected");
        return;
    }

    alert("Thank you for ordering from Jade Delight!");

    // window.open("summary.html");

    // "summary.html".getElement


    
}