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
    {id:19,
        name: "Deer antler carving Indian relieft for handle",
      
        img: 'https://i.etsystatic.com/27320701/r/il/abc646/3854307876/il_794xN.3854307876_ldej.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/220bc0/3854307758/il_794xN.3854307758_37gn.jpg',
            'https://i.etsystatic.com/27320701/r/il/7b274b/3901805879/il_794xN.3901805879_4md7.jpg',
            'https://i.etsystatic.com/27320701/r/il/ce9f24/3901805921/il_794xN.3901805921_siub.jpg',
            'https://i.etsystatic.com/27320701/r/il/5b24d9/3901805779/il_794xN.3901805779_k74s.jpg',
            'https://i.etsystatic.com/27320701/r/il/db4d8b/3901805717/il_794xN.3901805717_dbk4.jpg'
            
            
        ]
    },
    {id:20,
        name: "Carve buffalo skull carving huge long horn floral batik white",
      
        img: 'https://i.etsystatic.com/27320701/r/il/875bdd/3716402853/il_794xN.3716402853_7c2d.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/video_20220111_153758_bz7vxz.mp4',
            'https://i.etsystatic.com/27320701/r/il/2178dd/3654891041/il_794xN.3654891041_reka.jpg',
            'https://i.etsystatic.com/27320701/r/il/6a61ed/3588394674/il_794xN.3588394674_nthd.jpg',
            'https://i.etsystatic.com/27320701/r/il/064adb/3588395442/il_794xN.3588395442_q22x.jpg',           
            
        ]
    },
    {id:21,
        name: "carved skull buffalo skull cow Rose antic",
      
        img: 'https://i.etsystatic.com/27320701/r/il/c3c178/3588397380/il_794xN.3588397380_ng8x.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/video_20220111_154100_yl7dns.mp4',
            'https://i.etsystatic.com/27320701/r/il/8457a9/3636006401/il_794xN.3636006401_f600.jpg',
            'https://i.etsystatic.com/27320701/r/il/df42d7/3636004653/il_794xN.3636004653_e5k2.jpg',
            'https://i.etsystatic.com/27320701/r/il/02255b/3636004625/il_794xN.3636004625_834d.jpg',   
            'https://i.etsystatic.com/27320701/r/il/0bf3d4/3636004649/il_794xN.3636004649_rjdo.jpg',
            'https://i.etsystatic.com/27320701/r/il/fa348e/3588383688/il_794xN.3588383688_aiwd.jpg'
            
        ]
    },
    {id:22,
        name: "Deer antler carving knife handle bear long size",
      
        img: 'https://i.etsystatic.com/27320701/r/il/662a2d/3805041149/il_794xN.3805041149_5arc.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/1701cd/3804859543/il_794xN.3804859543_sxqk.jpg',
            'https://i.etsystatic.com/27320701/r/il/bb9ee5/3804859467/il_794xN.3804859467_6rip.jpg',
            'https://i.etsystatic.com/27320701/r/il/c70a3a/3757265698/il_794xN.3757265698_j2bs.jpg',
            'https://i.etsystatic.com/27320701/r/il/9287fd/3757265604/il_794xN.3757265604_h9kl.jpg', 
            
        ]
    },
    {id:23,
        name: "carve ram skull octopus on skull",
      
        img: 'https://i.etsystatic.com/27320701/r/il/0377b9/3984451219/il_794xN.3984451219_elky.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/20220612_094439_rripnw.mp4',
            'https://i.etsystatic.com/27320701/r/il/9a3f51/3937002182/il_794xN.3937002182_mw7v.jpg',
            'https://i.etsystatic.com/27320701/r/il/188b3f/3937002104/il_794xN.3937002104_id02.jpg',
            'https://i.etsystatic.com/27320701/r/il/231f6b/3937002162/il_794xN.3937002162_i00o.jpg',
            'https://i.etsystatic.com/27320701/r/il/affc56/3984451329/il_794xN.3984451329_kboe.jpg' 
            
        ]
    },
    {id:24,
        name: "carved ram skull indian skull",
      
        img: 'https://i.etsystatic.com/27320701/r/il/08efe1/4420778250/il_794xN.4420778250_l54a.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/e95cd9/4420778286/il_794xN.4420778286_6av6.jpg',
            'https://i.etsystatic.com/27320701/r/il/82d67c/4468140597/il_794xN.4468140597_1908.jpg',
            'https://i.etsystatic.com/27320701/r/il/f0d123/4468140589/il_794xN.4468140589_shpp.jpg',
            'https://i.etsystatic.com/27320701/r/il/401d37/4420778272/il_794xN.4420778272_q24r.jpg',            
        ]
    },
    {id:25,
        name: "carved skull buffalo skull Ganeca India",
      
        img: 'https://i.etsystatic.com/27320701/r/il/5050b1/3678257315/il_794xN.3678257315_9bj1.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/89b890/3630640066/il_794xN.3630640066_1rdy.jpg',
            'https://i.etsystatic.com/27320701/r/il/f28c92/3630640770/il_794xN.3630640770_72c3.jpg',
            'https://i.etsystatic.com/27320701/r/il/2d1378/3678254127/il_794xN.3678254127_8oh0.jpg',            
        ]
    },
    {id:26,
        name: "carved skull buffalo skull cow Rose antic",
      
        img: 'https://i.etsystatic.com/27320701/r/il/1300c5/4483409716/il_794xN.4483409716_l17f.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/c303eb/4527866903/il_794xN.4527866903_fik0.jpg',
            'https://i.etsystatic.com/27320701/r/il/19f0df/4480501306/il_794xN.4480501306_1qtv.jpg',
            'https://i.etsystatic.com/27320701/r/il/e92e80/4480501414/il_794xN.4480501414_lihl.jpg',            
        ]
    },
    {id:27,
        name: "ram skull carve sheep skull carving skull",
      
        img: 'https://i.etsystatic.com/27320701/r/il/d02ed8/3683008232/il_794xN.3683008232_hfj0.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/58e857/3730610071/il_794xN.3730610071_nulf.jpg',
            'https://i.etsystatic.com/27320701/r/il/c3cddc/3730610081/il_794xN.3730610081_m3ny.jpg',
            'https://i.etsystatic.com/27320701/r/il/51d7fe/3683008274/il_794xN.3683008274_igmn.jpg', 
            'https://i.etsystatic.com/27320701/r/il/d3b86b/3683008272/il_794xN.3683008272_royz.jpg'           
        ]
    },
    {id:28,
        name: "carved buffalo skull dragon fight grey",
      
        img: 'https://i.etsystatic.com/27320701/r/il/cf7cde/3871533499/il_794xN.3871533499_d0vg.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/b21719/3788988688/il_794xN.3788988688_6j7x.jpg',
            'https://i.etsystatic.com/27320701/r/il/8f2d87/3730629541/il_794xN.3730629541_mefq.jpg',
            'https://i.etsystatic.com/27320701/r/il/e71b6f/3683027968/il_794xN.3683027968_tjqo.jpg', 
            'https://i.etsystatic.com/27320701/r/il/b60ada/3683027942/il_794xN.3683027942_ir8x.jpg'           
        ]
    },
    {id:29,
        name: "carve cow skull mandala lotus",
      
        img: 'https://i.etsystatic.com/27320701/r/il/f4f571/4090946362/il_794xN.4090946362_bo1j.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/719588/4090946566/il_794xN.4090946566_gqlk.jpg',
            'https://i.etsystatic.com/27320701/r/il/cc63d0/4138600799/il_794xN.4138600799_kviv.jpg',
            'https://i.etsystatic.com/27320701/r/il/a8e9e5/4138600793/il_794xN.4138600793_2grs.jpg', 
            'https://i.etsystatic.com/27320701/r/il/61a50f/4138600785/il_794xN.4138600785_ii2o.jpg'   ,
            'https://i.etsystatic.com/27320701/r/il/25285b/4090960458/il_794xN.4090960458_l718.jpg'        
        ]
    },
    {id:30,
        name: "carve ram skull carving Flower antic",
      
        img: 'https://i.etsystatic.com/27320701/r/il/5ad046/3865931063/il_794xN.3865931063_t4jl.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_hiwwge.mp4',
            'https://i.etsystatic.com/27320701/r/il/00fcf8/3818411738/il_794xN.3818411738_f0cc.jpg',
            'https://i.etsystatic.com/27320701/r/il/d0e809/3865931097/il_794xN.3865931097_luyz.jpg', 
            'https://i.etsystatic.com/27320701/r/il/4a609f/3865931161/il_794xN.3865931161_t30l.jpg',
            'https://i.etsystatic.com/27320701/r/il/b1b1ee/3818411846/il_794xN.3818411846_q0tj.jpg',
            'https://i.etsystatic.com/27320701/r/il/746d90/3818411822/il_794xN.3818411822_d2p4.jpg'      ,
            'https://i.etsystatic.com/27320701/r/il/fc8f07/4474930958/il_794xN.4474930958_1chz.jpg'
        ]
    },
    {id:31,
        name: "carved cow skull carving lotus",
      
        img: 'https://i.etsystatic.com/27320701/r/il/f0bc15/3336783342/il_794xN.3336783342_16kr.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/video_20210918_105211_slfm3h.mp4',
            'https://i.etsystatic.com/27320701/r/il/c0a6d4/3384477583/il_794xN.3384477583_ei0n.jpg',
            'https://i.etsystatic.com/27320701/r/il/4acb39/3336783296/il_794xN.3336783296_gehy.jpg',
        ]
    },
    {id:32,
        name: "ram skull carving patern white",
      
        img: 'https://i.etsystatic.com/27320701/r/il/af50f7/3529419860/il_794xN.3529419860_mclh.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/6924ff/3529419518/il_794xN.3529419518_eche.jpg',
            'https://i.etsystatic.com/27320701/r/il/afc4d4/3577058037/il_794xN.3577058037_hxab.jpg',
            'https://i.etsystatic.com/27320701/r/il/68aa03/3577058063/il_794xN.3577058063_6v8b.jpg',
        ]
    },
    {id:33,
        name: "Carve buffalo skull lotus with carved horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/466026/4459765952/il_794xN.4459765952_huoi.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/cb86ad/4507130005/il_794xN.4507130005_mgij.jpg',
            'https://i.etsystatic.com/27320701/r/il/0711a1/4507130049/il_794xN.4507130049_7czm.jpg',
            'https://i.etsystatic.com/27320701/r/il/515d57/4507130099/il_794xN.4507130099_8x1b.jpg',
            'https://i.etsystatic.com/27320701/r/il/d8bc6e/4459766156/il_794xN.4459766156_lflq.jpg',
            'https://i.etsystatic.com/27320701/r/il/1c3128/4507130207/il_794xN.4507130207_queu.jpg',
            'https://i.etsystatic.com/27320701/r/il/a0f178/4459766284/il_794xN.4459766284_ebii.jpg'
        ]
    },
    {id:34,
        name: "carved buffalo skull carving mandala round",
      
        img: 'https://i.etsystatic.com/27320701/r/il/225afe/3683026540/il_794xN.3683026540_f0n0.jpg',
        car:[
            'hhttps://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_124250590_fsxi3f.mp4',
            'https://i.etsystatic.com/27320701/r/il/f2f85d/3683026056/il_794xN.3683026056_q3zh.jpg',
            'https://i.etsystatic.com/27320701/r/il/b4cc75/3730627569/il_794xN.3730627569_hxrn.jpg',
            'https://i.etsystatic.com/27320701/r/il/c18659/3730627567/il_794xN.3730627567_aqe4.jpg',
            'https://i.etsystatic.com/27320701/r/il/b2ba3d/3730627565/il_794xN.3730627565_7vpe.jpg',
            'https://i.etsystatic.com/27320701/r/il/4b02b6/3009660855/il_794xN.3009660855_stpi.jpg'
        ]
    },
    {id:35,
        name: "Carved buffalo skull with octopus",
      
        img: 'https://i.etsystatic.com/27320701/r/il/3251e8/3716996060/il_794xN.3716996060_bheo.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/8cc653/3764285179/il_794xN.3764285179_5aec.jpg',
            'https://i.etsystatic.com/27320701/r/il/172067/3716696778/il_794xN.3716696778_7c70.jpg',
            'https://i.etsystatic.com/27320701/r/il/67d6c3/3764285351/il_794xN.3764285351_h6hk.jpg',
            'https://i.etsystatic.com/27320701/r/il/0effe1/3716697002/il_794xN.3716697002_4rw1.jpg',

        ]
    },
    {id:36,
        name: "carved buffalo skull dragon",
      
        img: 'https://i.etsystatic.com/27320701/r/il/d79acd/3192637250/il_794xN.3192637250_7vjp.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/IMG_46988776_uftgra.mp4',
            'https://i.etsystatic.com/27320701/r/il/18ed0b/3159059008/il_794xN.3159059008_e6x2.jpg',
            'https://i.etsystatic.com/27320701/r/il/79ccee/3206771991/il_794xN.3206771991_8kqu.jpg',
            'https://i.etsystatic.com/27320701/r/il/078c46/3206773261/il_794xN.3206773261_119z.jpg',
            'https://i.etsystatic.com/27320701/r/il/403602/3311549580/il_794xN.3311549580_1xrg.jpg',
            'https://i.etsystatic.com/27320701/r/il/de974d/3206441179/il_794xN.3206441179_b8mj.jpg',
            'https://i.etsystatic.com/27320701/r/il/893ed6/3205221401/il_794xN.3205221401_tu6u.jpg'

        ]
    },
    {id:37,
        name: "carve ram skull Indian brown natural horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/ffc45f/3836963083/il_794xN.3836963083_p1hd.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/de3fb2/3789365786/il_794xN.3789365786_ixcd.jpg',
            'https://i.etsystatic.com/27320701/r/il/456539/3789365812/il_794xN.3789365812_7754.jpg',
        ]
    },
    {id:38,
        name: "Carved buffalo skull Hart grey",
      
        img: 'https://i.etsystatic.com/27320701/r/il/2bf01c/3860703127/il_794xN.3860703127_bp5w.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/624a02/3860249459/il_794xN.3860249459_ochc.jpg',
            'https://i.etsystatic.com/27320701/r/il/68d5ba/3812727678/il_794xN.3812727678_sjl4.jpg',
            'https://i.etsystatic.com/27320701/r/il/d8f7ee/3860248799/il_794xN.3860248799_baw3.jpg',
            'https://i.etsystatic.com/27320701/r/il/50c104/3860248769/il_794xN.3860248769_ldfd.jpg',
            'https://i.etsystatic.com/27320701/r/il/159e56/3860248761/il_794xN.3860248761_5jiu.jpg'
        ]
    },
    {id:39,
        name: "carve buffalo skull mandala full long horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/7e8be3/4523180183/il_794xN.4523180183_i7fe.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/file_vudosb.mp4',
            'https://i.etsystatic.com/27320701/r/il/9208d1/4522277313/il_794xN.4522277313_dky8.jpg',
            'https://i.etsystatic.com/27320701/r/il/4865cc/4474909722/il_794xN.4474909722_ldxe.jpg',
            'https://i.etsystatic.com/27320701/r/il/6322e7/4474909768/il_794xN.4474909768_lwaw.jpg',
            'https://i.etsystatic.com/27320701/r/il/d47d79/4474909842/il_794xN.4474909842_gp7w.jpg',
            'https://i.etsystatic.com/27320701/r/il/244544/4522277081/il_794xN.4522277081_jqnn.jpg',
            'https://i.etsystatic.com/27320701/r/il/084d15/4522277221/il_794xN.4522277221_1qir.jpg',
        ]
    },
    {id:40,
        name: "carved buffalo skull KOI fish japanese white",
      
        img: 'https://i.etsystatic.com/27320701/r/il/d5fe72/4523180997/il_794xN.4523180997_drvt.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/cdc20b/3975885522/il_794xN.3975885522_tels.jpg',
            'https://i.etsystatic.com/27320701/r/il/abf0f8/3975885406/il_794xN.3975885406_50wi.jpg',
            'https://i.etsystatic.com/27320701/r/il/224a96/3975885430/il_794xN.3975885430_6oeu.jpg',
            'https://i.etsystatic.com/27320701/r/il/805c8b/3975885494/il_794xN.3975885494_9wur.jpg',
        ]
    },
    {id:41,
        name: "carve goat skull carving viking grey HUGE",
      
        img: 'https://i.etsystatic.com/27320701/r/il/5edae4/3866757732/il_794xN.3866757732_d22b.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/545dea/3914245289/il_794xN.3914245289_9uja.jpg',
            'https://i.etsystatic.com/27320701/r/il/a468c5/3914245253/il_794xN.3914245253_8ase.jpg',
            'https://i.etsystatic.com/27320701/r/il/abaac5/3914245311/il_794xN.3914245311_1us7.jpg',
        ]
    },
    {id:42,
        name: "Carve buffalo skull half mandala",
      
        img: 'https://i.etsystatic.com/27320701/r/il/ad1085/3275669499/il_794xN.3275669499_krkq.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/1627342978754_IMG_210547560_cgflgu.mp4',
            'https://i.etsystatic.com/27320701/r/il/5c2334/3273978545/il_794xN.3273978545_9qun.jpg',
            'https://i.etsystatic.com/27320701/r/il/3a0373/3226293528/il_794xN.3226293528_fr0j.jpg',
            'https://i.etsystatic.com/27320701/r/il/9ae343/3273978503/il_794xN.3273978503_k0vk.jpg'
        ]
    },
    {id:43,
        name: "carve buffalo skull floral antic",
      
        img: 'https://i.etsystatic.com/27320701/r/il/14f197/3702175028/il_794xN.3702175028_ist7.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/457706/3683024962/il_794xN.3683024962_opc3.jpg',
            'https://i.etsystatic.com/27320701/r/il/3d62af/3683024710/il_794xN.3683024710_4esm.jpg',
            'https://i.etsystatic.com/27320701/r/il/0ac6a8/3730626243/il_794xN.3730626243_fl7m.jpg',
        ]
    },
    {id:44,
        name: "Carve buffalo skull carving floral grey with carved horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/3ba1ab/4523181853/il_794xN.4523181853_766f.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/9e3cf9/3908084649/il_794xN.3908084649_g9md.jpg',
            'https://i.etsystatic.com/27320701/r/il/60bba4/3908084673/il_794xN.3908084673_428n.jpg',
            'https://i.etsystatic.com/27320701/r/il/6f3c86/3908084697/il_794xN.3908084697_q0om.jpg',
            'https://i.etsystatic.com/27320701/r/il/c83a78/3860586030/il_794xN.3860586030_9n79.jpg',
            'https://i.etsystatic.com/27320701/r/il/08006c/3860586052/il_794xN.3860586052_rqg6.jpg',
            'https://i.etsystatic.com/27320701/r/il/c58811/3908084615/il_794xN.3908084615_f53k.jpg',
            'https://i.etsystatic.com/27320701/r/il/367acd/3860585900/il_794xN.3860585900_bf4g.jpg',
            'https://i.etsystatic.com/27320701/r/il/28b9bf/3860585992/il_794xN.3860585992_4mc8.jpg'
        ]
    },
    {id:45,
        name: "carved ram skull celtic snack",
      
        img: 'https://i.etsystatic.com/27320701/r/il/ebae4d/4478787923/il_794xN.4478787923_3i3l.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/4e6668/4431432206/il_794xN.4431432206_tgi9.jpg',
            'https://i.etsystatic.com/27320701/r/il/11db38/4431432654/il_794xN.4431432654_g2i0.jpg',
            'https://i.etsystatic.com/27320701/r/il/cf7d9a/4478789307/il_794xN.4478789307_hduf.jpg',
            'https://i.etsystatic.com/27320701/r/il/8beab2/4478789743/il_794xN.4478789743_az6x.jpg',
            'https://i.etsystatic.com/27320701/r/il/aec84d/4431433888/il_794xN.4431433888_g09c.jpg',
        ]
    },
    {id:46,
        name: "ram skull carving Lotus white skull",
      
        img: 'https://i.etsystatic.com/27320701/r/il/655d5d/3522982844/il_794xN.3522982844_68e9.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/video_20211208_155547_yns21z.mp4',
            'https://i.etsystatic.com/27320701/r/il/ded988/3570614853/il_794xN.3570614853_mu15.jpg',
            'https://i.etsystatic.com/27320701/r/il/1f2309/3522979514/il_794xN.3522979514_st7x.jpg',
            'https://i.etsystatic.com/27320701/r/il/e4a5fd/3522979458/il_794xN.3522979458_4t28.jpg',
            'https://i.etsystatic.com/27320701/r/il/edc16b/3570614763/il_794xN.3570614763_1pvt.jpg',
        ]
    },
    {id:47,
        name: "Carved buffalo skull mandala grey small carving",
      
        img: 'https://i.etsystatic.com/27320701/r/il/c9b06e/4426690756/il_794xN.4426690756_lz15.jpg',
        car:[
            'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/20221211_145233_wqtw9f.mp4',
            'https://i.etsystatic.com/27320701/r/il/30990c/4474049693/il_794xN.4474049693_4dpk.jpg',
            'https://i.etsystatic.com/27320701/r/il/d4a6c7/4426689422/il_794xN.4426689422_t9fk.jpg',
            'https://i.etsystatic.com/27320701/r/il/776849/4426689432/il_794xN.4426689432_giu4.jpg',
        ]
    },
    {id:48,
        name: "carve ram skull carving mandala",
      
        img: 'https://i.etsystatic.com/27320701/r/il/b51705/3912888309/il_794xN.3912888309_6f49.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/2fed87/3730494817/il_794xN.3730494817_3e10.jpg',
            'https://i.etsystatic.com/27320701/r/il/7f43f5/3730494739/il_794xN.3730494739_5n8t.jpg',
            'https://i.etsystatic.com/27320701/r/il/9d9739/3682893962/il_794xN.3682893962_7afn.jpg',
            'https://i.etsystatic.com/27320701/r/il/4cb861/3730494791/il_794xN.3730494791_5geu.jpg',
            'https://i.etsystatic.com/27320701/r/il/9cb4b7/3682893918/il_794xN.3682893918_q43s.jpg',
            'https://i.etsystatic.com/27320701/r/il/e5dfa8/3865924995/il_794xN.3865924995_jqib.jpg',
            'https://i.etsystatic.com/27320701/r/il/ff2f86/3818405638/il_794xN.3818405638_hi68.jpg',
            'https://i.etsystatic.com/27320701/r/il/9f222f/3818405614/il_794xN.3818405614_35qu.jpg'
        ]
    },
    {id:49,
        name: "Carve buffalo skull carving mandala leaf with carved horn",
      
        img: 'https://i.etsystatic.com/27320701/r/il/8494ed/3552451221/il_794xN.3552451221_lkic.jpg',
        car:[
            'https://i.etsystatic.com/27320701/r/il/eb05db/3552451909/il_794xN.3552451909_bkkl.jpg',
            'https://i.etsystatic.com/27320701/r/il/b73aca/3504819108/il_794xN.3504819108_t74m.jpg',
            'https://i.etsystatic.com/27320701/r/il/413894/3504820374/il_794xN.3504820374_h3k8.jpg',
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

