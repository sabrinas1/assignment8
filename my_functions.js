/*my functions to implement Jade Delight assignment specifications*/

document.addEventListener("load", reveal(document.getElementsByClassName("address").street));
document.addEventListener("load", reveal(document.getElementsByClassName("address").city));
document.querySelector("input[value='delivery']").addEventListener("click", reveal(document.getElementsByClassName("address").street));
document.querySelector("input[value='delivery']").addEventListener("click", reveal(document.getElementsByClassName("address").city));

function reveal(obj = {})
{
    console.log("Revealing/ hiding!");
    if (obj.type != "hidden") {
        obj.type = "hidden";
    } else if (obj.type === "hidden") {
        obj.type = "text";
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
    tcost = document.getElementById(index).getElementsByClassName("totalCost");
    console.log(tcost);
    console.log(tcost.innerHTML);
    tcost.innerHTML.cost.setAttribute("value", total);
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