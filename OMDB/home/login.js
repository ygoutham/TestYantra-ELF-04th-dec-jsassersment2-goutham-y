var flag = 0;

const form = document.querySelector('form');
// const ul = document.querySelector('ul');
 const ul = document.querySelector('table');
const button = document.querySelector('button');
const input = document.getElementById('item');

const input1 = document.getElementById('item1');
const input2 = document.getElementById('item2');
const input3 = document.getElementById('item3');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


let userEle = document.forms['loginForm']['username']
let phoneEle = document.forms['loginForm']['phone']
let ageEle = document.forms['loginForm']['age']
let emailEle = document.forms['loginForm']['email']


const liMaker = (text) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    
    td.textContent = text;
    tr.appendChild(td);
    ul.appendChild(tr);

}


function validateForm() {

    const input = document.getElementById('item');

    const input1 = document.getElementById('item1');
    const input2 = document.getElementById('item2');
    const input3 = document.getElementById('item3');
    check();
    console.log("flag : ",flag)
    
    if(flag == 1){
        return;
    }

    itemsArray.push(input.value);
    itemsArray.push(input1.value);
    itemsArray.push(input2.value);
    itemsArray.push(input3.value);

    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";

    liMaker(input1.value);
    input1.value = "";

    liMaker(input2.value);
    input2.value = "";

    liMaker(input3.value);
    input3.value = "";

}


console.log("itemsArray : ", itemsArray)
data.forEach((item) => {
    console.log("item : ", item)
    liMaker(item);
});

const clear = document.getElementById("cl");
clear.addEventListener('click', function () {
    localStorage.clear();
    ul.innerHTML = ""
    itemsArray = [];
})


function check() {

    if (userEle.value.trim().length == " " || userEle.value.trim().length < 3) {
        let nEle = document.getElementById("test1")
        nEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let nEle = document.getElementById("test1")
        nEle.style.display = "none"
        flag = 0;
    }

    if (ageEle.value.trim() < 1 || ageEle.value.trim() > 140) {

        let aEle = document.getElementById("test2")
        aEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let aEle = document.getElementById("test2")
        aEle.style.display = "none"
        flag = 0;

    }

    var emailID = emailEle.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");


    if (atpos < 1 || (dotpos - atpos < 2)) {
        let eEle = document.getElementById("test3")
        eEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let eEle = document.getElementById("test3")
        eEle.style.display = "none"
        flag = 0;

    }

    if (phoneEle.value.trim().length !== 10) {
        let pEle = document.getElementById("test4")
        pEle.style.display = "block"
        flag = 1;
        return flag

    } else {
        let pEle = document.getElementById("test4")
        pEle.style.display = "none";
        flag = 0;

    }
        
      return flag

}