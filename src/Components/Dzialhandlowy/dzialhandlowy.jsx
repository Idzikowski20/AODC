import React from 'react'
import BasicForm from '../BasicForm/BasicForm'
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

const dzialhandlowy = () => {
  return (
    <>
    <div className="jm-server-area">
      <div className="container-fluid p-0">
      <div className='bluur'></div>
      <div className='bluur2'></div>
        <div className="jm-datacenter-wrap bg-default">
          <div className='content'>
            <div className='contact-content-title'>
                <h1>Dział handlowy</h1>
            </div>
            <div className='handlowy-box-container'>
            <div className='handlowcy-albo'>ALBO</div>
            <div className='handlowcy-transfer'><FaExchangeAlt /></div>
              <div className='handlowy-container'>

                <div className='handlowcy-container'>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Ewa.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Ewa Filipiak</span></div>
                            <div className='handlowiec-details-desc'>Dyrektor ds. Handlowych</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><MdOutlineEmail /></div> filipiak@aodc.pl</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><SlScreenSmartphone /></div> +48 577 414 900</div>
                        </div>
                    </div>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Łukasz.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Łukasz Kazimierak</span></div>
                            <div className='handlowiec-details-desc'>Key Account Manager</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><MdOutlineEmail /></div> lukasz.kazimierak@aodc.pl</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><SlScreenSmartphone /></div> +48 533 342 473</div>
                        </div>
                    </div>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Arkadiusz.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Arkadiusz Jaworski</span></div>
                            <div className='handlowiec-details-desc'>Key Account Manager</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><MdOutlineEmail /></div> arkadiusz.jaworski@aodc.pl</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><SlScreenSmartphone /></div> +48 577 703 457</div>
                        </div>
                    </div>

                    <div className='handlowiec-box'>
                        <img src='/assets/img/team/Szymon.png' alt='handlowiec'/>
                        <div className='handlowiec-details'>
                            <div className='handlowiec-details-desc'><span>Szymon Judek</span></div>
                            <div className='handlowiec-details-desc'>Key Account Manager</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><MdOutlineEmail /></div> szymon.judek@aodc.pl</div>
                            <div className='handlowiec-details-desc'><div className='handlowiec-icon'><SlScreenSmartphone /></div> +48 533 337 897</div>
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

export default dzialhandlowy
