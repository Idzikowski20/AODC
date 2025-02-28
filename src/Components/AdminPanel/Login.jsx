import React from 'react';
import './Login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer className="my-5 gradient-form">

      <div className='row login-container'>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5 me-5">

            <div className="text-center">
              <h4 className="mt-1 mb-5 pb-1">Panel Administracyjny</h4>
            </div>

            <p>Zaloguj sie do Panelu</p>


            <MDBInput wrapperClass='mb-4' label='Nazwa uzytkownika' required id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Haslo' id='form2' required type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <button className="mb-4 w-100 gradient-custom-2 login-button">Zaloguj sie</button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Zapomniałeś hasła?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Przywróć
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </div>

    </MDBContainer>
  );
}

export default Login;