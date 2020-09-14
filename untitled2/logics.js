let fluteinstrument={
    desription:"חליל יפה",
    id:1,
    imagePath: "halil.jpg",
    instrumentOrder:null,
    instumentType: {id: 1, name: "נשיפה"},
    name: "חליל",
    price:1200,
    typeId:1
}
let trumpetinstrument={
    desription:"חצוצרה יפה",
    id:2,
    imagePath: "trumpet.png",
    instrumentOrder:null,
    instumentType: {id: 1, name: "נשיפה"},
    name: "חצוצרה",
    price:500,
    typeId:1
}
let mapuhitinstrument={
    desription:"מפוחית יפה",
    id:3,
    imagePath: "mapuhit.jpg",
    instrumentOrder:null,
    instumentType: {id: 1, name: "נשיפה"},
    name: "מפוחית",
    price:700,
    typeId:1
}
let tromboninstrument={
    desription:"טרומבון יפה",
    id:4,
    imagePath: "trombon.jpg",
    instrumentOrder:null,
    instumentType: {id: 1, name: "נשיפה"},
    name: "טרומבון",
    price:200,
    typeId:1
}
let clarinetinstrument={
    desription:"קלרינט יפה",
    id:5,
    imagePath: "clarinet.png",
    instrumentOrder:null,
    instumentType: {id: 1, name: "נשיפה"},
    name: "קלרינט",
    price:1300,
    typeId:1
}
let guitarinstrument={
    desription:"גיטרה יפה רצח",
    id:6,
    imagePath: "guitar.png",
    instrumentOrder:null,
    instumentType: {id: 2, name: "מיתר"},
    name: "גיטרה",
    price:900,
    typeId:2
}
let electricguitarinstrument={
    desription:"גיטרה יד 9",
    id:7,
    imagePath: "electricguitar.png",
    instrumentOrder:null,
    instumentType: {id: 2, name: "מיתר"},
    name: "גיטרה חשמלית",
    price:1499,
    typeId:2
}


let allinstrument=[clarinetinstrument, fluteinstrument, mapuhitinstrument, tromboninstrument, trumpetinstrument,guitarinstrument, electricguitarinstrument];

let currentrendereditems=[];

function instrumentRender(parameter1){
    currentrendereditems.push(parameter1);
    let col = document.createElement("div");
    col.className="col-lg-4 mt-4 items";
    let div = document.createElement("div");
    div.className="card";
    let img=document.createElement("img")
    img.className="img";
    img.src=parameter1.imagePath;
    div.appendChild(img);
    let innerdiv = document.createElement("div");
    innerdiv.className="card-body";
    let title = document.createElement("h5");
    let texttitle = document.createTextNode(parameter1.name);
    title.appendChild(texttitle);
    innerdiv.appendChild(title);
    let description = document.createElement("p");
    let text = document.createTextNode(parameter1.desription);
    description.appendChild(text);
    innerdiv.appendChild(description);
    let price = document.createElement("p");
    let text2 = document.createTextNode(parameter1.price);
    price.appendChild(text2);
    innerdiv.appendChild(price);
    let href = document.createElement("a");
    href.href="#";
    href.className="btn btn-primary";
    let hreftext = document.createTextNode("הוספה לעגלה");
    href.appendChild(hreftext);
    innerdiv.appendChild(href);
    div.appendChild(innerdiv);
    col.appendChild(div);
    document.getElementsByClassName("itemrow")[0].appendChild(col);
}

instrumentRender(allinstrument[0]);
instrumentRender(allinstrument[1]);
instrumentRender(allinstrument[2]);
instrumentRender(allinstrument[3]);
instrumentRender(allinstrument[4]);
instrumentRender(allinstrument[5]);
instrumentRender(allinstrument[6]);

let filteredObject = {};

function itemRenderBySearch()
{
    name = document.getElementById("searchitem").value;
    filteredObject["name"] = name;

    FilterProducts(filteredObject);
}

function itemsRedner()
{
    type = document.getElementById("roledropdown").value;
    filteredObject["type"] = type;
    FilterProducts(filteredObject);
}

function priceRender(param)
{
    if(param.checked==true)
        filteredObject["price"] = param.value;
    else
        filteredObject["price"] = 0;
    FilterProducts(filteredObject);
}

function FilterProducts(filters)
{
    let filteredProducts = allinstrument;
    document.getElementsByClassName("itemrow")[0].innerHTML="";

    if (filters.name != undefined && filters.name != "")
    {
        filteredProducts = filteredProducts.filter(i => i.name.includes(filters.name));
    }

    if(filters.type != undefined && filters.type != "")
    {
        filteredProducts = filteredProducts.filter(i => i.typeId == filters.type)
    }

    if(filters.price != undefined && filters.price != "")
    {
        if(filters.price=="500")
            filteredProducts = filteredProducts.filter(i => i.price <= filters.price)
        if(filters.price=="500-1000")
            filteredProducts = filteredProducts.filter(i => i.price > 500 && i.price<=1000)
        if(filters.price=="1000-1500")
            filteredProducts = filteredProducts.  filter(i => i.price > 1000 && i.price<=1500);
    }

    for (let product of filteredProducts)
    {
        instrumentRender(product);
    }
}







