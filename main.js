const shop = document.querySelector('.shop')


const listItems =[
    {id:1,
        name: "Carved buffalo skull Indian huge skull",
        price: 5500000,
        img: './assets/images/il_794xN.3228679722_oz0l.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/db904d/3228663256/il_794xN.3228663256_m1as.jpg',
            'https://i.etsystatic.com/27320701/r/il/dd59a9/3228663416/il_794xN.3228663416_rvfe.jpg',
            'https://i.etsystatic.com/27320701/r/il/ada1ab/3666810339/il_794xN.3666810339_4xk3.jpg',
            'https://i.etsystatic.com/27320701/r/il/6ff98d/3619201080/il_794xN.3619201080_i0u5.jpg',
            'https://i.etsystatic.com/27320701/r/il/b53cda/3619201152/il_794xN.3619201152_ozfq.jpg',
            'https://i.etsystatic.com/27320701/r/il/086d7c/3619203144/il_794xN.3619203144_phz7.jpg'
        ]
    },
    {id:2,
        name: "carved buffalo skull carving Lotus padma",
        price: 5500000,
        img: "./assets/images/il_794xN.3725923346_106v.jpg",
        car:[
            'https://i.etsystatic.com/27320701/r/il/a25970/3725923688/il_794xN.3725923688_pyba.jpg',
            'https://i.etsystatic.com/27320701/r/il/57219a/3725923914/il_794xN.3725923914_td7r.jpg',
            'https://i.etsystatic.com/27320701/r/il/3dbd3f/3773509319/il_794xN.3773509319_qkmz.jpg',
            'https://i.etsystatic.com/27320701/r/il/53bb6c/3725923792/il_794xN.3725923792_ri2z.jpg',
        ]
    },
    {id:3,
        name: "carve skull buffalo Mandala lotus with carved long horn",
        price: 6300000,
        img: "https://i.etsystatic.com/27320701/r/il/c58d7a/3852775398/il_794xN.3852775398_3it6.jpg",
        car:[
            'https://i.etsystatic.com/27320701/r/il/9afe43/3818326530/il_794xN.3818326530_iq8i.jpg',
            'https://i.etsystatic.com/27320701/r/il/e9d362/3818326440/il_794xN.3818326440_7olw.jpg',
            'https://i.etsystatic.com/27320701/r/il/4ee2fa/3818326412/il_794xN.3818326412_amtq.jpg',
            'https://i.etsystatic.com/27320701/r/il/aca8cc/3818326504/il_794xN.3818326504_exsc.jpg',
        ]
    },
    {id:4,
        name: "carve buffalo skull with long carved horn mandala Natural White color",
        price: 6300000,
        img: 'https://i.etsystatic.com/27320701/r/il/04eaf1/3150036084/il_794xN.3150036084_92hc.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/0617f7/3193243299/il_794xN.3193243299_fbx7.jpg',
            'https://i.etsystatic.com/27320701/r/il/c4b97e/3002285122/il_794xN.3002285122_jj5r.jpg',
            'https://i.etsystatic.com/27320701/r/il/f10b80/3002284852/il_794xN.3002284852_t6xc.jpg',
            'https://i.etsystatic.com/27320701/r/il/c5ec49/3036420876/il_794xN.3036420876_8to6.jpg',
            'https://i.etsystatic.com/27320701/r/il/ce06d5/3084143569/il_794xN.3084143569_9zfb.jpg',
            'https://i.etsystatic.com/27320701/r/il/f9e048/3004410204/il_794xN.3004410204_tvbb.jpg'
        ]
    },
    {id:5,
        name: "Carved buffalo skull Indian natif america",
        price: 5600000,
        img: 'https://i.etsystatic.com/27320701/r/il/ef012a/3721666122/il_794xN.3721666122_llft.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/3d337c/3768974183/il_794xN.3768974183_q6yk.jpg',
            'https://i.etsystatic.com/27320701/r/il/4ec3d0/3768974327/il_794xN.3768974327_940x.jpg',
            'https://i.etsystatic.com/27320701/r/il/7a4cd5/3768974379/il_794xN.3768974379_18vu.jpg',
            'https://i.etsystatic.com/27320701/r/il/8d1b3b/3721389986/il_794xN.3721389986_ccjc.jpg'
        ]
    },
    {id:6,
        name: "buffalo skull carving floral grey",
        price: 5600000,
        img: 'https://i.etsystatic.com/27320701/r/il/973211/3759067025/il_1140xN.3759067025_3qgx.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/6acf6a/3759066761/il_1140xN.3759066761_fp9l.jpg',
            'https://i.etsystatic.com/27320701/r/il/b48890/3759066899/il_1140xN.3759066899_6l94.jpg',
            'https://i.etsystatic.com/27320701/r/il/3b64df/3759066963/il_1140xN.3759066963_ct9z.jpg',
            'https://i.etsystatic.com/27320701/r/il/eedbfe/3759067071/il_1140xN.3759067071_9ut7.jpg',
            'https://i.etsystatic.com/27320701/r/il/46abeb/2960754078/il_1140xN.2960754078_2ve9.jpg',
            'https://i.etsystatic.com/27320701/r/il/bf8a32/2960753994/il_1140xN.2960753994_byg8.jpg'
        ]
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
                <i class="bi bi-window-desktop"></i> Detail product
                </button>
            </div>  
      </div>
     `
}).join("")

const whatAppChat =()=>{
window.open("https://wa.me/6287861345373?text=%2AHallo%20Wiasa%2C%2A%0AI%20am%20interested%20in%20the%20product%0ACan%20I%20order%20it")
}


const btnDetail = document.querySelectorAll('.btnDetail')
let choosenProduct = listItems[0]
btnDetail.forEach((data, index)=> {
    data.addEventListener('click', ()=>{ 
        const modalContent =document.querySelector('.modal-content')
        modalContent.innerHTML =
       `
       <div class="modal-header">
       <h1 class="modal-title fs-5 text-uppercase text-center" id="exampleModalLabel">${listItems[index].name}</h1>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body text-center">
     ${listItems[index].car.map(e=>{return `<img class="img-fluid mb-3" src="${e}"/>`}).join("")}
       <div>For more detail information send Whatapp</div>
       <button type="button" class="btn btn-outline-success" onclick="whatAppChat()">Contact Here</button>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
     </div>
       `
    })
});

