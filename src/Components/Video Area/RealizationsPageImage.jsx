import React from 'react';
import { withNamespaces } from 'react-i18next';

function RealizationsPageImage({ t }) {
    return (
      <>
      <div className="jm-video-area">
        <div className="container-fluid p-0">
          <div className="jm-video-wrap-realizations bg-default">
            <div className='content'>
              <h1>{t('title10')}</h1> 
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  

  export default withNamespaces()(RealizationsPageImage);