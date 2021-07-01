/* PUT EVERYTHING IN THE <BODY> TAG INTO A CONST */
const body = document.getElementById('intoMenu').innerHTML;
/* FUNCTION TO CREATE AND SHOW THE HIDDEN MENU */
function showMenu(){
    const menu = document.getElementById('menu').innerHTML;
    document.getElementById('intoMenu').innerHTML = 
    `<div class="menu-hidden"><button onclick="closeMenu()"><i class="fas fa-times"></i></button>
    ${menu}</div>`
}
/* FUNCTION TO CLOSE THE MENU AND RETURN TO THE SAME MAIN PAGE */
function closeMenu(){
    document.getElementById('intoMenu').innerHTML = body
}