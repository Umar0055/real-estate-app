 import React from 'react'
import Main from '../../components/header/main'
import Partners from '../../components/partners/partners'
import Areas from '../../components/areas/areas'
import Homeinfo from '../../components/homeinfo/homeinfo'
import Start from '../../components/start/start'
import Reviews from '../../components/reviews/reviews'
import Servies from '../../components/services/servies'
import Foooter from '../../components/footer/footer'
import {main ,partnersLogos,areas ,homeinfo,start,reviews,servies,footer} from '../../components/constant/constant'

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

<section className="areas-sec" >

<header>
  <h2 className="card-h2">popular areas</h2>
</header>

<div className="areas-posts">

  <ul className="areas-posts-list">

    {areas.map((areas, index)=>{
      return <Areas key={index} img={areas.img} title={areas.title} text={areas.text} details={areas.details}/>
    })}
  </ul>

</div>

</section>
  <section className='servies'>
    <h3 className='servies-heading'>why to choose us</h3>

 
  <div className="servies-sec">
{
  servies.map((servies,index)=>{
    return <Servies key={index} img={servies.img} title={servies.title} text={servies.text} />
  })
}
</div>
   </section>

  <section className="reviews-sec">
    {
      reviews.map((reviews,index)=>{
        return <Reviews key={index} title={reviews.title} text={reviews.text} name={reviews.name} username={reviews.username} btnleft={reviews.btnleft} btnright={reviews.btnright} />
      })
    }
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
  <footer className="footer">
  <div class="footer-section-left">
  <div className='footer-box'>
                <h2 class="footer-title">rentiz</h2>
                </div>
                <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul class="footer-social">
            <li>insta</li>
            <li>whatapp</li>
            <li>gmail</li>

          </ul>
            </div>
{
  footer.map((footer,index)=>{
    return <Foooter key={index} title={footer.title} link1={footer.link1} link2={footer.link2} link3={footer.link3} />
  }
)}
  </footer>
  </>
  )
}
