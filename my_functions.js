/*my functions to implement Jade Delight assignment specifications*/

for (var i = 0; i < menuItems.length; i++) {
    qname = "quan" + i
    document.getElementById(qname).addEventListener("change", updateCost(qname));
}

//$(document).ready(function() {$(".userInfoaddress").hide();});

document.getElementsByClassName("userInfoaddress").addEventListener("load", reveal(document.getElementsByClassName("userInfoaddress")));
document.querySelector("input[value='delivery']").addEventListener("click", reveal(document.getElementsByClassName("userInfoaddress")));

function reveal(obj = {})
{
    if (obj.type != "hidden") {
        obj.type = "hidden";
    } else if (obj.type === "hidden") {
        obj.type = "text";
    }
}

function updateCost(qname = "")
{
    index = parseInt(String((qname).replace(/[^0-9]/g, "")));
    quantity = document.getElementById(qname).value;
    total = (quantity * menuItems[index].cost).toFixed(2);
    tcost = document.getElementById(index).getElementsByClassName("totalCost");
    console.log(tcost);
    console.log(tcost.getElementsByName("cost"));
    tcost.getElementsByName("cost").setAttribute("value", total);
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