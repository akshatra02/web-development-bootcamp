
//object methods
const profile={
    name:"aksh",age:20,roll:26,yr:4,dept:"CSE"
}
//keys
const keys=Object.keys(profile);
console.log(keys)
//values
const val=Object.values(profile);
console.log(val)
//entires
const entires=Object.entries(profile)
console.log(entires)

//Array methods
const product=[
    {
        pn:"pen",price:10,
    },{
        pn:"ball",price:80,
    },{
        pn:"bat",price:900,
    },{
        pn:"book",price:100,
    },{
        pn:"eraser",price:5
    }
]
const filterprice=product.filter((p)=>{
    return p.price < 100;
})
console.log(filterprice)

//map
const mapf=product.map((p)=>{
    return p.price;
})
console.log(mapf)
//find
const findf=product.find((p)=>{
    return p.pn=== "book";
})
console.log(findf)
//some
const somef=product.some((p)=>{
    return p.price < 90;
})
console.log(somef)
//every
const anyf=product.every((p)=>{
    return p.price > 5;
})
console.log(anyf)
