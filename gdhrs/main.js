

// const refresh = document.querySelector('.refresh');

// const handleRefresh = () => {
//     window.location.reload();
//     console.log("Loading...");
// }

// refresh.addEventListener("click", handleRefresh);


// function f1() {
// this.style.background = "orange"
// this.style.color = "blue"
// } 

// let p1 = document.querySelectorAll(".p1");
// for (let index = 0; index < p1.length; index++) {
// p1[index].onclick = f1;
    
// }

// function f2() {
// this.style.background = "aqua"
// this.style.color = "blue"
// } 
    
// let p2 = document.querySelectorAll(".p2");
// for (let index = 0; index < p2.length; index++) {
// p2[index].onclick = f2;
        
// }

// function f3() {
// this.style.background = "blue"
// this.style.color = "white"
// } 
        
// let p3 = document.querySelectorAll(".p3");
// for (let index = 0; index < p3.length; index++) {
// p3[index].onclick = f3;
            
// }

// function f4() {
// this.style.background = "red"
// this.style.color = "black"
// } 
            
// let p4 = document.querySelectorAll(".p4");
// for (let index = 0; index < p4.length; index++) {
// p4[index].onclick = f4;
                
// }


let people = [
    {
      name: "Said",
      age: 14,
      budget: 10000,
    },
    {
      name: "Azim",
      age: 16,
      budget: 50000,
    },
    {
      name: "Murat",
      age: 20,
      budget: 10,
    },
  ];





//map 

const SexPeople = people.map( person => {
  return `${person.name} (${person.age})`

} )
console.log(SexPeople);




//for 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    
}