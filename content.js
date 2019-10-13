Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

let selected_element = null;
function doc_keyUp(e) {
    console.log(e.keyCode);
    let numPressed = e.keyCode - 49;
    if (numPressed < 0 || numPressed > rows.length) {
        return;
    }
    if (selected_element != null) {
        selected_element.style.cssText = "";
    }
    if (selected_element == rows[numPressed])
    {
        rows[numPressed].click();
    }
    selected_element = rows[numPressed];
    selected_element.style.cssText = "color: #FF0000";
    window.scrollTo( 0, selected_element.documentOffsetTop() - (window.innerHeight / 2 ));
}
document.addEventListener('keyup', doc_keyUp, false);

let spot = 0;
const num_symbols = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
let rows = document.getElementsByClassName('LC20lb');
Array.from(rows).forEach(element => {
    //alert(element.innerTEXT);
    console.log(element);
    element.innerText = num_symbols[spot++] + element.innerText;
});
