const text = document.querySelector('.text');
const add = document.querySelector('.add');
const addList = document.querySelector('.addList');
const end = document.querySelector('.end');

const input = document.createElement("input");
input.setAttribute("type", "checkbox");
const span = document.createElement('span');
const del = document.createElement('button');
del.textContent = '삭제';

// 아이템 추가할 때 로컬 스토리지에 저장하는 함수
function saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}

// 로컬 스토리지에서 아이템 불러오기
let storedItems = JSON.parse(localStorage.getItem('items')) || [];
const items = []

if (storedItems.length > 0) {
    storedItems.forEach(item => {
        const list = document.createElement('li');
        addList.append(list);

        const itemInput = input.cloneNode(true);
        const itemSpan = span.cloneNode(true);
        const itemDel = del.cloneNode(true);

        list.append(itemInput, itemSpan, itemDel);
        itemSpan.textContent = item.text;
        itemInput.checked = item.checked;
        items.push({ input: itemInput, span: itemSpan, del: itemDel, text: item.text, checked: item.checked });
        cancel(itemInput, itemDel);
    });

    end.style.display = 'block';
}


add.addEventListener('click', () => {
    const textValue = text.value.trim()

    const list = document.createElement('li')
    addList.append(list)

    const itemInput = input.cloneNode(true)
    const itemSpan= span.cloneNode(true)
    const itemDel = del.cloneNode(true)
    
    list.append(itemInput, itemSpan, itemDel)
    itemSpan.textContent = textValue

    itemInput.checked = false; // 새로운 아이템이므로 항상 checked는 false로 초기화

    //각 아이템 객체로저장 이벤트리스너 등록
    const newItem = {input: itemInput, span: itemSpan, del: itemDel, text: textValue, checked: false };
    items.push(newItem);
    cancel(itemInput, itemDel);
    end.style.display = "block";
    text.value = ''
    // 로컬 스토리지에 아이템 추가 후 저장
    storedItems.push(newItem);
    saveToLocalStorage();
})


// 아이템 삭제 및 체크박스 이벤트 처리
function cancel(input, del) {
    input.addEventListener('click', () => {
        const textCont = input.nextElementSibling.textContent;
        if (input.checked) {
            input.nextElementSibling.innerHTML = `<del>${textCont}</del>`;
        } else {
            input.nextElementSibling.innerHTML = textCont;
        }
    });

    del.addEventListener('click', () => {
        const result = confirm('삭제하시겠습니까?');
        if (result) {
            const index = items.findIndex(item => item.del === del);
            if (index !== -1) {
                items.splice(index, 1);
                saveToLocalStorage();
                del.parentElement.remove();

                // 추가된 부분: 로컬 스토리지에서도 아이템 제거 후 저장
                storedItems = storedItems.filter(item => item.del !== del);
                saveToLocalStorage();
            }
        }
    });
}

end.addEventListener('click', () => {
    const allResult = confirm('전체 삭제하시겠습니까?');
    if (allResult) {
        addList.innerHTML = '';
        end.style.display = 'none';

        // 로컬 스토리지 아이템 제거 후 저장
        // storedItems = [];
        // saveToLocalStorage();
        localStorage.removeItem('items');
    }
});
