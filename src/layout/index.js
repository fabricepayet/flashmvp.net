import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import './index.css';

const MainContainer = styled.div`
  padding-top: 48px;
  background-color: white;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="FlashMVP: Votre application fonctionnelle en 4 semaines"
      meta={[
        {
          name: 'description',
          content:
            "FlashMVP vous accompagne dans la définition de votre MVP et le développement de la première version de votre produit, pour tester vos hypothèses de marché au plus tôt.",
        },
        {
          name: 'keywords',
          content:
            'flashmvp, mvp, application, web, mobile, réunion, lean-startup, agile, startup, 974',
        },
      ]}
    />
    <MainContainer>{children()}</MainContainer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
