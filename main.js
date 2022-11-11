const shop = document.querySelector('.shop')


const listItems =[
    {id:1,
        name: "Carved buffalo skull Indian huge skull",
        price: 5500000,
        img: './assets/images/il_794xN.3228679722_oz0l.jpg',
        car:['car1','car2','car3']
    },
    {id:2,
        name: "carved buffalo skull carving Lotus padma",
        price: 5500000,
        img: "./assets/images/il_794xN.3725923346_106v.jpg",
        car:['car10','car20','car30']
    },
    {id:3,
        name: "carve skull buffalo Mandala lotus with carved long horn",
        price: 6300000,
        img: "./assets/images/il_1140xN.3192446258_qwqu.webp",
        car:['car111','car222','car333']
    },
    {id:4,
        name: "carve buffalo skull with long carved horn mandala Natural White color",
        price: 6300000,
        img: './assets/images/il_794xN.3150036084_92hc.jpg',
        car:['car111','car222','car333']
    },
    {id:5,
        name: "Carved buffalo skull Indian natif america",
        price: 5600000,
        img: './assets/images/il_794xN.3721666122_llft.jpg',
        car:['car111','car222','car333']
    },
    
    
] 

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

shop.innerHTML=listItems.map((item, index)=>{ 
    return `
        <div class="col-sm-4">
            <div class="card mb-3">
                <img class="card-img-top" src=${item.img} alt=${item.name}>
                <div class="card-body">
                <p class="card-title text-uppercase">${item.name}</p>
                <h5 class="card-text">${rupiah(item.price)}</h5>
                </div>
                <button type="button" class="btn btn-primary btnDetail" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Detail product
                </button>
            </div>  
      </div>
     `
}).join("")



const btnDetail = document.querySelectorAll('.btnDetail')
console.log(btnDetail)
let choosenProduct = listItems[0]
btnDetail.forEach((data, index)=> {
    data.addEventListener('click', ()=>{
        console.log('click terjadi', index)
        const modalContent =document.querySelector('.modal-content')
        console.log(modalContent)
        modalContent.innerHTML =
       `
       <div class="modal-header">
       <h1 class="modal-title fs-5" id="exampleModalLabel">${listItems[index].name}</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
       Isi apa disini
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
     </div>
       `
    })
});