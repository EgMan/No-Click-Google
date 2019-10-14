const num_symbols = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
let rows = find_and_mark_rows();

Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
};

let selected_element = null;
function doc_keyUp(e) {
    if (e.keyCode == 27)
    {
        document.getElementsByClassName("gLFyf gsfi")[0].blur();
    }
    if (document.activeElement.nodeName == "INPUT")
    {
        return;
    }
    let numPressed = e.keyCode - 49;
    if (e.keyCode == 13 && selected_element != null)
    {
        selected_element.click();
    }
    if (numPressed == -1)
    {
        document.getElementsByClassName("gLFyf gsfi")[0].focus();
        document.getElementsByClassName("gLFyf gsfi")[0].select();
    }
    if (numPressed < 0 || numPressed > rows.length) {
        return;
    }
    if (selected_element != null) {
        selected_element.style.cssText = "";
    }
    if (selected_element == rows[numPressed]) {
        rows[numPressed].click();
    }
    selected_element = rows[numPressed];
    selected_element.style.cssText = "color: #00EE00";
    window.scrollTo(0, selected_element.documentOffsetTop() - (window.innerHeight / 2));
}
document.addEventListener('keyup', doc_keyUp, false);

//let rows = document.getElementsByClassName('LC20lb');

function find_and_mark_rows() {
    let rrows = document.getElementsByClassName('LC20lb');
    let filtered_rows = [];
    let spot = 0;
    Array.from(rrows).forEach(element => {
        if (element.closest(".gy6Qzb") == null) {
            filtered_rows.push(element);
            element.innerText = num_symbols[spot++] + " " + element.innerText;
        }
    });
    return filtered_rows;
}