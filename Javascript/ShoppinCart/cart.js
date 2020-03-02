  function buildTable(data) {
 
 var table = document.createElement("table");
  table.className="gridtable";
  table.id="test";
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var headRow = document.createElement("tr");
  ["Variant","Price"].forEach(function(el) {
    var th=document.createElement("th");
    th.appendChild(document.createTextNode(el));
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);  

  data.forEach(function(item,index) {
    var tr = document.createElement("tr");
      var td = document.createElement("td");
      str = item.join('/');
      td.innerHTML = str;
      tr.appendChild(td);
      var td = document.createElement("td");
      var textBox = document.createElement("input");
      textBox.setAttribute("id", str )
      textBox.setAttribute("name", str )
      textBox.setAttribute("value", "" )

      textBox.setAttribute("placeholder", "Add On Price" )
      td.appendChild(textBox);

      tr.appendChild(td);
      tbody.appendChild(tr);  
    
  });

  table.appendChild(tbody);             
  return table;
  
}

        var id=1;
        var boxes;

        if(id==1)
        {
            boxes = prompt("How many options you want to enter??...");
        }
addBox = function(){
    

    var div = document.createElement("div");
    div.setAttribute("class","input-group input-group-sm mb-2")
    var table = document.getElementById("dory");
    var tbody = document.getElementById("tbody");

    var maindiv = document.getElementById("parent");
    var textBox = document.createElement("input");
    textBox.setAttribute("id", id )
    textBox.setAttribute("name", id )
    textBox.setAttribute("placeholder", "Option" )

    //textBox.setAttribute("class","col-xs-3")
    var textarea = document.createElement("Textarea");
    textarea.setAttribute("id",id +"test")
    textarea.setAttribute("name",id)
    textarea.setAttribute("class","Textarea")

    var td = document.createElement("td");
    var tr = document.createElement("tr");

td.appendChild(textBox)
td.appendChild(textarea)
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);

maindiv.appendChild(table);
    


id++;

}

var json={};
var pricejson={};
var json1={};

var varients=[];
var matrixarray=[];
var pricearray=[];
var mayarray=[];
var optionarray=[];
var output={};
var diffaraay=[];
var matrixsubmitarray=[];
var varientsubmitarray=[];

function Preview(){

    json={
        "productName" : document.getElementById("fname1").value,
        "baseprice":500,
        "image":"",
        "description":"Des",
        "variants":test(),
        "varientDetails":submit()
    }

function test()
{
    j=0;
    for(i=1;i<=boxes;i++){
        json1={
            "type":document.getElementById(i).value,  
            "values":pusharray(document.getElementById(i+"test").value)
}
j=j+1;
varients.push(json1)
    }

function pusharray(data)
{
 array = data.split(',');

 return array
}

return varients;
}

mayarray.push(json);    
console.log(mayarray);

function submit()
{
    var L = varients.length;
    for(i=0;i<L;i++)
{
matrixsubmitarray.push(varients[i].values)

}
console.log(matrixsubmitarray)
function combos(list, n = 0, result = [], current = [])
{
    if (n === list.length) result.push(current)
    else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
 
    return result
}

 diffaraay= combos(matrixsubmitarray)
 document.getElementById("parent").appendChild(buildTable(diffaraay));

    for (var i = 0; i < L; i++) 
    {
        var obj = varients[i].type;
        optionarray.push(obj); 

    }
var x= diffaraay.length;
for(var j=0;j<x;j++)
{
    var k=0;
    var myobj = {};


for (var i=0;i<diffaraay[j].length;i++)
{
    myobj[optionarray[k]]=diffaraay[j][i]

k++;
}
varientsubmitarray.push(myobj)

}

  return varientsubmitarray
}
}

function formdata(){
    $('#btnData').click(function(e){
        e.preventDefault();
       
      calledaddprice();
      console.log(mayarray);

     });
}

function calledaddprice(){
var lent= varientsubmitarray.length;
      for(var i=0;i<lent;i++)
      {
        var str=diffaraay[i].join('/');


    mayarray[0].varientDetails[i]["price"]=document.getElementById(str).value;

      }

    }






