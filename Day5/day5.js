
const data={
    fname:"AKSH",age:20
}
console.log(`${data.fname} age is ${data.age}`)
// destructure
const {fname,age}=data
console.log(`${fname} age is ${age}`)
//
const printname=({fname,age})=>{
    console.log(fname);
    console.log(age+" years old");
};
printname(data)
 
const data2={
    ug:"B.E", branch:"CSE"
}
//spread operator
const data3={rolln:26,...data,...data2}
console.log(data3)
console.log(data2)
console.log(data)

//Array
const a1=[1,2,3]
const a2=[4,5,6]
//rest
const [,...v]=a1
const a3=[...a1,...a2]
console.log(a3)
const x=[5,6]
let [a,b]=x
console.log(a+b)
// [a,b]=[b,a]
const t=a
const w=b
const y=[w,t]
console.log(a+b)

//Invalid 
// {
    //     img:"aaa",tit:"t-shirt",des:"T-shirttt",price:199,sc:{"black":{"S":5,"L":2},"Green":{"S":5,"M":9,"XL":2}}
    // },
    //  {
        //     img:"bbb",tit:"Pant",des:"Pantttt",price:1999,sc:{"blue":{"S":7,"Xs":10,"L":20},"Peach":{"S":5,"M":9,"XL":2}}
        // },
     const products=[
    {
         img:"ccc",
         tit:"kurti",
         des:"Kurtiiii",
         price:999,

         data:[
            {color:"red",
            sizes:[
                {size:"S",qty:5},
                {size:"M",qty:15}
                 ]
            },
            {color:"Blue",
            sizes:[
                {size:"S",qty:5},
                {size:"M",qty:15}
                 ]
            },
            {color:"Black",
            sizes:[
                {size:"S",qty:5},
                {size:"M",qty:15}
                 ]
            }
        ]
     }
]
