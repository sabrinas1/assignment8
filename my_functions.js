/*my functions to implement Jade Delight assignment specifications*/

document.querySelector("input[value='delivery']").addEventListener("click", reveal(document.getElementsByClassName("address")));
document.addEventListener("submit", verify(document.getElementsByTagName("form")))

function reveal(obj)
{
    console.log(obj);
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].style != "visibility: hidden") {
            obj[i].setAttribute("style", "visibility: hidden");
        } else if (obj[i].style === "visibility: hidden") {
            obj[i].setAttribute("style", "visibility: visible");
        }
    }
}

for (var i = 0; i < menuItems.length; i++) {
    qname = "quan" + i
    document.getElementById(qname).addEventListener("change", updateCost(qname));
}

function updateCost(qname = "")
{
    index = parseInt(String((qname).replace(/[^0-9]/g, "")));
    quantity = document.getElementById(qname).value;
    total = (quantity * menuItems[index].cost).toFixed(2);
    tcost = document.getElementById(index).getElementsByClassName("totalCost")[0];
    tcost.getElementsByTagName("input")[0].setAttribute("value", total);
    updateTotal();
}

function updateTotal()
{
    sum = 0;
    for (i = 0; i < menuItems.length; i++) {
        sum += document.getElementById(i).totalCost.value;
    }
    document.getElementById("subtotal").setAttribute("value", sum);
    ttax = (0.0625 * document.getElementById("subtotal").value).toFixed(2);
    document.getElementById("tax").setAttribute("value", ttax);
    document.getElementById("total").setAttribute("value", sum + ttax);
}

function verify(form = {})
{
    last = form.getElementsByClassName("userInfo").lname.getAttribute("value");
    if (last == null) {
        alert("Please enter your last name");
        return;
    }
    phone = form.getElementsByClassName("userInfo").phone.getAttribute("value");
    phone = String(phone.replace(/[^0-9]/g, ""))
    if (phone.length() != 7 || phone.length() != 10) {
        alert("Please enter a valid phone number");
        return;
    }

    currTime = new Date.now();
    currHour = currTime.getHours();
    currMinute = currTime.getMinutes();

    method = form.p_or_d[0];
    if (method.checked === "checked") {
        newMin = currMinute + 15;
    } else {
        newMin = currMinute + 30;
        street = form.getElementsByClassName("userInfo").street.getAttribute("value");
        city = form.getElementsByClassName("userInfo").city.getAttribute("value");
        if (street == null || city == null) {
            alert("Please enter your address");
            return;
        }
    }

    if (newMin > 60) {
        newMin -= 60;
        newHour = currHour + 1;
    }

    total = form.getElementById(total).value;
    if (total == 0) {
        alert("Invalid Order: No items selected");
        return;
    }

    alert("Thank you for ordering from Jade Delight!");

    //window.open("summary.html");


    
}