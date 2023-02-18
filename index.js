const valuePali= document.getElementById("valuePali")
const btnPali = document.getElementById("btnPali")
const rpta= document.getElementById('rpta')
const deletPali = document.getElementById('deletPali') 
//event key Enter
valuePali.addEventListener('keypress', (e)=>{
    let word= valuePali.value
    if(e.key === "Enter"){
        rpta.innerHTML=(wordPalindronoma(word))
    }
})

//event clean 
deletPali.addEventListener("click", ()=>{
    rpta.innerHTML=""
})

//event Mouse Click
btnPali.addEventListener("click", function (){
    let word = valuePali.value
    rpta.innerHTML=(wordPalindronoma(word))
})

//firsth function
// function wordReverse(word){
//     let words = word.toLowerCase() 
//     let worrdArray= words.split("")
//     let wordRev = worrdArray.reverse()
//     let wordJoin= wordRev.join("")

//     if(words === wordJoin){
//         rpta.classList.remove('red')
//         rpta.classList.add('green')
//         valuePali.value=""
//         valuePali.focus()
//         return `Great!!!, the word ${words} is palindronoma`
//     }
//     else if(words !== wordJoin){
//         rpta.classList.remove('green')
//         rpta.classList.add('red')
//         valuePali.value=""
//         valuePali.focus()
//         return `OHH, no!!!, the word ${words} isn't  palindronoma , Try again!!`
//     }

// }

//Second function 
function wordPalindronoma(word){
    let words = ""

    for( let i = word.length-1; i >=0; i-- ){
        words+=word[i]
    }
    if(word === words){
        rpta.classList.remove('red')
        rpta.classList.add('green')
        valuePali.value=""
        valuePali.focus()
        return `Great!!!, the word ${word} is palindronoma`
    }
    else if(word !== words){
        rpta.classList.remove('green')
        rpta.classList.add('red')
        valuePali.value=""
        valuePali.focus()
        return `OHH, no!!!, the word ${word} isn't  palindronoma , Try again!!`
    }
}
