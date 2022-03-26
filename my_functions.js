/*my functions to implement Jade Delight assignment specifications*/

for (var i = 0; i < menuItems.length; i++) {
    qname = "quan" + i
    document.getElementById(qname).addEventListener("change", updateCost(qname));
}

document.querySelector("input[value='delivery']").addEventListener("load", reveal(document.getElementsByClassName("userInfo address")));
document.querySelector("input[value='delivery']").addEventListener("click", reveal(document.getElementsByClassName("userInfo address")));

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
    tcost = document.getElementById(index);
    console.log(tcost + "; " + tcost.totalCost);
    tcost.totalCost.setAttribute("value", total);
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