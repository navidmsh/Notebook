let noteDiv, textarea, newDiv, input, button;

function newNote(colorName) {
    // find element and called x
    noteDiv =
        document.getElementById("notes");
    // create div and called w
    // newDiv
    //     =
    //     document.createElement("div");
    // newDiv.style = "background-color:#E4EE90 "
    // // create input and called h
    // input = document.createElement("input");
    // input.type = "text"
    // input.placeholder = 'title name'
    // input.style = "background-color:#E4EE90 "
    // // create textarea and called y
    // textarea =
    //     document.createElement("textarea");
    // textarea.placeholder = "type here";
    // textarea.style = "background-color:#E4EE90 "
    // // create button for delete and called b
    // button = document.createElement('button')
    // button.type = "button"
    // button.className = 'delete'
    // // add b to w
    // newDiv.appendChild(button)
    // // add h to w
    // newDiv.appendChild(input)
    // // add y to w
    // newDiv.appendChild(textarea)


    newDiv.innerHTML += ` <div>

    <input type="text" placeholder="title name">
    <textarea name="" placeholder="type here..."></textarea>


    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 6.90152L12.1695 6.31415L9.5 0.042572L6.8305 6.32363L0 6.90152L5.187 11.3826L3.629 18.0426L9.5 14.5089L15.371 18.0426L13.8225 11.3826L19 6.90152ZM9.5 12.7373L5.928 14.8878L6.878 10.8331L3.724 8.10468L7.885 7.74468L9.5 3.92678L11.1245 7.75415L15.2855 8.11415L12.1315 10.8426L13.0815 14.8973L9.5 12.7373Z"
            fill="#C9D940" />
    </svg>
    </svg>
    <svg class="pencil" fill="#414141" viewBox="-2.4 -2.4 28.80 28.80"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(4.92,4.92), scale(0.59)">
            <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ECECEC"
                strokewidth="0"></rect>
        </g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
            stroke-width="0.048"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM10,16,7,17l1-3,7-7,2,2Z"></path>
        </g>
    </svg>

</div>`
    // add w to x
    noteDiv.appendChild(newDiv)

    newDiv.classList.add(colorName)
    // console.log(noteDiv);
    // return noteDiv
    console.log(newDiv);

}










// let current_tasks = b;
// for (var i = 0; i < current_tasks.length; i++) {
//     current_tasks[i].onclick = function () {
//         this.parentNode.remove();
//     }
// }



function Delete() {
    let x, y;
    // find notes and called x
    x =
        document.getElementById("notes");
    // number of notes task called y
    y =
        x.childNodes.length;
    if (y > 0) {
        confirm('Are you sure?')
        x.removeChild(x.childNodes[0]);
    } else {
        alert("Your note is empty");
    }
}