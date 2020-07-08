let products = [
    {
        "ProductID": 1,
        "ProductName": "Product1",
        "SupplierID": 1,
        "CategoryID": 1,
        "UnitPrice": "18.000",
        "UnitsInStock": 39,
        "Discount": "20%"
    }, {
        "ProductID": 1,
        "ProductName": "Product2",
        "SupplierID": 1,
        "CategoryID": 1,
        "UnitPrice": "7.000",
        "UnitsInStock": 12,
        "Discount": "10%"
    }, {
        "ProductID": 1,
        "ProductName": "Product3",
        "SupplierID": 1,
        "CategoryID": 1,
        "UnitPrice": "12.000",
        "UnitsInStock": 4,
        "Discount": "5%"
    }, {
        "ProductID": 1,
        "ProductName": "Product4",
        "SupplierID": 1,
        "CategoryID": 1,
        "UnitPrice": "24.000",
        "UnitsInStock": 14,
        "Discount": "0%"
    }
];

function createTable() {
        
    tableDiv = document.getElementById('tableDiv')
    table1 = document.createElement('table');
    table1.setAttribute("id", "table");
    tableDiv.appendChild(table1);

    tableDiv = document.getElementById('tableDiv');

    
    for (const key in products) {


        row = document.createElement('tr');
        row.setAttribute("id", "row" + i);
        tableDiv.appendChild(row);

        cell1 = document.createElement('td');
        cell1.innerHTML = products[key].ProductName;

        cell2 = document.createElement('td');
        cell2.innerHTML = products[key].UnitPrice;

        button = document.createElement('button');
        button.setAttribute("id", "button" + i);
        button.setAttribute("value", JSON.stringify(products[i]));
        button.innerHTML = "Buy";

        cell3 = document.createElement('td');
        cell3.appendChild(button);
       
        
        newRow = document.getElementById("row" + i);
        newRow.appendChild(cell1);
        
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        
        tableDiv.appendChild(newRow);
        
        document.getElementById("button" + i).addEventListener("click",
                function (event) {
                    collect(event.target.value);
                    
                }
            )
            
       
                
        i++;
    }
}




i = 0;
sum = 0;
let cart = {
products: [],
suma: 0
}
function collect(value) {

let valueJson = JSON.parse(value);


cart.suma += parseInt(valueJson.UnitPrice);

cart.products.push({
    nameProduct: valueJson.ProductName,
    priceProduct: valueJson.UnitPrice,
   
});

}

function viewCart() {

document.getElementById("price").innerHTML = cart.suma;

let products =cart.products;
let cartDiv = document.getElementById('cart');

let table2 = document.createElement('table');
table2.setAttribute('id', "tableCart");
cartDiv.appendChild(table2);
let i = 0; 
for (const key in products) {
    let row = document.createElement('tr');

    cell1 = document.createElement('td');
    cell1.innerHTML = products[key].nameProduct;

    cell2 = document.createElement('td');
    cell2.innerHTML = products[key].priceProduct;

    btnDel = document.createElement('button');
    btnDel.setAttribute('value', products[key].id);
    btnDel.setAttribute('id', "btnDelete" + i);
    btnDel.innerHTML = "Delete";

    cell3 = document.createElement('td');
    cell3.appendChild(btnDel);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    table2.appendChild(row);

    document.getElementById("btnDelete" + i).
        addEventListener("click",
            function (event) {
                
                subtraction(event.value);
            });

            i++;
}
}

function subtraction(id) {

let products = cart.products;
for (const key in products) {
    if (products[key].id == id) {
        cart.suma -= cart.products[key].priceProduct;
        cart.products.splice(key, 1);

    }
}
cartDiv = document.getElementById('cart');
cartDiv.innerHTML = "";
viewCart();
}
