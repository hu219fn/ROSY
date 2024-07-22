let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
nav1.style.display = 'block';
nav2.style.display = 'none';

let footer1 = document.getElementById('footer1');
let footer2 = document.getElementById('footer2');
footer1.style.display = 'grid';
footer2.style.display = 'none';

try {
    let en = document.getElementById('en');
    let ar = document.getElementById('ar');
    en.style.display = 'block';
    ar.style.display = 'none';
}catch(err){
    console.log('0');
}
try {
    let header = document.getElementById('header');
    header.style.direction = 'ltr'
}catch(err){
    console.log('');
}
try {
    let en1 = document.getElementById('en1');
    let ar1 = document.getElementById('ar1');
    en1.style.display = 'block';
    ar1.style.display = 'none';
}catch(err){
    console.log('');
}
try {
    let ad1 = document.getElementById('ad1');
    let ad2 = document.getElementById('ad2');
    ad1.style.display = 'block';
    ad2.style.display = 'none';
}catch(err){
    console.log('');
}
try {
    let en2 = document.getElementById('en2');
    let ar2 = document.getElementById('ar2');
    en2.style.display = 'block';
    ar2.style.display = 'none';
}catch(err){
    console.log('');
}
try {
    let en3 = document.getElementById('en3');
    let ar3 = document.getElementById('ar3');
    en3.style.display = 'block';
    ar3.style.display = 'none';
}catch(err){
    console.log('');
}
try {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    input1.style.display = 'flex';
    input2.style.display = 'none';
}catch(err){
    console.log('');
}

function change_language() {
    if (footer1.style.display == 'grid') {
        try{
            let en = document.getElementById('en');
            let ar = document.getElementById('ar');
            en.style.display = 'none';
            ar.style.display = 'block';
        }
        catch(err){
            console.log('');
        }
        try{
            let footer1 = document.getElementById('footer1');
            let footer2 = document.getElementById('footer2');
            footer1.style.display = 'none';
            footer2.style.display = 'grid';
        }
        catch(err){
            console.log('');
        }
        try{
            let nav1 = document.getElementById('nav1');
            let nav2 = document.getElementById('nav2');
            nav1.style.display = 'none';
            nav2.style.display = 'block';
        }
        catch(err){
            console.log('');
        }
        try{
            let input1 = document.getElementById('input1');
            let input2 = document.getElementById('input2');
            input1.style.display = 'none';
            input2.style.display = 'flex';
        }
        catch(err){
            console.log('');
        }
        try{
            let en1 = document.getElementById('en1');
            let ar1 = document.getElementById('ar1');
            en1.style.display = 'none';
            ar1.style.display = 'block';
        }
        catch(err){
            console.log('');
        }
        try {
            let header = document.getElementById('header');
            header.style.direction = 'rtl'
        }catch(err){
            console.log('');
        }
        try{
            let en2 = document.getElementById('en2');
            let ar2 = document.getElementById('ar2');
            en2.style.display = 'none';
            ar2.style.display = 'block';
        }
        catch(err){
            console.log('');
        }
        try {
            let en3 = document.getElementById('en3');
            let ar3 = document.getElementById('ar3');
            en3.style.display = 'none';
            ar3.style.display = 'block';
        }catch(err){
            console.log('');
        }
        try {
            let ad1 = document.getElementById('ad1');
            let ad2 = document.getElementById('ad2');
            ad1.style.display = 'none';
            ad2.style.display = 'block';
        }catch(err){
            console.log('');
        }
    }else {
        try{
            let en = document.getElementById('en');
            let ar = document.getElementById('ar');
            en.style.display = 'block';
            ar.style.display = 'none';
        }
        catch(err){
            console.log('');
        }
        try{
            let footer1 = document.getElementById('footer1');
            let footer2 = document.getElementById('footer2');
            footer1.style.display = 'grid';
            footer2.style.display = 'none';
        }
        catch(err){
            console.log('');
        }
        try{
            let nav1 = document.getElementById('nav1');
            let nav2 = document.getElementById('nav2');
            nav1.style.display = 'block';
            nav2.style.display = 'none';
        }
        catch(err){
            console.log('');
        }
        try{
            let input1 = document.getElementById('input1');
            let input2 = document.getElementById('input2');
            input1.style.display = 'flex';
            input2.style.display = 'none';
        }
        catch(err){
            console.log('');
        }
        try {
            let en1 = document.getElementById('en1');
            let ar1 = document.getElementById('ar1');
            en1.style.display = 'block';
            ar1.style.display = 'none';
        }catch(err){
            console.log('');
        }
        try {
            let header = document.getElementById('header');
            header.style.direction = 'ltr'
        }catch(err){
            console.log('');
        }
        try{
            let en2 = document.getElementById('en2');
            let ar2 = document.getElementById('ar2');
            en2.style.display = 'block';
            ar2.style.display = 'none';
        }
        catch(err){
            console.log('');
        }
        try {
            let en3 = document.getElementById('en3');
            let ar3 = document.getElementById('ar3');
            en3.style.display = 'block';
            ar3.style.display = 'none';
        }catch(err){
            console.log('');
        }
        try {
            let ad1 = document.getElementById('ad1');
            let ad2 = document.getElementById('ad2');
            ad1.style.display = 'block';
            ad2.style.display = 'none';
        }catch(err){
            console.log('');
        }
    }
}
///////
let menu1 = document.getElementById('menu1');
let ul1 = document.getElementById('ul1');
menu1.onclick = ()=>{
    if (ul1.style.display == 'block'){
        ul1.style.display = 'none';
    }else{
        ul1.style.display = 'block';
    }
}

let menu2 = document.getElementById('menu2');
let ul2 = document.getElementById('ul2');
menu2.onclick = ()=>{
    if (ul2.style.display == 'block'){
        ul2.style.display = 'none';
    }else{
        ul2.style.display = 'block';
    }
}
/////
let copy1 = document.getElementById('copy1');
let copy2 = document.getElementById('copy2');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

copy1.onclick = ()=>{
    let text = copy1.innerHTML;
    navigator.clipboard.writeText(text);
        p1.style.display = 'inline';
    setTimeout(()=>{
        p1.style.display = 'none';
    }, 1000)
}
copy2.onclick = ()=>{
    let text = copy1.innerHTML;
    navigator.clipboard.writeText(text);
        p2.style.display = 'inline';
    setTimeout(()=>{
        p2.style.display = 'none';
    }, 1000)
}
////
let btns = document.getElementById('btns');
let ul_btn = document.getElementById('ul-btn');
btns.onclick = ()=>{
    if (ul_btn.style.display == 'block'){
        ul_btn.style.display = 'none';
    }else{
        ul_btn.style.display = 'block';
    }
}
let btns1 = document.getElementById('btns1');
let ul_btn1 = document.getElementById('ul-btn1');
btns1.onclick = ()=>{
    if (ul_btn1.style.display == 'block'){
        ul_btn1.style.display = 'none';
    }else{
        ul_btn1.style.display = 'block';
    }
}
let btns2 = document.getElementById('btns2');
let ul_btn2 = document.getElementById('ul-btn2');
btns2.onclick = ()=>{
    if (ul_btn2.style.display == 'block'){
        ul_btn2.style.display = 'none';
    }else{
        ul_btn2.style.display = 'block';
    }
}
let btns3 = document.getElementById('btns3');
let ul_btn3 = document.getElementById('ul-btn3');
btns3.onclick = ()=>{
    if (ul_btn3.style.display == 'block'){
        ul_btn3.style.display = 'none';
    }else{
        ul_btn3.style.display = 'block';
    }
}

//////

function plus(){
    let num = document.getElementById('count');
    let num1 = document.getElementById('count1');
    var number = +num.value;
    num.value = number + 1;
    num1.value = number + 1;
}
function minus(){
    let num = document.getElementById('count');
    let num1 = document.getElementById('count1');
    var number = +num.value;
    if(number > 1) {
        num.value = number - 1;
        num1.value = number - 1;
    }
}

/////

try {
    let categories = document.getElementById('categories');
    let ul_categories = document.getElementById('ul-categories');
    ul_categories.style.display = 'none';
    categories.onclick = ()=>{
        if (ul_categories.style.display == 'block'){
            ul_categories.style.display = 'none';
        }else{
            ul_categories.style.display = 'block';
        }
    }
}catch(err){
    console.log('');
}
try{
    let categories1 = document.getElementById('categories1');
    let ul_categories1 = document.getElementById('ul-categories1');
    ul_categories1.style.display = 'none';
    categories1.onclick = ()=>{
        if (ul_categories1.style.display == 'block'){
            ul_categories1.style.display = 'none';
        }else{
            ul_categories1.style.display = 'block';
        }
    }
}catch(err){
    console.log('');
}
////
try {
    let productsBTN = document.getElementById('productsBTN');
    let usersBTN = document.getElementById('usersBTN');
    let products = document.getElementById('products');
    let users = document.getElementById('users');

    products.style.display = 'block';
    users.style.display = 'none';
    productsBTN.style.borderBottom = '5px solid #edc967';

    productsBTN.onclick = ()=>{
        products.style.display = 'block';
        users.style.display = 'none';
        usersBTN.style.borderBottom = 'none';
        productsBTN.style.borderBottom = '5px solid #edc967';
    }
    usersBTN.onclick = ()=>{
        users.style.display = 'block';
        products.style.display = 'none';
        productsBTN.style.borderBottom = 'none';
        usersBTN.style.borderBottom = '5px solid #edc967';
    }
}catch(err){
    console.log('1');
}
try {
    let productsBTN = document.getElementById('productsBTN1');
    let usersBTN = document.getElementById('usersBTN1');
    let products = document.getElementById('products1');
    let users = document.getElementById('users1');

    products.style.display = 'block';
    users.style.display = 'none';
    productsBTN.style.borderBottom = '5px solid #edc967';

    productsBTN.onclick = ()=>{
        products.style.display = 'block';
        users.style.display = 'none';
        usersBTN.style.borderBottom = 'none';
        productsBTN.style.borderBottom = '5px solid #edc967';
    }
    usersBTN.onclick = ()=>{
        users.style.display = 'block';
        products.style.display = 'none';
        productsBTN.style.borderBottom = 'none';
        usersBTN.style.borderBottom = '5px solid #edc967';
    }
}catch(err){
    console.log('1');
}
try {
    let productsBTN0 = document.getElementById('productsBTN0');
    let usersBTN0 = document.getElementById('usersBTN0');
    let products0 = document.getElementById('products0');
    let users0 = document.getElementById('users0');

    products0.style.display = 'none';
    users0.style.display = 'block';
    usersBTN0.style.borderBottom = '5px solid #edc967';

    productsBTN0.onclick = ()=>{
        products0.style.display = 'block';
        users0.style.display = 'none';
        usersBTN0.style.borderBottom = 'none';
        productsBTN0.style.borderBottom = '5px solid #edc967';
    }
    usersBTN0.onclick = ()=>{
        users0.style.display = 'block';
        products0.style.display = 'none';
        productsBTN0.style.borderBottom = 'none';
        usersBTN0.style.borderBottom = '5px solid #edc967';
    }
}catch(TypeError){
    console.log('2');
}
try {
    let productsBTN0 = document.getElementById('productsBTN01');
    let usersBTN0 = document.getElementById('usersBTN01');
    let products0 = document.getElementById('products01');
    let users0 = document.getElementById('users01');

    products0.style.display = 'none';
    users0.style.display = 'block';
    usersBTN0.style.borderBottom = '5px solid #edc967';

    productsBTN0.onclick = ()=>{
        products0.style.display = 'block';
        users0.style.display = 'none';
        usersBTN0.style.borderBottom = 'none';
        productsBTN0.style.borderBottom = '5px solid #edc967';
    }
    usersBTN0.onclick = ()=>{
        users0.style.display = 'block';
        products0.style.display = 'none';
        productsBTN0.style.borderBottom = 'none';
        usersBTN0.style.borderBottom = '5px solid #edc967';
    }
}catch(TypeError){
    console.log('2');
}
try {
    let time1 = [...document.getElementsByClassName('time1')];
    let result = 0;
    time1.forEach(order=>
        result += +order.innerHTML
    )
    document.getElementById('total').innerHTML = result + ' IRQ';
}catch {
    console.log('');
}
try {
    let time2 = [...document.getElementsByClassName('time2')];
    let result1 = 0;
    time2.forEach(order1=>
        result1 += +order1.innerHTML
    )
    document.getElementById('total1').innerHTML = result1 + ' IRQ';
}catch {
    console.log('');
}//
try {
    let time1 = [...document.getElementsByClassName('time1')];
    let result = 0;
    time1.forEach(order=>
        result += +order.innerHTML
    )
    document.getElementById('total').innerHTML = result + ' IRQ';
}catch {
    console.log('');
}
try {
    let time2 = [...document.getElementsByClassName('time2')];
    let result1 = 0;
    time2.forEach(order1=>
        result1 += +order1.innerHTML
    )
    document.getElementById('total1').innerHTML = result1 + ' IRQ';
}catch {
    console.log('');
}
try {
    let time3 = [...document.getElementsByClassName('time3')];
    let result3 = 0;
    time3.forEach(order3=>
        result3 += +order3.innerHTML
    )
    document.getElementById('total3').innerHTML = result3 + ' IRQ';
}catch {
    console.log('');
}
try {
    let time4 = [...document.getElementsByClassName('time4')];
    let result4 = 0;
    time4.forEach(order1=>
        result4 += +order1.innerHTML
    )
    document.getElementById('total4').innerHTML = result4 + ' IRQ';
}catch {
    console.log('');
}
///
try {
    let copy = [...document.getElementsByClassName('copy')];
    copy.forEach(btn=>{
        btn.onclick = ()=>{
            let text = btn.value;
            navigator.clipboard.writeText(text)
        }
    })
}catch {
    console.log('');
}
try {
    let ad1 = document.getElementById('ad1');
    let ad2 = document.getElementById('ad2');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    btn1.onclick = ()=>{
        ad1.style.display = 'none'
    }
    btn2.onclick = ()=>{
        ad2.style.display = 'none'
    }
}catch {
    console.log('');
}