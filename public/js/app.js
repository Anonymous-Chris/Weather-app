

console.log('client side js file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:5000/weather?address=!').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

const weatherForm=document.querySelector('form')
const search =document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent=''
// messageTwo.textContent=''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent='Loading..'
    messageTwo.textContent=''

  //  fetch('http://localhost:5000/weather?address=' + location).then((response)=>{
    fetch('/weather?address=' + location).then((response)=>{  
     response.json().then((data)=>{

        if(data.error){
            messageOne.textContent = data.error
        }
        else{
        messageOne.textContent=(data.location)
            messageTwo.textContent=`The temp is ${data.forecast.temperature} and the visibility is ${data.forecast.vis}`
        }
       
        
    })
})

})