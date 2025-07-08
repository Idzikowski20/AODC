import React from 'react'
import { withNamespaces } from 'react-i18next';
import BasicForm from '../BasicForm/BasicForm'
import { MdOutlineEmail } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";

function dzialhandlowy({ t }) {
  return (
    <>
    <div className="jm-server-area">
      <div className="container-fluid p-0">
        <div className="jm-datacenter-wrap bg-default">
          <div className='content'>
            <div className='contact-content-title'>
                <h1 className='animate__animated animate__backInDown'>{t('1')}</h1>
            </div>
            <div className='handlowy-box-container'>
            <div className='handlowcy-albo'>{t('3')}</div>
            <div className='handlowcy-transfer'><FaExchangeAlt /></div>
              <div className='handlowy-container'>

                <div className='handlowcy-container'>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Ewa.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Ewa Filipiak</span></div>
                            <div className='handlowiec-details-desc'>{t('2')}</div>
                            <div className='handlowiec-details-desc'><Link to="mailto:filipiak@aodc.pl"><div className='handlowiec-icon'><MdOutlineEmail /></div></Link> filipiak@aodc.pl</div>
                            <div className='handlowiec-details-desc'><Link to="tel:(+48)577414900"><div className='handlowiec-icon'><BsTelephone /></div></Link>  +48 577 414 900</div>
                        </div>
                    </div>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/konrad.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Konrad Hołowacz</span></div>
                            <div className='handlowiec-details-desc'>Business Development Manager </div>
                            <div className='handlowiec-details-desc'><Link to="mailto:konrad.holowacz@aodc.pl"><div className='handlowiec-icon'><MdOutlineEmail /></div></Link> 	konrad.holowacz@aodc.pl</div>
                            <div className='handlowiec-details-desc'><Link to="tel:(+48)533 327 613"><div className='handlowiec-icon'><BsTelephone /></div></Link>  +48 533 327 613</div>
                        </div>
                    </div>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Arkadiusz.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                                <div className='handlowiec-details-desc'><span>Arkadiusz Jaworski</span></div>
                                <div className='handlowiec-details-desc'>Key Account Manager</div>
                                <div className='handlowiec-details-desc'><Link to="mailto:arkadiusz.jaworski@aodc.pl"><div className='handlowiec-icon'><MdOutlineEmail /></div></Link> arkadiusz.jaworski@aodc.pl</div>
                                <div className='handlowiec-details-desc'><Link to="tel:(+48)577703457"><div className='handlowiec-icon'><BsTelephone /></div></Link>  +48 577 703 457</div>
                        </div>
                    </div>

                </div>
              </div>
              <div className='contact-form-container'>
                <BasicForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default withNamespaces()(dzialhandlowy);

