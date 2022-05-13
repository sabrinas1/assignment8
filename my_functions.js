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
        $('#' + qname).on("change", function () {updateCost();});
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
function updateCost()
{
    for (let i = 0; i < menuItems.length; i++) {
        qname = 'quan' + i;
        quantity = parseFloat($('#' + qname).val());
        total = (quantity * menuItems[i].cost).toFixed(2);
        tcost = document.getElementById(i).getElementsByClassName("totalCost")[0];
        tcost.getElementsByTagName("input")[0].value = total;
    }
    updateTotal();
}

function updateTotal()
{
    var sum = 0;
    for (i = 0; i < menuItems.length; i++) {
        tcost = document.getElementById(i).getElementsByClassName("totalCost")[0];
        cost = tcost.getElementsByTagName("input")[0].value;
        sum += parseFloat(cost);
    }
    document.getElementById("subtotal").value = sum.toFixed(2);
    ttax = (0.0625 * document.getElementById("subtotal").value).toFixed(2);
    document.getElementById("tax").value = ttax;
    document.getElementById("total").value = parseFloat(sum) + parseFloat(ttax);
}

function verify()
{
    last = document.getElementsByClassName("userInfo")[1].getElementsByTagName("input")[0].value;
    if (last == null) {
        alert("Please enter your last name");
        return;
    }
    phone = document.getElementsByClassName("userInfo")[4].getElementsByTagName("input")[0].value;
    
    phone = String(phone.replace(/[^0-9]/g, ""))
    if (phone.length != 7 && phone.length != 10) {
        alert("Please enter a valid phone number");
        return;
    }

    currTime = new Date();
    currHour = currTime.getHours();
    currMinute = currTime.getMinutes();

    method = $('input[type=radio][name=p_or_d][checked=checked]').value;
    if (method === 'pickup') {
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
    } else {
        newHour = currHour;
    }

    total = $('#total').val();
    if (total == 0) {
        alert("Invalid Order: No items selected");
        return;
    }

    alert("Thank you for ordering from Jade Delight!");

    var summary = window.open("summary.html");

    for (let i = 0; i < menuItems.length; i++) {
        qname = 'quan' + i;
        quantity = summary.document.getElementById(i).getElementsByClassName("quantity")[0];
        quantity.value = parseFloat($('#' + qname).val());
        tcost = summary.document.getElementById(i).getElementsByClassName("totalCost")[0];
        tcost.getElementsByTagName("input")[0].value = document.getElementById(i).getElementsByClassName("totalCost")[0].getElementsByTagName("input")[0].value;
    }

    var sum = 0;
    for (i = 0; i < menuItems.length; i++) {
        tcost = summary.document.getElementById(i).getElementsByClassName("totalCost")[0];
        cost = tcost.getElementsByTagName("input")[0].value;
        sum += parseFloat(cost);
    }
    summary.document.getElementById("subtotal").value = sum.toFixed(2);
    ttax = (0.0625 * sum).toFixed(2);
    summary.document.getElementById("tax").value = ttax;
    summary.document.getElementById("total").value = parseFloat(sum) + parseFloat(ttax);

    summary.documentl.getElementById("time").value = newHour + ":" + newMin;
}