const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer") 
const inputEmojis = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")



//added eventListner to Add to End button to input emoji form input field 
pushBtn.addEventListener("click" , function(){
if (inputEmojis.value){
    myEmojis.push(inputEmojis.value)
    
        randerEmoji()
        
}

})
randerEmoji()
//rander function 
function randerEmoji(){


emojiContainer.innerHTML = " "

for (let i= 0 ; i< myEmojis.length ; i++){
    const span = document.createElement("span")
    span.innerHTML = myEmojis[i]
    emojiContainer.append(span)
// //emojiContainer.innerHTML +=`<span> ${myEmojis[i]} </span>` 
}    
}

//unshift btn
unshiftBtn.addEventListener("click" , function(){
if (inputEmojis.value){
    myEmojis.unshift(inputEmojis.value)
    inputEmojis.value = ""
    randerEmoji()       
} 

})
// pop button 
popBtn.addEventListener("click" , function(){
    
   
    myEmojis.pop(inputEmojis.value)
    inputEmojis.value = ""
    randerEmoji()       

    
    
})
//remove emoji from the end

shiftBtn.addEventListener("click" , function(){
    
    
    myEmojis.shift(inputEmojis.value)
    inputEmojis.value = ""
    randerEmoji()       

    
    
})









// 😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😆 😇 🙂 🙃 😉😆 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸