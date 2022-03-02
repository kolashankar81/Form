window.onload=function(){

let form=document.getElementById("formSubmission");
// console.log("formdata:",form)

let table=document.getElementById('data');
// console.log("tabledata:",table)
form.addEventListener("submit",(e)=>{
    // console.log("evalue",e);
  e.preventDefault();
  submit();
})


const submit=()=>{
    // console.log("sumited")
  let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let state = document.getElementById("state").value;


  let newArray = [name,age,state];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}
   
}

