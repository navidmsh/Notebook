// let container2 = document.getElementsByClassName("container2")[0];
// let container3 = document.getElementsByClassName("container3")[0];
// let checkIcon = document.getElementById("check-icon");
// let xIcon = document.getElementById("x-icon");
// let i =0;

// xIcon.addEventListener("click",function(){
//     typeNote();
// })

// checkIcon.addEventListener("click",function(){
//     createNote();
// })

// function typeNote(){
//     if (container3.style.display == "none") {
//         container3.style.display = "block";
//     }
//     else{
//         container3.style.display = "none";
//     }
// }

// function createNote(){
//     let noteText = document.getElementById("note-text").value;
//     let node0 = document.createElement("div");
//     let node1 = document.createElement("h1");

//     node1.innerHTML = noteText;
//     node1.setAttribute("style","width:250px;height:250px;font-size:26px;padding:25px;margin-top:10px;overflow:hidden;box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")

//     node1.style.margin = margin();
//     node1.style.transform = rotate();
//     node1.style.background = color();

//     node0.appendChild(node1);

//     container2.insertAdjacentElement("beforeend",node0);

//     node0.addEventListener("mouseenter",function(){
//         node0.style.transform = "scale(1.1)";
//     })

//     node0.addEventListener("mouseleave",function(){
//         node0.style.transform = "scale(1)"
//     })

//     node0.addEventListener("dblclick",function(){
//         node0.remove();
//     })

//     document.getElementById("note-text").value = "";
// }

// function margin(){
//     let randomMargin = ["-5px","1px","5px","10px","15px","20px"]
//     return randomMargin[Math.ceil(Math.random()*randomMargin.length)]
// }

// function rotate(){
//     let randomRotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"]
//     return randomRotate[Math.floor(Math.random()*randomRotate.length)]
// }

// function color(){
//     let randomColor = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328",]
//     if(i > randomColor.length - 1){
//         i = 0
//     }
//     return randomColor[i++]
// }



// our oen way:)...................................

// اضافه کردن نوت به لیست نوت ها===done
// ذخیره نوت در حافظه===done
// حذف نوت از حافظه
// حذف نوت از لیست نوت ها
// نشان دادن تمامی نوت ها در زمان لود صفحه

let container1 = document.getElementsByClassName("container1")[0];
let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let formNote = document.getElementById("formNote")
let checkIcon = document.getElementById("check-icon");
let removeNote = document.querySelector('x-icon')
let noteText = document.getElementById('note-text')
let note = document.getElementsByClassName('note')
let noteList = document.getElementById('noteList')
// برای نمایش فرم نوت برای اضافه کردن نوت 
container1.addEventListener('click', formOfNote)

// showing form Note
function formOfNote() {
    container3.style.display = 'block'
}
// for add new note in page and LS
checkIcon.addEventListener('click', addNewNote)
// for remove note in list & LS
// noteList.addEventListener('click ', remove)

// template of not
function template(note, noteId) {
    return `
    <li data-id='${noteId}' class="note">
        <span>${note}</span>
        <a class='removeBtn' href="#">❌</a>
    </li>`
}

function addNoteInList(noteText, noteId) {
    container2.
    insertAdjacentHTML
        ('beforebegin', template(noteText, noteId))
}

function addNewNote(e) {
    e.preventDefault()
    let newNote = noteText.value
    let noteId = (Math.random() * 100000).toFixed()
    // add in list:
    addNoteInList(newNote, noteId)
    // add is LS:
    addNoteInLS(newNote, noteId)
    // value of trxtarea:
    formNote.reset()
    // hidde div:
    container3.style.display = "none"
}

function addNoteInLS(noteText, noteId) {
    // load in LS
    let noteLS = loadOfLS()
    // push notes in LS
    noteLS.push({
        text: noteText,
        ID: noteId
    })
    // save changes in LS
    saveNoteInLS(noteLS)

}
let click=addEventListener('click',function (e) {
    console.log(e.target.classList.contains('removeBtn'));
    })
    noteList.addEventListener('click ', function(event) {
        if (event.target.classList.contains('removeBtn')) {
            console.log(event.target);
        }
    })


// remove function
// function remove(event) {
//     if (event.target.classList.contains('removeBtn')) {
//         event.target.parentElement.remove()
//     }
    // 1-remove from list

// }


function loadOfLS() {
    let noteLS = JSON.parse(localStorage.getItem('Note'))

    if (noteLS == null) {
        localStorage.setItem('Note', '[]')
        let noteLS = JSON.parse(localStorage.getItem('Notes'))
    }
    return noteLS
}

function saveNoteInLS(note) {
    let noteLS = note
    noteLS = JSON.stringify(noteLS)
    localStorage.setItem('Note', noteLS)
}
// style:
// note.addEventListener("mouseenter", function () {
//     note.style.transform = "scale(2)";
// })

// note.addEventListener("mouseleave", function () {
//     note.style.transform = "scale(1)"
// })