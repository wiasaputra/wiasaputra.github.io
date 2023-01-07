const shop = document.querySelector('.shop')


const listItems =[
    {id:1,
        name: "Carved buffalo skull Indian huge skull",
        img: 'https://i.etsystatic.com/27320701/r/il/ada1ab/3666810339/il_794xN.3666810339_4xk3.jpg',
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
      
        img: "https://i.etsystatic.com/27320701/r/il/60064c/3725923346/il_794xN.3725923346_106v.jpg",
        car:[
            'https://i.etsystatic.com/27320701/r/il/a25970/3725923688/il_794xN.3725923688_pyba.jpg',
            'https://i.etsystatic.com/27320701/r/il/57219a/3725923914/il_794xN.3725923914_td7r.jpg',
            'https://i.etsystatic.com/27320701/r/il/3dbd3f/3773509319/il_794xN.3773509319_qkmz.jpg',
            'https://i.etsystatic.com/27320701/r/il/53bb6c/3725923792/il_794xN.3725923792_ri2z.jpg',
        ]
    },
    {id:3,
        name: "carve skull buffalo Mandala lotus with carved long horn",
      
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
    {id:7,
        name: "Carved skull buffalo with octopuse lonng horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/edb917/3278329817/il_794xN.3278329817_h2kg.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/44a06c/3226291318/il_794xN.3226291318_7n57.jpg',
            'https://i.etsystatic.com/27320701/r/il/ed295d/3273976209/il_794xN.3273976209_grol.jpg',
            'https://i.etsystatic.com/27320701/r/il/c502ed/3226291512/il_794xN.3226291512_izym.jpg',
            
        ]
    },
    {id:8,
        name: "carved cow skull lotus",
      
        img: 'https://i.etsystatic.com/27320701/r/il/85cb43/3678512373/il_794xN.3678512373_ahlx.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/ff33fc/3204015692/il_794xN.3204015692_bs58.jpg',
            'https://i.etsystatic.com/27320701/r/il/d49ac9/3204008122/il_794xN.3204008122_7z09.jpg',
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/1626248876406_IMG_30714772_cd3igf.mp4',
            
        ]
    },
    {id:9,
        name: "carve buffalo skull BOHO MENIAN grey",
     
        img: 'https://i.etsystatic.com/27320701/r/il/1fa551/3885111177/il_794xN.3885111177_jj2b.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/44adc3/3868695395/il_794xN.3868695395_1n29.jpg',
            'https://i.etsystatic.com/27320701/r/il/0f5a01/3821177758/il_794xN.3821177758_26ih.jpg',
            'https://i.etsystatic.com/27320701/r/il/15a972/3868695529/il_794xN.3868695529_hwl1.jpg',
            'https://i.etsystatic.com/27320701/r/il/43330e/3868695591/il_794xN.3868695591_fcl9.jpg',
            'https://i.etsystatic.com/27320701/r/il/8741ea/3821177888/il_794xN.3821177888_7ajk.jpg'
            
        ]
    },
    {id:10,
        name: "carved buffalo skull carving Mandala sun flower",
     
        img: 'https://i.etsystatic.com/27320701/r/il/a1f7d0/3186379098/il_794xN.3186379098_fk0g.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/b0b509/3186395780/il_794xN.3186395780_p5dx.jpg',
            'https://i.etsystatic.com/27320701/r/il/649442/3186380378/il_794xN.3186380378_c6gh.jpg',
            'https://i.etsystatic.com/27320701/r/il/5fd848/3234080935/il_794xN.3234080935_fau2.jpg',
            'https://i.etsystatic.com/27320701/r/il/89fe22/3234081425/il_794xN.3234081425_hb9e.jpg',
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_105753974_xzipoc.mp4'
            
        ]
    },
    {id:11,
        name: "carved buffalo skull small carving round its custom design",
    
        img: 'https://i.etsystatic.com/27320701/r/il/d954bb/3284755142/il_794xN.3284755142_1uxd.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/fe744b/3284754466/il_794xN.3284754466_4o2g.jpg',
            'https://i.etsystatic.com/27320701/r/il/4c5920/3332447365/il_794xN.3332447365_grxp.jpg',
            'https://i.etsystatic.com/27320701/r/il/22a5af/3284754664/il_794xN.3284754664_qhza.jpg',
            
        ]
    },
    {id:12,
        name: "carved buffalo flower grey medium horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/13f960/3882017838/il_794xN.3882017838_3ikd.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/94df83/3882018326/il_794xN.3882018326_kb2i.jpg',
            'https://i.etsystatic.com/27320701/r/il/1f5fb1/3882018304/il_794xN.3882018304_5qjn.jpg',
            'https://i.etsystatic.com/27320701/r/il/aa03b5/3882018316/il_794xN.3882018316_gel9.jpg',
            'https://i.etsystatic.com/27320701/r/il/b75700/3929506397/il_794xN.3929506397_c8ci.jpg'
            
        ]
    },
    {id:13,
        name: "carve ram skull carving mandala",
      
        img: 'https://i.etsystatic.com/27320701/r/il/b51705/3912888309/il_794xN.3912888309_6f49.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/2fed87/3730494817/il_794xN.3730494817_3e10.jpg',
            'https://i.etsystatic.com/27320701/r/il/9d9739/3682893962/il_794xN.3682893962_7afn.jpg',
            'https://i.etsystatic.com/27320701/r/il/4cb861/3730494791/il_794xN.3730494791_5geu.jpg',
            'https://i.etsystatic.com/27320701/r/il/9cb4b7/3682893918/il_794xN.3682893918_q43s.jpg',
            'https://i.etsystatic.com/27320701/r/il/ff2f86/3818405638/il_794xN.3818405638_hi68.jpg'
            
        ]
    },
    {id:14,
        name: "Carved buffalo head skull carving floral",
      
        img: 'https://i.etsystatic.com/27320701/r/il/df9ef8/3158984148/il_794xN.3158984148_pve9.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/b1fdc7/3050990292/il_794xN.3050990292_nlan.jpg',
            'https://i.etsystatic.com/27320701/r/il/b9e276/3098718287/il_794xN.3098718287_fpnn.jpg',
            'https://i.etsystatic.com/27320701/r/il/c2b43d/3050990634/il_794xN.3050990634_8i0g.jpg',
            'https://i.etsystatic.com/27320701/r/il/46abeb/2960754078/il_794xN.2960754078_2ve9.jpg',
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_155628465_bikhqz.mp4'
            
        ]
    },
    {id:15,
        name: "carved buffalo lotus grey medium horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/010617/4483410906/il_794xN.4483410906_cuq9.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/dcf7f3/4418671062/il_794xN.4418671062_g8uq.jpg',
            'https://i.etsystatic.com/27320701/r/il/06cd15/4418671028/il_794xN.4418671028_aeq7.jpg',
            'https://i.etsystatic.com/27320701/r/il/7ded5b/4418671084/il_794xN.4418671084_4m51.jpg',
        ]
    },
    {id:16,
        name: "Deer antler carving dragon for knife handle antler",
      
        img: 'https://i.etsystatic.com/27320701/r/il/e13cbb/3898233041/il_794xN.3898233041_jl1f.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/3f369f/3826606818/il_794xN.3826606818_r2x4.jpg',
            'https://i.etsystatic.com/27320701/r/il/69d902/3874120317/il_794xN.3874120317_pniv.jpg',
            'https://i.etsystatic.com/27320701/r/il/f85d45/3826606778/il_794xN.3826606778_cktb.jpg',
            'https://i.etsystatic.com/27320701/r/il/05bb8a/3874120389/il_794xN.3874120389_jfis.jpg',
            'https://i.etsystatic.com/27320701/r/il/30f33e/3826606748/il_794xN.3826606748_pjhk.jpg'
            
            
        ]
    },
    {id:17,
        name: "carved ram skull carving white style",
      
        img: 'https://i.etsystatic.com/27320701/r/il/334dfc/3860245039/il_794xN.3860245039_c5w0.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/18d7df/3812723794/il_794xN.3812723794_8wyc.jpg',
            'https://i.etsystatic.com/27320701/r/il/1445ed/3812723738/il_794xN.3812723738_3luh.jpg',
            'https://i.etsystatic.com/27320701/r/il/ffe7d3/3860245067/il_794xN.3860245067_ih8z.jpg',
            'https://i.etsystatic.com/27320701/r/il/8bfdf0/3812723776/il_794xN.3812723776_gbn9.jpg',
            'https://i.etsystatic.com/27320701/r/il/de1d5c/3812723752/il_794xN.3812723752_acma.jpg'
            
            
        ]
    },
    {id:18,
        name: "carve goat skull carving viking grey HUGE",
      
        img: 'https://i.etsystatic.com/27320701/r/il/2325ee/4138598969/il_794xN.4138598969_oxks.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/e2fd12/4138598903/il_794xN.4138598903_6rrr.jpg',
            'https://i.etsystatic.com/27320701/r/il/e067c2/4090944654/il_794xN.4090944654_bj87.jpg',
            'https://i.etsystatic.com/27320701/r/il/fc5cad/4138598941/il_794xN.4138598941_k3uo.jpg',
            'https://i.etsystatic.com/27320701/r/il/76c45d/4138598965/il_794xN.4138598965_m0j0.jpg',
            'https://i.etsystatic.com/27320701/r/il/c899b2/4090944690/il_794xN.4090944690_8yyu.jpg'
            
            
        ]
    },
    
    
] 

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  listItems.sort((a, b) => {
    return b.id - a.id;
});
shop.innerHTML=listItems.map((item, index)=>{ 
    return `
        <div class="col-sm-4">
            <div class="card mb-3">
                <img class="card-img-top" src=${item.img} alt=${item.name}>
                <div class="card-body">
                <p class="card-title text-uppercase">${item.name}</p>
               // <h5 class="card-text">${rupiah(item.price)}</h5>
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
     ${listItems[index].car.map(e=>{
        
        return `
        ${e.split('.').pop()==="mp4"? `<video style="width: 75%; height: 75%;" width="400" controls>
        <source src=${e} type="video/mp4">Your browser does not support HTML5 video.</video>`:`<img class="img-fluid mb-3" src="${e}"/>`}
        `
        }).join("")
        }
       <div class="mt-5">For more detail information send Whatapp</div>
       <button type="button" class="btn btn-outline-success" onclick="whatAppChat()">Contact Here</button>
     </div>
     <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
     </div>
       `
    })
});

