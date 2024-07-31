import React from 'react'
import { withNamespaces } from 'react-i18next'

function Linkedin({ t }) {
  return (
    <>
    <section>
    <h2>{t('title1')}</h2>
    <div className='bluur'></div>
    <div className='bluur2'></div>
    <div className='linkedin-conteiner'>
    <iframe className="linkedin" src='https://c4a908e0931c4074a96dcdb0fd2ea7ba.elf.site' width='100%' height='800' frameBorder='0'></iframe>
  </div>
    </section>
  </>
  )
}

export default withNamespaces()(Linkedin);
