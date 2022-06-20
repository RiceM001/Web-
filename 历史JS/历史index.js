let boxList = document.querySelectorAll('.box')

window.addEventListener('scroll',scrollLoad)

function scrollLoad(){
    let taggerValue=window.innerHeight * 0.8
   
    boxList.forEach(box=>{
       let boxTop=box.getBoundingClientRect().top
       if(boxTop <= taggerValue){
           box.classList.add('show-center')
       }else{
           box.classList.remove('show-center')
       }
    })
}