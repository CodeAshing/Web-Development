var button=document.getElementById("button")
var input=document.getElementById("input")
var ul =document.querySelector("ul")

button.addEventListener("click", addToList)

 function addToList(){     
     if(input.value.length>0){
        var li=document.createElement("li")
        li.append(document.createTextNode(input.value))
        ul.appendChild(li)
        input.value=''
     }
}

input.addEventListener("keypress", function(event){   
     if(event.keyCode===13){
        addToList()
    }

})