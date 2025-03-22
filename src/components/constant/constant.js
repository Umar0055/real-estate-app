// import area start
// main start
import mainimg from '../../assets/mainimg.jpg';
// areas start
import areahouse from '../../assets/areahouse.jpg';
// pathners logos start
import Logo1 from '../../assets/logo-1-color.png'
import Logo2 from '../../assets/logo-2-color.png'
import Logo3 from '../../assets/logo-3-color.png'
import Logo4 from '../../assets/logo-4-color.png'
import Logo5 from '../../assets/logo-5-color.png'
import Logo6 from '../../assets/logo-6-color.png'
// home info img start
import homeinfo1 from '../../assets/homeinfo1.png';
import homeinfo2 from '../../assets/homeinfo2.jpg';
//  servies img start
import serviesicon from'../../assets/serviesicon.jpeg';



// main const start
const main = [
    {
        img: mainimg,
        title: "prefect way to buy and sell the house",
        text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut et perferendis dolorum sit dignissimos ipsa, alias, excepturi, veniam debitis. Modi assumenda dolore animi.",

    },
  
];
// main end

// partners  const logos start
const partnersLogos = [
   Logo1, Logo2, Logo3, Logo4, Logo5, Logo6
  ]
//   parhners logos end
// areas start
const areas =[{
    img: areahouse,
   details:"4rooms, 2bathrooms",
    title:"dha",
    text:"street 3 p4"

},{
    img: areahouse,
   details:"4rooms, 2bathrooms, ",
    title:"dha",
text:"street 3 p4"
},{
    img: areahouse,
    title:"dha",
    text:"street 3 p4",
        details:"4rooms, 2bathrooms, "

},
]
// home info start
const homeinfo=[{
    img:homeinfo1,
    pic:homeinfo2,
    title:"We help people to find their dream home",
    text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut et perferendis dolorum sit dignissimos ipsa, alias, excepturi, veniam debitis. Modi assumenda dolore animi.",
    btn:"get in touch"

}]
// startup start
const start =[
    {
        title:"let's simply begin with retiz",
        text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut et perferendis dolorum sit dignissimos ipsa, alias, excepturi, veniam debitis. Modi assumenda dolore animi.",
    btn:"get started"
    }
]
// reviews start
const reviews = [
    {
        title:",,",
        text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut et perferendis dolorum sit dignissimos ipsa, alias, excepturi, veniam debitis. Modi assumenda dolore animi.",
        name:"John Doe",
        username:"@johndoe",
        btnleft:"<",
        btnright:">"
    }
]
// servies start
const servies =[
    {
        img:serviesicon,
        title:"easy way to find",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut",   
    },
    {
       
        img:serviesicon,
        title:"easy way to find",
        text:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut ",
  
    },
    {
       
        img:serviesicon,
        title:"easy way to find",
       text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia architecto dolores reprehenderit laborum explicabo ut",   
    }
]
// footer start
const footer =[{
    title:"project",
    link1:"houses",
    link2:"room",
    link3:"flat"

},{
    title:"company",
    link1:"how we work",
    link2:"capital",
    link3:"security"

},{
    title:"momments",
    link1:"how we are",
    link2:"support us",
    

},{
    title:"help",
    link1:"condition",
    link2:"blog",
    link3:"contact"

},
]

export { main , partnersLogos, homeinfo, start, reviews,servies,footer,areas };
