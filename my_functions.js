/*my functions to implement Jade Delight assignment specifications*/



for (var i = 0; i < menuItems.length; i++) {
    document.getElementsByName("quan" + i).addEventListener("change", updateCost("quan" + i));
}

document.getElementsByValue("delivery").addEventListener("load", reveal(document.getElementsByClassName("userInfo address")));
document.getElementsByValue("delivery").addEventListener("click", reveal(document.getElementsByClassName("userInfo address")));

function reveal(obj = {})
{
    if (obj.style.display != "none") {
        obj.style.display = "none";
    } else if (obj.style.display === "none") {
        obj.style.display = "block";
    }
}

function updateCost(qname = "")
{
    index = parseInt(String((qname).replace(/[^0-9]/g, "")));
    quantity = document.getElementsByName(qname).value;
    console.log(menuItems[index]);
    total = (quantity * menuItems[index].cost).toFixed(2);
    tcost = document.getElementById(index).totalCost;
    tcost.setAttribute("value", total);
    updateTotal();
}

function updateTotal()
{
    sum = 0;
    for (i = 0; i < menuItems.length; i++) {
        qname = "quan" + i;
        sum += menuItems[i].cost * document.getElementsByName(qname).value;
    }
    document.getElementById("subtotal").setAttribute("value", sum);
    ttax = (0.0625 * document.getElementById("subtotal").value).toFixed(2);
    document.getElementById("tax").setAttribute("value", ttax);
    document.getElementById("total").setAttribute("value", sum + ttax);
}