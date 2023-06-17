//varibles
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
//let person=document.querySelector('.person');
let person=Array.from(document.getElementsByClassName('person'));

const quotes=[
    {
        quote:`"vinay"`,
        person:`"king"`
    },
    {
        quote:`"margam"`,
        person:`"mahatma"`
    }, {
        quote:`"margam"`,
        person:`"abdul"`
    }, {
        quote:`"margam"`,
        person:`"krishna"`
    },
];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});
person.forEach((e)=>{e.addEventListener('click',()=>{
    e.innerText="hello"
})})
console.log(quote+ "it is quote");
console.log(btn+ "it is btn");
console.log(person+ "it is person");