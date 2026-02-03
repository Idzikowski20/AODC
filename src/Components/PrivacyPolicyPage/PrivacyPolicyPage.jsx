import React from 'react';
import { withNamespaces } from 'react-i18next';
import './PrivacyPolicyPage.css';

function PrivacyPolicyPage({ t }) {
  const tableHeaders = t('privacyPolicy.section1.tableHeaders', { returnObjects: true });
  const tableRows = t('privacyPolicy.section1.tableRows', { returnObjects: true });
  const cookieTypes = t('privacyPolicy.section2.cookieTypes', { returnObjects: true });
  const section4Points = t('privacyPolicy.section4.points', { returnObjects: true });
  const section5Points = t('privacyPolicy.section5.points', { returnObjects: true });
  const section6Rights = t('privacyPolicy.section6.rights', { returnObjects: true });
  const section7Measures = t('privacyPolicy.section7.measures', { returnObjects: true });

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <section className="privacy-policy-section">
        <h1 className="privacy-policy-title">{t('privacyPolicy.title')}</h1>
        <p className="privacy-policy-date">{t('privacyPolicy.effectiveDate')}</p>
        <p className="privacy-policy-administrator">{t('privacyPolicy.administrator')}</p>
        <p className="privacy-policy-iod">{t('privacyPolicy.iodContact')}</p>
        </section>
        
        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section1.title')}</h2>
          <p>{t('privacyPolicy.section1.intro')}</p>
          
          <div className="privacy-policy-table-container">
            <table className="privacy-policy-table">
              <thead>
                <tr>
                  <th>{tableHeaders.purpose}</th>
                  <th>{tableHeaders.categories}</th>
                  <th>{tableHeaders.legalBasis}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{tableRows.contactForm.purpose}</td>
                  <td>{tableRows.contactForm.categories}</td>
                  <td>{tableRows.contactForm.legalBasis}</td>
                </tr>
                <tr>
                  <td>{tableRows.marketingB2B.purpose}</td>
                  <td>{tableRows.marketingB2B.categories}</td>
                  <td>{tableRows.marketingB2B.legalBasis}</td>
                </tr>
                <tr>
                  <td>{tableRows.analytics.purpose}</td>
                  <td>{tableRows.analytics.categories}</td>
                  <td>{tableRows.analytics.legalBasis}</td>
                </tr>
                <tr>
                  <td>{tableRows.security.purpose}</td>
                  <td>{tableRows.security.categories}</td>
                  <td>{tableRows.security.legalBasis}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section2.title')}</h2>
          <p>{t('privacyPolicy.section2.intro')}</p>
          
          <div className="privacy-policy-cookies">
            <div className="cookie-type">
              <h3>{cookieTypes.necessary.title}</h3>
              <p>{cookieTypes.necessary.description}</p>
            </div>
            
            <div className="cookie-type">
              <h3>{cookieTypes.analytical.title}</h3>
              <p>{cookieTypes.analytical.description}</p>
            </div>
            
            <div className="cookie-type">
              <h3>{cookieTypes.functional.title}</h3>
              <p>{cookieTypes.functional.description}</p>
            </div>
            
            <div className="cookie-type">
              <h3>{cookieTypes.thirdParty.title}</h3>
              <p>{cookieTypes.thirdParty.description}</p>
            </div>
          </div>
          
          <h3>{t('privacyPolicy.section2.management')}</h3>
          <p>{t('privacyPolicy.section2.managementDesc')}</p>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section3.title')}</h2>
          <p>{t('privacyPolicy.section3.desc')}</p>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section4.title')}</h2>
          <p>{t('privacyPolicy.section4.desc')}</p>
          <ul>
            {Array.isArray(section4Points) && section4Points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p>{t('privacyPolicy.section4.note')}</p>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section5.title')}</h2>
          <ul>
            {Array.isArray(section5Points) && section5Points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section6.title')}</h2>
          <p>{t('privacyPolicy.section6.intro')}</p>
          <ul>
            {Array.isArray(section6Rights) && section6Rights.map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
          <p>{t('privacyPolicy.section6.contact')}</p>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section7.title')}</h2>
          <p>{t('privacyPolicy.section7.intro')}</p>
          <ul>
            {Array.isArray(section7Measures) && section7Measures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </section>

        <section className="privacy-policy-section">
          <h2>{t('privacyPolicy.section8.title')}</h2>
          <p>{t('privacyPolicy.section8.desc')}</p>
        </section>

        <section className="privacy-policy-section contact-form-info">
          <h3>{t('privacyPolicy.contactFormInfo')}</h3>
          <p>{t('privacyPolicy.contactFormDetails')}</p>
        </section>
      </div>
    </div>
  );
}

export default withNamespaces()(PrivacyPolicyPage);
