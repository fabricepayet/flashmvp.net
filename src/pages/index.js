import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { withPrefix } from 'gatsby-link';

import ServiceItem from '../components/ServiceItem';

const ServiceItemContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 74vw;
  margin: auto;
  flex-wrap: wrap;
  padding: 24px;
  background-color: whitesmoke;
`;

const Technology = styled.div`
  background-color: #8c8c8c;
  padding: 32px 0;
`;

const Page = styled.div`
  background-color: #8c8c8c;
  padding: 32px 0;
`;

const Services = styled.div`
  background-color: #eee;
  padding: 48px 0;
`;

const HeadlineOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 30;
  background-color: #000;
  opacity: 0.4;
`;

const HeadlineContainer = styled.div`
  max-width: 1080px;
  position: relative;
  z-index: 40;
  margin: auto;

  h1 {
    text-align: center;
    font-family: 'Cabin', sans-serif;
    word-wrap: break-word;
    text-transform: capitalize;
    color: white;
    font-size: 60px;
    font-weight: bold;
    line-height: 108px;
    margin-top: 0;
  }
`;

const Header = styled.header`
  padding: 160px 0;
  font-weight: 200;
  line-height: 28px;
  position: relative;
  overflow: hidden;
`;

const CallToAction = styled.a`
  background-color: #f2594b;
  border-radius: 40px;
  font-weight: 700;
  font-size: 28px;
  padding: 12px 48px;
  color: #ffffff;
  white-space: inherit;
  max-width: 100%;
  text-transform: uppercase;
  border: none;
  margin-left: 6px;

  &:hover {
    background-color: #dd3525;
    color: white;
    cursor: pointer;
  }
`;

const CallToActionContainer = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const HeaderWrapper = styled.div`
  // position: relative;
  // overflow: hidden;
`;

const SocialMedia = styled.div`
  // position: relative;
  // overflow: hidden;
`;

const Footer = styled.div`
  background-color: #5a5a5a;
  color: white;
  text-align: center;
  padding: 6px;
`;

const MvpContainer = styled.div`
  font-size: 22px;
  padding: 72px 0;
  background-color: white;
  text-align: center;

  p {
    font-style: italic;
    font-size: 1.4rem;
    color: #333;
    line-height: 36px;
  }

  span {
    font-size: 1.3rem;
  }
`;

const HowToContainer = styled.div`
  background-color: white;
  margin-top: 24px;
  padding: 24px 72px;
  width: 90vw;
`;

const HowTo = styled.div`
  padding: 48px 0 0 0;
  background-color: #e4e4e4;

  h2 {
    color: #36bfb1;
    font-family: 'Cabin', sans-serif;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 28px;
    margin: 0 0 12px;
  }
`;

const IndexPage = ({ data }) => (
  <Page>
    <Header>
      <HeaderWrapper>
        <HeadlineOverlay />
        <HeadlineContainer>
          <h1>
            Votre application fonctionnelle<br /> en moins de 4 semaines
          </h1>
          <CallToActionContainer>
            <CallToAction>Contactez nous</CallToAction>
          </CallToActionContainer>
        </HeadlineContainer>
        <Img
          sizes={data.background.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
        />
      </HeaderWrapper>
    </Header>

    <MvpContainer>
      <blockquote>
        <p>
          "<strong>Un MVP (Produit Minimum Viable)</strong> est la version d'un
          produit permettant à une équipe de collecter le maximum
          d'enseignements sur ses clients avec le minimum d'effort."
        </p>
        <span>Eric Ries, The Lean Startup</span>
      </blockquote>
    </MvpContainer>

    <HowTo>
      <h2>Comment ça marche ?</h2>
      <HowToContainer>
        <div className="how-to__step">
          <div className="how-to__step_number">1</div>
          <div className="how-to__text">Discussion autour de votre idée</div>
          <div className="text-center how-to__icon">
            <img src={withPrefix('/images/icon_idea.png')} alt="idea" />
          </div>
        </div>
        <hr />

        <div className="how-to__step">
          <div className="how-to__step_number">2</div>
          <div className="how-to__text">
            Définition du MVP et des fonctionnalités
          </div>
          <div className="text-center how-to__icon">
            <img src={withPrefix('/images/icon_puzzle.png')} alt="puzzle" />
          </div>
        </div>
        <hr />

        <div className="how-to__step">
          <div className="how-to__step_number">3</div>
          <div className="how-to__text">Phase de développement</div>
          <div className="text-center how-to__icon">
            <img src={withPrefix('/images/icon_code2.png')} alt="code" />
          </div>
        </div>
        <hr />

        <div className="how-to__step">
          <div className="how-to__step_number">4</div>
          <div className="how-to__text">Livraison de votre application</div>
          <div className="text-center how-to__icon">
            <img src={withPrefix('/images/icon_rocket.png')} alt="rocket" />
          </div>
        </div>
      </HowToContainer>
    </HowTo>

    <Technology>
      <div className="frontpage__technology_container row">
        <div className="frontpage__technology_item col-md-4">
          <img src={withPrefix('/images/react-logo-w.png')} alt="react logo" />
        </div>
        <div className="frontpage__technology_item col-md-4">
          <img src={withPrefix('/images/meteor-logo.png')} alt="meteor logo" />
        </div>
        <div className="frontpage__technology_item col-md-4">
          <img src={withPrefix('/images/ionic-logo-w.png')} alt="ionic logo" />
        </div>
      </div>
    </Technology>

    <Services>
      <h2>Nos Services</h2>
      <ServiceItemContainer>
        <ServiceItem
          icon="fa fa-mobile"
          title="Application Web & Mobile"
          description="Gagnez du temps sur la réalisation de votre application grâce à
                nos conseils et à notre expertise sur les technologies web et
                mobile."
        />
        <ServiceItem
          icon="fa fa-puzzle-piece"
          title="Conception Agile"
          description="Nous travaillons par cycle itératif, inspiré des méthodes
            agiles, afin d'assurer la meilleure réactivité de nos équipes
            tout au long de votre projet."
        />
        <ServiceItem
          icon="fa fa-globe"
          title="Solution Evolutive"
          description="Nous prenons en compte vos contraintes de mise à l'échelle et
            d'évolutivité lors des choix techniques et pendant tout le long
            du développement de votre produit."
        />
        <ServiceItem
          icon="fa fa-clock-o"
          title="Intégration continue"
          description="Grâce â l'intégration continue, vous pouvez à tout moment tester
            votre application, même pendant la phase de développement, afin
            de faciliter les retours."
        />
        <ServiceItem
          icon="fa fa-handshake-o"
          title="Conseil & Expertise"
          description="Pendant toute la durée de votre projet, un expert est à l'écoute
            de vos besoins et vous apporte ses meilleurs conseils pour la
            validation et l'éxécution de votre projet."
        />
        <ServiceItem
          icon="fa fa-check-circle-o"
          title="Composants génériques"
          description="Nous utilisons des composants génériques déja approuvés, afin
            d'accélérer le développement et d'assurer une meilleure
            maintenabilité."
        />
        <ServiceItem
          icon="fa fa-area-chart"
          title="Outils de suivi"
          description="Vous pouvez suivre le développement de votre application en toute
          transparence grâce à nos outils de suivi et nos réunions de projet
          hebdomadaires."
        />
        <ServiceItem
          icon="fa fa-wrench"
          title="Support & Assistance"
          description="Aprés la livraison de votre produit, nos équipes restent
          disponible pour le support et l'assistance nécessaire, pendant
          toute la durée de vie de votre projet."
        />
      </ServiceItemContainer>
    </Services>

    <SocialMedia>
      <div className="container">
        <div className="social-media__left text-center col-md-6 col-md-offset-3">
          <h4 className="text-center">
            Nous sommes aussi sur les réseaux sociaux. Rejoignez nous !
          </h4>
          <div>
            <a href="https://www.facebook.com/FlashMVPnet/" target="_blank">
              <i className="fa fa-facebook-official social-media__icon" />
            </a>
            <a href="https://twitter.com/FlashMVPnet" target="_blank">
              <i className="fa fa-twitter social-media__icon" />
            </a>
          </div>
        </div>
      </div>
    </SocialMedia>

    <Footer id="colophon" className="site-footer">
      <div className="footer__copyright">
        <a href="http://flashmvp.net">© 2018 FLASHMVP</a>
      </div>
    </Footer>
  </Page>
);

export const query = graphql`
  query SiteMeta {
    background: imageSharp(id: { regex: "/frontpage.jpg/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default IndexPage;
