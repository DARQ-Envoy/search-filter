const filter=document.querySelector("#filter");
const resultEl=document.querySelector("#result");
const listItem=[];
const bodyEl=document.querySelector('body');
console.log(bodyEl);
let imgEl
let userImage
const header=document.querySelector("header");




sourceData();

filter.addEventListener("input",(e)=>{
    filterUser(e.target.value)
})


async function sourceData(){
    const res=await fetch('https://randomuser.me/api?results=50');
 const { results }=await res.json();
    resultEl.innerHTML="";
    results.forEach(customer => {
    const item=document.createElement('li');
    listItem.push(item);
    item.innerHTML=`
    <img src="${customer.picture.large}" class="user-img" alt="${customer.name.first} picture">
    <div class="user-info">
    <h4>${customer.name.first} ${customer.name.last}</h4>
    <p>${customer.location.city},${customer.location.country}</p>
    </div>
    `
    resultEl.appendChild(item)

        userImage=document.querySelector(".user-img");
           console.log(userImage)
          imgEl=document.querySelector('img')
           console.log(imgEl)
    });
}




function filterUser(input){
    console.log(userImage)
    listItem.forEach(user=>{
        if(user.textContent.toLowerCase().includes(input.toLowerCase())){
            user.classList.remove('hide')
        }
        
        else{
            user.classList.add('hide')
        }
    
            
    })
    
}
// setTimeout(()=>{showPics()},10000)

// function showPics(){
//     console.log("hey")
//     listItem.forEach(user=>{
//         console.log("me")
//         user.addEventListener('click',e=>{
//             console.log(e.target)  
//             console.log(userImage) 
//             e.target.classList.add('Big-picture')  ;
//             e.target.classList.remove('user-img')
//                  })

//        user.addEventListener("dblclick",(e)=>{
//             e.target.classList.remove('Big-picture')
//            e.target.classList.add('user-img')
//             console.log("a")
//         })


//     })}









// const filterEl=document.querySelector("#filter");
// const result=document.querySelector("#result");
// const listItems=[];



// getData()
// filterEl.addEventListener("input",(e)=>filterUsers(e.target.value)
// )

// async function getData(){
// const res=await fetch('https://randomuser.me/api?results=50');
// const { results }=await res.json();
// // clear Results
// result.innerHTML='';
// console.log(results)
// results.forEach(user=>{
//     const li=document.createElement('li');
//     listItems.push(li);
//     li.innerHTML=`
//     <img src="${user.picture.large}"alt="${user.name.first}name">
//     <div class="user-info">
//     <h4 class="h4">${user.name.first} ${user.name.last}</h4>
//     <p>Location:${user.location.state},${user.location.country}</P>
//     </div>
//     `
//     result.appendChild(li)
// })
// }


// function filterUsers(input){
//        listItems.forEach(items=>{
//            if(items.textContent.toLowerCase().includes(input.toLowerCase())){
//               console.log(input) 
//                items.classList.remove('hide')
//            }
//            else{
//                items.classList.add('hide')
//            }
           
//        })
// }










// const items=["Apple","Banana","Mango","Cashew","coconut",["chair","Table","Foot Stool","Bed"]];
// items.forEach(fruit=>{
//     console.log("Good Fruit")
// })
// items[5].forEach(Funiture=>{console.log("DARQ Envoy understands the forEach method")})

//    result.innerHTML='';
//     results.forEach(user=>{
//     const li=document.createElement('li');
//     listItems.push(li);
//     li.innerHTML=`
//     <img>${user.picture.large}</img>
//     <div class="user-info">
//     <h4>${user.name.first} ${user.name.last}</h4>
//     <p>${user.location.state},${user.location.country}</p>
//     </div>
//     `;
   



// setTimeout(()=>{
    //     const heading4=result.querySelector(".h4");
    // console.log(heading4);
    // const head=heading4.textContent.toLowerCase();
    // console.log(head)
    // },3000)