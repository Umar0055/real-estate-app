 import React from 'react'
import Main from '../../components/header/main'
import Partners from '../../components/partners/partners'
import Homeinfo from '../../components/homeinfo/homeinfo'
import Start from '../../components/start/start'
import Reviews from '../../components/reviews/reviews'
import Servies from '../../components/services/servies'
import {main ,partnersLogos,homeinfo,start,reviews,servies} from '../../components/constant/constant'

export default function Home() {
  return (
    <>
    <main className="outer-box">
    {
main.map((main,index)=>{
  return <Main key={index} img={main.img} title={main.title} text={main.text} />
})
}
   </main>

<section className="partners-sec">

<h3 className=" title">featured in</h3>

<ul className="partners-list ">
  {
    partnersLogos.map((logo, index) => {
      return <Partners key={index} logo={logo} />
    }
    )
  }

</ul>

</section>
<section className="homeinfo-sec">

  {
    homeinfo.map((homeinfo,index)=>{
      return <Homeinfo key={index} img={homeinfo.img} pic={homeinfo.pic} title={homeinfo.title} text={homeinfo.text} btn={homeinfo.btn} />

    })
  }
  
</section>
<section className="startup-sec">
  {
    start.map((start,index)=>{
      return <Start key={index} title={start.title} text={start.text} btn={start.btn} />
    })
  }
  </section>
  <section className="reviews-sec">
    {
      reviews.map((reviews,index)=>{
        return <Reviews key={index} title={reviews.title} text={reviews.text} name={reviews.name} username={reviews.username} btnleft={reviews.btnleft} btnright={reviews.btnright} />
      })
    }
  </section>
  <section className='servies-heading'>
    <h3>why to choose us</h3>

 
  <div className="servies-sec">
{
  servies.map((servies,index)=>{
    return <Servies key={index} img={servies.img} title={servies.title} text={servies.text} />
  })
}
</div>
   </section>

  </>
  )
}
