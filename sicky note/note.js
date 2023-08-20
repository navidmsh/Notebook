
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
let removeNote = document.querySelector('#x-icon')
let noteText = document.getElementById('note-text')
let note = document.getElementsByClassName('note')
let noteList = document.getElementById('noteList')
let noteTitle = document.querySelector('.noteTitle')
// برای نمایش فرم نوت برای اضافه کردن نوت 
container1.addEventListener('click', formOfNote)

// showing form Note
function formOfNote() {
    container3.style.display = 'block'
}
// for add new note in page and LS
checkIcon.addEventListener('click', addNewNote)

removeNote.addEventListener('click', () => {
    container3.style.display = 'none'
})



// template of not
function template(title, note, noteId) {
    return `
    <li data-id='${noteId}' class="note">
        <h3>${title}</h3>
        <button class='removeBtn'>
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        </button>
        <span>${note}</span>
        
    </li>`
}

function addNoteInList(noteTitle, noteText, noteId) {
    noteList.
    insertAdjacentHTML
        ('afterbegin', template(noteTitle, noteText, noteId))
        let noteLi= document.querySelector('#noteList li')

        // margin for notes
        noteLi.style.margin=margin()
        // return for note
        noteLi.style.rotate=rotate()
        // colots for notes
        noteLi.style.backgroundColor=color()
}

function addNewNote(e) {
    e.preventDefault()
    let title = noteTitle.value
    let newNote = noteText.value
    let noteId = (Math.random() * 100000).toFixed()
    // add in list:
    addNoteInList(title, newNote, noteId)
    // add is LS:
    addNoteInLS(title, newNote, noteId)
    // value of trxtarea:
    formNote.reset()
    // hidde div:
    container3.style.display = "none"
}

function addNoteInLS(title, noteText, noteId) {
    // load in LS
    let noteLS = loadOfLS()
    // push notes in LS
    noteLS.push({
        title: title,
        text: noteText,
        ID: noteId
    })
    // save changes in LS
    saveNoteInLS(noteLS)

}


noteList.addEventListener('click', remove)

function remove(event) {
    // remove from list
    if (event.target.classList.contains('removeBtn')) {
        console.log(event);
        event.target.parentElement.remove()
    }
    // remove from LS
    let noteId = event.target.parentElement.getAttribute('data-id')
    removeFromLS(noteId)
}

function removeFromLS(Id) {
    let LsNote = loadOfLS()

    LsNote.forEach(
        function (eachNote, noteId) {
            if (Id == eachNote.ID) {
                LsNote.splice(noteId, 1)
            }
        });

    saveNoteInLS(LsNote);
}


container1.addEventListener('click', loadOfLS)

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
// margin for note
function margin(){
    let randomMargin = ["-5px","1px","5px","10px","15px","20px"]
    let random=Math.floor(Math.random() * randomMargin.length)
    console.log(randomMargin[random]);
    return randomMargin[random]
}
// rotation for note
function rotate(){
    let randomRotate = ["3deg","1deg","-1deg","-3deg","-5deg","-10deg"]
    let random=Math.floor(Math.random() * randomRotate.length)
    console.log(randomRotate[random]);
    return randomRotate[random]
}
// color for note

function color(){
    let i = 7
    let randomColor = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328",]
 let random=Math.floor(Math.random()*randomColor.length)
 return randomColor[random]
}