//[Bài tập] 2. Từ điển
function lab_exercise2_fnt(){
    let enText = document.getElementById("lab_exercise2_en");
    let vnText = document.getElementById("lab_exercise2_vnese");

    let englishDict = ["car","bike","plane","train","boat"];
    let vnDict = ["ô tô","xe máy","máy bay","tàu","thuyền"];
    
    let enTextValue = enText.value;
    for(var arrayIndex in englishDict){
        if(englishDict[arrayIndex] == enTextValue){
            vnText.value = vnDict[arrayIndex];
        }
    }
}
// [exercise]Find max
function lab_exercise90_findmax_fnt(){
    let myText = document.getElementById("lab_exercise90_text");
    let myArray = [1,5,8,9,5,5,7,7,9];
    let maxNumber = 0;
    for(var arrayElement of myArray){
        if(arrayElement > maxNumber){
            maxNumber = arrayElement;
        }
    }
    for(var arrayIndex in myArray){
        if(myArray[arrayIndex] == maxNumber){
            myText.innerHTML += `Max number is : ${maxNumber} at position ${arrayIndex}` + "<br>";
        }
    }
}
//[Bài tập] 1. Sử dụng các hàm có sẵn của mảng
//Join()
function lab_exercise1_no1_fnt(){
    let myText = document.getElementById("lab_exercise1_no1_text");
    let myColor= ["Red","Green","White","Black"];
    myText.innerHTML += "<br>" + myColor.join();

}
//Insert (-) between even number
function lab_exercise1_no2_fnt(){
    let myInput = document.getElementById("lab_exercise1_no2_input");
    let myArray = myInput.value.split("");
    myInput.value = "";
    for(var arrayIndex in myArray){
        myInput.value += myArray[arrayIndex];
        if(myArray[arrayIndex]%2==0 && myArray[parseInt(arrayIndex)+1]%2==0){
            myInput.value += "-";
        } 
    }   
}
//Uppercase and Lowercase
function lab_exercise1_no3_fnt(){
    let myInput = document.getElementById("lab_exercise1_no3_input");
    let myOutput = document.getElementById("lab_exercise1_no3_output");
    let myArray = myInput.value.split("");//D,o,V,a,n,v,I,en
    // let arrray2 = "DoVanvIen".split("") 
    for(var arrayValue of myArray){
        if(arrayValue === arrayValue.toUpperCase()){
            //
            //D(true) d(false)                  D
        } else myOutput.value += arrayValue.toUpperCase();
        if(arrayValue === arrayValue.toLowerCase()){
            //
        } else myOutput.value += arrayValue.toLowerCase();
    }
}

// [Thực hành] 2. Đảo ngược các phần tử trong mảng
function home_exercise2_reverse_fnt() {
    let result = document.getElementById("home_exercise2_result");
    let originalArray = [4, 6, -30, 25, 143];
    let reverseArray = [];
    let text = ""
    for (let i = 0; i < originalArray.length; i++) {
        reverseArray[i] = originalArray[originalArray.length - 1 - i];
        text += `${reverseArray[i]}, `;
    }
    result.innerHTML = "Mảng đảo ngược : " + text;
}
// [Thực hành] 1. Tạo và thao tác với mảng
let home_exercise1_input_array = [];
function home_exercise1_add_fnt() {
    let inputElement = document.getElementById("home_exercise1_input");
    home_exercise1_input_array.push(inputElement.value);
    inputElement.value = "";
}
function home_exercise1_display_fnt() {
    let resultElement = document.getElementById("home_exercise1_result");
    for (let i = 0; i < home_exercise1_input_array.length; i++) {
        resultElement.innerHTML += `Element ${i} = ${home_exercise1_input_array[i]} <br>`
    }
}
