let avengers = [
 { 
name: "Thor Ragnarok",
Weapons:"Thunder hammer",
quote:"i'm only Alive because fate wants me alive",
Age: 354,
image:'thornew'
} ,
{ 
    name: "Black Widow",
    Weapons:"Electricshock Stick",
    quote:"You Get To Make Your Own Choices Now",
    Age: 34,
    image:'widownew'
    } ,
    { 
        name: "Hulk",
        Weapons:"Mass Strength Fighting",
        quote:"I eat dumbells for breakfast",
        Age: 44,
        image:'hulknew'
        } ,
        { 
            name: "Ironman",
            Weapons:"IronSuit",
            quote:"Sometimes you've gotta run before you can walk",
            Age:49,
            image:'ironnew'
            } ,
            { 
                name: "Captain America",
                Weapons:"Vibranuim Shield",
                quote:"i'm only Alive because fate wants me alive",
                Age: 354,
                image:'caphalf'
                } ,
                { 
                    name: "Hawkeye",
                    Weapons:"bow Arrow",
                    quote:"Don't Give Me Hope",
                    Age: 33,
                    image:'hawknew'
                    } 

]
console.log(avengers.length);

console.log(avengers[avengers.length - 1]);

for(let i =0; i < avengers.length; i++){
    console.log(avengers[i].name + 'br' + avengers[i].Age + avengers[i].Weapons + 'yusuf');
}

let studentSection = document.getElementById('avengers-crew'); 
let html = "";

avengers.forEach(g => {
    html += `
    <div class="col-sm-12 col-md-6 col-lg-4 ">
    <div class=" m-3">
     <div class="widow shadow">
       <div class="center" style="width: 100%;">
         <img class="card-img-top img-fluid" src="img/${g.image}.jpg" alt="Card image cap">
         <div class="card-body">
           <p class="card-text"><h2>${g.name}</h2>
             <p><b>Weapon</b>: ${g.Weapons}</p>
              <p><b>Best Quote</b>: ${g.quote} </p> 
              <p><b>Age</b>: ${g.Age}</p>
         </div>
       </div>
     </div>
    </div>
  </div>
    `
    console.log(g)

    studentSection.innerHTML = html
})

