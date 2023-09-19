const text = document.querySelector('.text')
const add = document.querySelector('.add')
const addList = document.querySelector('.addList')
const end = document.querySelector('.allDel')

const input = document.createElement("input")
input.setAttribute("type", "checkbox")
const label = document.createElement('label')
const del = document.createElement('button')
del.className = 'selDel'
del.textContent = '삭제'

// 아이템 추가할 때 로컬 스토리지 저장하는 함수
function saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items))
}

// 아이템 불러오기
let storedItems = JSON.parse(localStorage.getItem('items')) || []
const items = []

if (storedItems.length > 0) {
    storedItems.forEach(item => {
        const list = document.createElement('li')
        addList.append(list)

        const itemInput = input.cloneNode(true)
        const itemlabel = label.cloneNode(true)
        const itemDel = del.cloneNode(true)

        list.append(itemInput, itemlabel, itemDel)
        // 취소선 초기로딩시 불러올때!!!!!
        itemlabel.textContent = item.text
        itemlabel.innerHTML = item.checked ? `<del>${item.text}</del>` : item.text 
        itemInput.checked = item.checked
        items.push({ input: itemInput, label: itemlabel, del: itemDel, text: item.text, checked: item.checked })
        cancel(itemInput, itemDel)
        addList.prepend(list)
    })
    end.style.display = 'block'
}

// 로컬 스토리지에 저장된 아이템 정보 키
const localStorageKey = 'items'

add.addEventListener('click', () => {
    const textValue = text.value.trim()

    const list = document.createElement('li')
    addList.append(list)

    const itemInput = input.cloneNode(true)
    const itemlabel= label.cloneNode(true)
    const itemDel = del.cloneNode(true)

    list.append(itemInput, itemlabel, itemDel)
    itemlabel.textContent = textValue

    itemInput.checked = false // 새로운 아이템 항상 checked는 false로 초기화

    //각 아이템 객체로저장 이벤트리스너 
    const newItem = {input: itemInput, label: itemlabel, del: itemDel, text: textValue, checked: false }
    items.push(newItem)
    cancel(itemInput, itemDel)
    end.style.display = "block"
    text.value = ''
    // 로컬 스토리지에 아이템 추가 후 저장
    storedItems.unshift(newItem)
    saveToLocalStorage()

    addList.prepend(list)
})


// 아이템 삭제,체크박스 체크와 취소선
function cancel(input, del) {
    function inputToggle() {
        const textCont = input.nextElementSibling
        const itemIndex = items.findIndex(item => item.input === input)
        if (itemIndex !== -1) {
            items[itemIndex].checked = input.checked
            textCont.innerHTML = input.checked ? `<del>${textCont.textContent}</del>` : textCont.textContent
            saveToLocalStorage()
        }
    }
    input.addEventListener('click',inputToggle)
        

    del.addEventListener('click', () => {
        const result = confirm('삭제하시겠습니까?')
        if (result) {
            const index = items.findIndex(item => item.del === del)
            if (index !== -1) {
                items.splice(index, 1)
                saveToLocalStorage()
                del.parentElement.remove()

                storedItems = storedItems.filter(item => item.del !== del)
                saveToLocalStorage()
            }
        }
    })
}
// 전체 삭제
end.addEventListener('click', () => {
    const allResult = confirm('전체 삭제하시겠습니까?')
    if (allResult) {
        addList.innerHTML = ''
        end.style.display = 'none'
        localStorage.removeItem('items')
    }
})
