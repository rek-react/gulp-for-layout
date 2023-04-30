export const initBurgerHeader = (burgerClass,menuClass)=> {
    const burger = document.querySelector(burgerClass)
    const menu = document.querySelector(menuClass)
    if(burger && menu){
        burger.addEventListener("click", ()=>{
            menu.classList.toggle("open")
            burger.classList.toggle("active")
        })
    }
}