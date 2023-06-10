import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';


function HomepageHeader() {
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `url(${useBaseUrl('img/graphics/minuit12.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        zIndex: 0,
        padding: '0px !important',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(10, 39, 43,0.4)',
          height: '100%',
          width: '100%',
          minHeight: '500px', // Changed to minimum height of 500px
          color: 'white !important',
          paddingTop: '40px',
          paddingBottom: '40px',
          display: 'flex', // Added flex
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          flexDirection: 'column', // Stack child elements vertically
        }}
      >
        <div className="container">
          {/* <img src={`${useBaseUrl('img/graphics/logo3.png')}`} style={{width:400,"margin-bottom":20}}/> */}
          <h1 className="hero__title">Protect Climate Activists</h1>
          <p className="hero__subtitle" style={{ marginBottom: '40px'}}>Join us in fighting for the safety and freedom of those who risk everything for our planet.</p> {/* Changed the subtitle */}
          <div className={styles.buttons} style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                width: '100%', 
                flexWrap: 'wrap'
          }}>
            <Link
              className="button button--secondary button--lg button-homepage"
              to="/freehong"
              style={{ margin: '10px' }}
            >
              FREE HONG
            </Link>
            <Link
              className="button button--secondary button--lg button-homepage"
              to="/#stories"
              style={{ margin: '10px' }}
            >
              READ THE STORIES
            </Link>
            <Link
              className="button button--secondary button--lg button-homepage"
              to="https://regroop.club"
              style={{ margin: '10px' }}
            >
              JOIN REGROOP
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function KPICard({ number, subtitle }) {
  return (
    <div className="kpi-card">
      <h2>{number}</h2>
      <p>{subtitle}</p>
      <style jsx>{`
        .kpi-card {
          box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          width: 20%;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .kpi-card h2 {
          font-size: 2em;
        }

        .kpi-card p {
          font-size: 1em;
          color: #333;
          margin-bottom:0px;
        }

        @media screen and (max-width: 600px) {
          .kpi-card {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}



const KPISection = () => {
  const kpis = [
    { number: 1700, subtitle: "Environmental activists murdered globally in the past decade" },
    { number: 1, subtitle: "Average number of environmental activists killed every two days" },
    { number: 227, subtitle: "Record number of killings of environmental activists in 2020" },
    { number: 5, subtitle: "Number of key climate activists currently detained in Vietnam" },
  ];

  return (
    <section className='container'>
    <div className="kpi-row">
      {kpis.map((kpi, index) => (
        <KPICard key={index} number={kpi.number} subtitle={kpi.subtitle} />
      ))}
      <style jsx>{`
        .kpi-row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 0 -10px;
        }
      `}</style>
    </div>
    <p style={{marginTop:20,fontSize:12}}><i>Source: <a target="_blank" href="https://www.theguardian.com/environment/2022/sep/29/global-witness-report-1700-activists-murdered-past-decade-aoe">https://www.theguardian.com/environment/2022/sep/29/global-witness-report-1700-activists-murdered-past-decade-aoe</a></i></p>
    </section>
  );
}

function StoryCard({ heroImage, name, title, content, link }) {
  return (
    <div className="story-card">
      <img src={`${useBaseUrl(heroImage)}`} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{content}</p>
        {link && <Link to={link}>Learn More</Link>}
      </div>
      <style jsx>{`
        .story-card {
          box-sizing: border-box;
          width: 30%;
          max-width: 100%;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .story-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .story-card div {
          padding: 10px;
          padding-top:20px;
        }

        .story-card h2 {
          font-size: 1.25em;
        }

        .story-card h3 {
          font-size: 1.1em;
          color: #666;
        }

        .story-card p {
          font-size: 0.9em;
        }

        @media screen and (max-width: 600px) {
          .story-card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}



const StoryCardsSection = () => {


  const stories = [
    {
      heroImage: `img/graphics/hong.jpg`, //replace with the actual image path
      name: 'Hong Hoang',
      title: 'Dedication in the Face of Detention: Hong Hoang\'s Story',
      content: 'Hong Hoang, a dedicated climate advocate from Vietnam, devoted her life to combatting climate change and inspiring her community to join the cause. Despite her peaceful and educational initiatives, Hong now finds herself in detention. Join us in rallying support for Hong and countless other climate activists facing similar situations.',
      link: '/freehong',
    },
    // {
    //   heroImage: `img/graphics/chut.jpg`, //replace with the actual image path
    //   name: 'Chut Wutty',
    //   title: 'Legacy of a Guardian: Remembering Chut Wutty',
    //   content: 'Cambodian environmentalist Chut Wutty, who dedicated his life to investigating illegal logging, is one of the many we remember and honor. His bravery in the face of grave dangers echoes in the countless advocates who continue the work today. Their commitment to safeguarding our planet compels us to protect them in return.',
    // },
    // {
    //   heroImage: `img/graphics/joannah.jpeg`, //replace with the actual image path
    //   name: 'Joannah Stutchbury',
    //   title: 'The Echo of Joannah Stutchbury\'s Fight',
    //   content: 'Joannah Stutchbury was a remarkable environmental activist who was tragically shot outside her home in Kenya. Her work shone a spotlight on the beauty of our ecosystems and the importance of their preservation. Despite her tragic loss, her story continues to inspire the global community to protect the planet, and those who fight for it.',
    // },
    // {
    //   heroImage: `img/graphics/dom.jpeg`, //replace with the actual image path
    //   name: 'Dom Phillips and Bruno Pereira',
    //   title: 'The Unfinished Work of Dom Phillips and Bruno Pereira',
    //   content: 'Dom Phillips and Bruno Pereira, killed in Brazil\'s Amazon, were dedicated environmental defenders committed to enlightening the world about sustainable development. Their unfinished mission fuels our fight to protect climate activists, ensuring their work and sacrifices do not go in vain.',
    // },
  ];

  return (
    <section className="container main-section" id="stories" style={{marginTop:20}}>
    <h1 style={{marginBottom:20}}>Their stories</h1>
    <div className="story-cards">
      {stories.map((story, index) => (
        <StoryCard key={index} {...story} />
      ))}
      <style jsx>{`
        .story-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        @media screen and (max-width: 600px) {
          .story-cards {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
    </section>
  );
}




export default function Home() {

  return (
    <Layout
      title={`Protect Climate Activists`}
      description="Protect Climate Activists - Join us in fighting for the safety and freedom of those who risk everything for our planet.">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <section>
          <div className="container main-section" id="about">
            <h1 style={{marginBottom:20}}>About the cause</h1>
            <div className="row">
            <div className="col col--6">
              <img src={`${useBaseUrl("img/graphics/minuit12.jpg")}`} alt="degrade" style={{"width":"70%","margin-bottom":"0px"}}/>
              <div style={{fontSize: 12,marginBottom:20}}>
                <i>Image by <a href="https://www.instagram.com/collectifminuit12/" target="_blank" rel="noopener noreferrer">Collectif Minuit 12</a></i>
              </div>
            </div>
              <div className="col" style={{"text-align":"left"}}>
                <p>In every corner of the globe, we find everyday heroes – <b>climate activists</b>. From young advocates to seasoned campaigners, these individuals have committed themselves to one of the greatest causes of our time: <b>preserving our planet</b>. Their peaceful endeavors aim to educate, mobilize, and instill a sense of urgency within communities. These heroes harness a powerful blend of creativity and dedication to spark conversation and action about the critical issue of climate change.</p>
                <p><i>However, their valiant efforts are met with stark threats of violence and incarceration, underscoring the dire need to safeguard their rights and amplify their voices.</i></p>
              </div>
            </div>
          </div>
        </section>
        <KPISection/>
        <StoryCardsSection/>
        {/* <section className="light-green">
          <div className="container main-section">
            <h1>L'équipe éclaircies</h1>
            <p>🖐 Vous pouvez contacter l'équipe à <Link to="mailto:collectifeclaircies@gmail.com">collectifeclaircies@gmail.com</Link></p>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}
