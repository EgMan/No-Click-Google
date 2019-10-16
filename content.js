const num_symbols = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
let rows = find_and_mark_rows();

function find_and_mark_rows() 
{
    let rrows = document.getElementsByClassName('LC20lb');
    let filtered_rows = [];
    let spot = 0;
    Array.from(rrows).forEach(element => 
        {
            if (element.closest(".gy6Qzb") == null)
            {
                filtered_rows.push(element);
                element.innerText = num_symbols[spot++] + " " + element.innerText;
            }
    });
    return filtered_rows;
}

let selected_element = null;
function doc_keyUp(e)
{
    //Remove focus from search box when Esc is pressed
    if (enums.keyboard.ESCAPE == e.keyCode)
    {
        search_box = document.getElementsByClassName("gLFyf gsfi")[0];
        search_box.blur();
        return;
    }
    //Disable key actions below if we're writing into an input field
    if (document.activeElement.nodeName == "INPUT")
    {
        return;
    }
    //If enter is pressed and we have a selected link, we follow it
    if (enums.keyboard.ENTER  == e.keyCode && selected_element != null)
    {
        selected_element.click();
        return;
    }
    //Pressing zero sends focus to the search box
    if (enums.keyboard.KEY_0 == e.keyCode)
    {
        search_box = document.getElementsByClassName("gLFyf gsfi")[0];
        search_box.select();
        search_box.focus();
        return;
    }
    //Handle number inputs
    let numPressed = e.keyCode - 49;
    if (numPressed >= 0 && numPressed < rows.length)
    {
        if (selected_element != null)
        {
            selected_element.style.cssText = "";
        }
        if (selected_element == rows[numPressed])
        {
            rows[numPressed].click();
        }
        selected_element = rows[numPressed];
        selected_element.style.cssText = "color: #00EE00";
        window.scrollTo(0, selected_element.documentOffsetTop() - (window.innerHeight / 2));
    }
}
document.addEventListener('keyup', doc_keyUp, false);

Element.prototype.documentOffsetTop = function ()
{
    return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
};

var enums = {};   
enums.keyboard = {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      INSERT: 45,
      DELETE: 46,
      KEY_0: 48,
      KEY_1: 49,
      KEY_2: 50,
      KEY_3: 51,
      KEY_4: 52,
      KEY_5: 53,
      KEY_6: 54,
      KEY_7: 55,
      KEY_8: 56,
      KEY_9: 57,
      KEY_A: 65,
      KEY_B: 66,
      KEY_C: 67,
      KEY_D: 68,
      KEY_E: 69,
      KEY_F: 70,
      KEY_G: 71,
      KEY_H: 72,
      KEY_I: 73,
      KEY_J: 74,
      KEY_K: 75,
      KEY_L: 76,
      KEY_M: 77,
      KEY_N: 78,
      KEY_O: 79,
      KEY_P: 80,
      KEY_Q: 81,
      KEY_R: 82,
      KEY_S: 83,
      KEY_T: 84,
      KEY_U: 85,
      KEY_V: 86,
      KEY_W: 87,
      KEY_X: 88,
      KEY_Y: 89,
      KEY_Z: 90
    };