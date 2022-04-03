/*my functions to implement Jade Delight assignment specifications*/

document.querySelector("input[value='delivery']").addEventListener("click", reveal(document.getElementsByClassName("address")));
//document.addEventListener("submit", verify(document.getElementsByTagName("form")))

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

// function verify(form = {})
// {
//     last = form.getElementsByClassName("userInfo").lname.getAttribute("value");
//     if (last == null) {
//         alert("Please enter your last name");
//         return;
//     }
//     phone = form.getElementsByClassName("userInfo").phone.getAttribute("value");
//     phone = String(phone.replace(/[^0-9]/g, ""))
//     if (phone.length() != 7 || phone.length() != 10) {
//         alert("Please enter a valid phone number");
//         return;
//     }

//     currTime = new Date;


//     //get time (date)
//     //if pickup -> +15
//     //if delivery -> +30
//         //street + city
//     //at least 1 item (total not 0)
//     //if issues, alert
//     //no issues -> popup thanks
//         //new window with item, quantity, total (for item), subtotal, tax, total, time
// }