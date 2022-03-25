/*my functions to implement Jade Delight assignment specifications*/



for (var i = 0; i < menuItems.length; i++) {
    document.getElementsByName("quan" + i).addEventListener("change", updateCost("quan" + i));
}

document.getElementsByValue("delivery").addEventListener("click", reveal());

function reveal()
{
    document.getElementsByClassName("userInfo address").style.display = "block";
}

function updateCost(qname)
{
    index = parseInt(String(qname.name).replace(/[^0-9]/g, ""));
    quantity = document.getElementsByName(qname).value;
    total = (quantity * menuItems[index].cost).toFixed(2);
    tcost = document.getElementById(index).totalCost;
    tcost.value = total;
    updateTotal();
}

function updateTotal()
{
    sum = 0;
    for (i = 0; i < menuItems.length; i++) {
        qname = "quan" + i;
        sum += menuItems[i].cost * document.getElementsByName(qname).value;
    }
    document.getElementById("subtotal").value = sum;
    document.getElementById("tax").value = (0.0625 * document.getElementById("subtotal").value).toFixed(2);
    document.getElementById("total").value = document.getElementById("subtotal").value + document.getElementById("tax").value;
}