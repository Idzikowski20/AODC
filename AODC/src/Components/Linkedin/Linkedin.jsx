import React from 'react'

const Linkedin = () => {
  return (
    <>
    <section>
    <span>Sprawdź</span>
    <h2>Aktualności</h2>
    <p>Zapraszamy do zapoznania się z naszym Linkedinem</p>
    <img className='bigbluur2' src='public/assets/img/Bluur/Bluur.png'></img>
    <div className='bluur'></div>
    <span class="bg-watermark">News</span>
    <div className='linkedin-conteiner'>
    <iframe className="linkedin" src='https://c4a908e0931c4074a96dcdb0fd2ea7ba.elf.site' width='100%' height='800' frameborder='0'></iframe>
  </div>
    </section>
  </>
  )
}

export default Linkedin
