import React from 'react';
import styled from 'styled-components';

const ServiceItem = styled.div`
  margin-top: 24px;
  background-color: white;
  padding: 12px 0;
  width: 230px;
  border: 1px solid #d6d6d6;
  border-top: solid 4px #36bfb1;
  margin-right: 48px;

  h3 {
    text-transform: capitalize;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }
`;

const ServiceIcon = styled.div`
  font-size: 52px;
  color: #f2594b;
  text-align: center;
  margin-top: 12px;
  background-color: white;
`;

const ServiceItemInner = styled.div`
  padding: 12px 24px;

  p {
    font-size: 16px;
    margin-bottom: 1.8em;
  }
`;

export default props => (
  <ServiceItem>
    <ServiceItemInner>
      <ServiceIcon>
        <i className={props.icon} />
      </ServiceIcon>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </ServiceItemInner>
  </ServiceItem>
);
