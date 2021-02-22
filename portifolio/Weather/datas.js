function diff_datas(d1,m1,a1,d2,m2,a2){
 
    const Ddiff = d2-d1
    const Mdiff = (m2-m1) * 30 
    const Adiff =(a2-a1)*365
    const DD = Ddiff + Mdiff + Adiff

    const data1= `${d1}/${m1}/${a1}`
    const data2 = `${d2}/${m2}/${a2}`
    return console.log(DD)
    
    
    
    
}
diff_datas(15,10,2001,15,10,2002)