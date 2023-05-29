// let test=document.getElementById('boxs').style.display='none'
let x, y, w, h, b;

function yellow() {
    // find element and called x
    x =
        document.getElementById("notes");
    // create div and called w
    w =
        document.createElement("div");
    w.style = "background-color:#E4EE90 "
    // create input and called h
    h = document.createElement("input");
    h.type = "text"
    h.placeholder = 'title name'
    h.style = "background-color:#E4EE90 "
    // create textarea and called y
    y =
        document.createElement("textarea");
    y.placeholder = "type here";
    y.style = "background-color:#E4EE90 "
    // create button for delete and called b
    b = document.createElement('button')
    b.type = "button"
    b.className='delete'
    // add b to w
    w.appendChild(b)
    // add h to w
    w.appendChild(h)
    // add y to w
    w.appendChild(y)
    // add w to x
    x.appendChild(w)
    return x

}

function blue() {
    // find element and called x
    x =
        document.getElementById("notes");
    // create div and called w
    w =
        document.createElement("div");
    w.style = "background-color:#01D3FF "
    // create input and called h
    h = document.createElement("input");
    h.placeholder = 'title name'
    h.style = "background-color:#01D3FF "
    // create textarea and called y
    y =
        document.createElement("textarea");
    y.placeholder = "type here";
    y.style = "background-color:#01D3FF "
    // create button for delete and called b
    b = document.createElement('button')
    b.type = "button"
    b.className='delete'
    // add b to w
    w.appendChild(b)
    // add h to w
    w.appendChild(h)
    // add y to w
    w.appendChild(y)
    // add w to x
    x.appendChild(w)
return x

}

function red() {

    // find element and called x
    x =
        document.getElementById("notes");
    // create div and called w
    w =
        document.createElement("div");
    w.style = "background-color:#FF9B73 "
    // create input and called h
    h = document.createElement("input");
    h.placeholder = 'title name'
    h.style = "background-color:#FF9B73 "
    // create textarea and called y
    y =
        document.createElement("textarea");
    y.placeholder = "type here";
    y.style = "background-color:#FF9B73 "
    // create button for delete and called b
    b = document.createElement('button')
    b.type = "button"
    b.className='delete'
    // add b to w
    w.appendChild(b)
    // add h to w
    w.appendChild(h)
    // add y to w
    w.appendChild(y)
    // add w to x
    x.appendChild(w)
return x
}

function orange() {

    // find element and called x
    x =
        document.getElementById("notes");
    // create div and called w
    w =
        document.createElement("div");
    w.style = "background-color:#FFC972 "
    // create input and called h
    h = document.createElement("input");
    h.placeholder = 'title name'
    h.style = "background-color:#FFC972 "
    // create textarea and called y
    y =
        document.createElement("textarea");
    y.placeholder = "type here";
    y.style = "background-color:#FFC972 "
    // create button for delete and called b
    b = document.createElement('button')
    b.type = "button"
     b.className='delete'
    // add b to w
    w.appendChild(b)
    // add h to w
    w.appendChild(h)
    // add y to w
    w.appendChild(y)
    // add w to x
    x.appendChild(w)
    return x
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