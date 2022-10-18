const names= document.querySelectorAll('.name');
const events =document.querySelectorAll('.event');

console.log(names)
names.forEach(all=>{
    all.addEventListener('mouseover',()=>{
        
        for (let current of names) {
            current.classList.remove('name-and-event-style');
          }
          all.classList.add('name-and-event-style');
           
    })
})
events.forEach(all=>{
    all.addEventListener('mouseover',()=>{
        
        for (let current of events) {
            current.classList.remove('name-and-event-style');
          }
          all.classList.add('name-and-event-style');
           
    })
})
