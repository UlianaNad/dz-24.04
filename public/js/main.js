//console.log('work');


const loadItems = document.querySelector('.items');

//console.log('work!');
const run = async () => {
    const {data} = await axios.get('/prod/list/');
   // console.log({data});

    let html = '';
    data.forEach((item,index) => {
        html += `
        <div class="item-block">
            <div class="item-img">
                
                        <img class="item-logo" src="${item.img}" alt="">
                    </div>
                    <div class="item-name">
                    ${item.name}
                    </div>
                </a>
            <div class="item-price">
                ${item.price} $
            </div>
            <button>BUY</button>
        </div>
        `;
    });
    loadItems.innerHTML = html;
}
run();