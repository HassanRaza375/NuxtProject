export default defineNuxtPlugin((nuxtApp)=>{
    let evenNumbers = []
    nuxtApp.even = (maxNumber) =>{
        for(let i = 1; i <= maxNumber; i++){
            if(i % 2 === 0){
                evenNumbers.push(i)
            }
        }
       return evenNumbers
    }
})