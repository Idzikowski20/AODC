import React from 'react'

const Linkedin = () => {
  return (
    <section>
    <span>Sprawdź</span>
    <h2>Aktualności</h2>
    <p>Zapraszamy do zapoznania się z naszym Linkedinem</p>
    <span class="bg-watermark">News</span>
    <div className='linkedin-conteiner'>
    <div className='bluur'></div>
      <iframe className="linkedin" src='https://c4a908e0931c4074a96dcdb0fd2ea7ba.elf.site' width='1320' height='800' frameborder='0'></iframe>
    </div>
    <img className='bigbluur2' src='public/assets/img/Bluur/Bluur.png'></img>
    </section>
  )
}

export default Linkedin
