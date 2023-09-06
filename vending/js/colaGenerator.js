class ColaGenerator{
    constructor() {
        this.itemList = document.querySelector('.cola-list')
    }
    async setup() {
        const response = await this.loadData()
        this.colaFactory(response)
    }

    async loadData() { //콜라데이터 가져오기
        try {
            const response = await fetch('./items.json')
            if(!response.ok){
            throw new Error('HTTP ERROR!!:'+response.status)
        }
            return await response.json() 

        } catch (error) {
            console.error('콜라데이터를 로딩하는중에 문제가 발생했습니다.:'+error)
        }
    }
    colaFactory(data) { //콜라 리스트
        const docFrag = new DocumentFragment()
        data.forEach((el)=>{
            const item = document.createElement('li')
            const itemTemplate = `<button type="button" class="btn-cola" data-item=${el.name} data-count=${el.count} data-price=${el.cost} data-img="${el.img}">
                <img src="./img/${el.img}" alt="" />
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>`
            item.innerHTML = itemTemplate
            docFrag.append(item)
        })
        this.itemList.append(docFrag)
    }
}

export default ColaGenerator