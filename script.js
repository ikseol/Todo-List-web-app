let todos = JSON.parse(localStorage.getItem('todos')) || []; // 초기값 설정
renderTodo(); // 리스트 렌더링 함수 호출

function addTodo() { // 리스트에 할일 추가하는 함수
    let inputElem = document.querySelector('.js-todo-name').value;
    let todoListElem = document.querySelector('.js-todoList');
    document.querySelector('.js-todo-name').value = '';
    if (inputElem === '') {
        alert('입력 값이 없습니다!');
        return;
    }

    todos.push({name:inputElem, complete:false});
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodo()
}

function editTodo(index) { // 리스트 내부의 할일 수정
    let inputElem = prompt();
    if (inputElem === '' || inputElem === null) {
        alert('입력 값이 없습니다!');
        return;
    }
    todos[index].name = inputElem;
    todos[index].complete = false;

    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodo()
}

function deleteTodo(index) { // 리스트 내부의 할일 제거
    todos.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodo();
}

function complete(index) { // 리스트 내부의 할일 완료 여부 변경
    if ( todos[index].complete === false ) {
        todos[index].complete = true;
    } else {
        todos[index].complete = false;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodo();
}

function renderTodo() { // 리스트를 화면에 랜더링하는 함수
    let todosHTML = '';

    todos.forEach(function(item, index){
        todosHTML += `
        <p class="${item.complete ? "complete" : "notComplete"}">할 일 : ${item.name} | 완료여부 : ${item.complete ? "완료" : "미완료"}</p>
        <button class="js-complete-button" onclick="complete(${index})">${item.complete ? "취소" : "완료"}</button>
        <button class="js-edit-button" onclick="editTodo(${index})">수정</button>
        <button class="js-delete-button" onclick="deleteTodo(${index})">삭제</button>
        `;
    })

    document.querySelector('.js-todoList').innerHTML = todosHTML;
}

function handleKeyDown(event) { //엔터키를 눌렀을때 할일등록 되게 하는 함수
    if (event.key === "Enter") {  
        addTodo();
    }
}