import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.color};
`;

export default function ColorButtonExport(props) {
  return <Button color={props.value} active={props.active} type="button" />;
}

ColorButtonExport.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};
