const loadItems = document.querySelector('.items');


const getPriceFilter = async(price) => {
    const result = await axios.get('/prod/list', {params:{price}});
    console.log('result', result);
};
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
};
run();

const elPriceFilter = document.querySelector('select[name=price]');
elPriceFilter.addEventListener('change', async (ev) => {
    const value = ev.target.value;
    getPriceFilter(value);
    run();
});





