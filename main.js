const notes = document.querySelector('.notes');
const btnAdd = document.querySelector('.note-add');
btnAdd.addEventListener('click', onBtnClick)
function creatNote(title,text) {
    const notEl = document.createElement('div');
    notEl.classList.add('note');
    notEl.innerHTML=` <div class="note-header">
      <p id="note-title">${title}</p>
      <textarea id="note-title-input" class="hidden" placeholder="Введите заголовок">${title}</textarea>
      <div>
        <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <p id="note-text">${text}</p>
    <textarea id="note-textarea" class="hidden" placeholder="Введите текст">${text}</textarea>`
    const deletebtn = notEl.querySelector('.note-delete');
    const editBtn = notEl.querySelector('.note-edit');
    const titlEl= notEl.querySelector('#note-title');
    const textEl = notEl.querySelector('#note-text');
    const titleInput = notEl.querySelector('#note-title-input');
    const textInput = notEl.querySelector('#note-textarea');
    deletebtn.addEventListener('click', (e) => {
        notEl.remove();
    })
    titleInput.addEventListener('input', (e) => {
       titlEl.innerText=e.target.value 
    })
    textInput.addEventListener('input', (e) => {
        textEl.innerText=e.target.value 
    })
    editBtn.addEventListener('click', (event) => {
        titlEl.classList.toggle('hidden');
        textEl.classList.toggle('hidden');
        titleInput.classList.toggle('hidden');
        textInput.classList.toggle('hidden');
       
    })
    return notEl;
}
function onBtnClick() {
    const el = creatNote("Title and Text");
    notes.appendChild(el)
}

