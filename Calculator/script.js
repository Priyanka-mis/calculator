function aapendToDisplay(num){
    var display= document.getElementById('inputbox')
    display.value += num
}

// clear for all number;
function clearInput(){
    var display= document.getElementById('inputbox')
    display.value = ''
}

//delete for one number;
function deleteOne(){
    var display = document.getElementById('inputbox')
    display.value=display.value.slice(0, -1)
}




//operations work when we click equal
let input = document.getElementById("inputbox")
let equalButton = document.getElementById("equal")

equalButton.addEventListener("click",
 function(){
    let result = eval(input.value)
    input.value=result
})


