import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextButton = styled.button`
  margin-right: .5rem;
  padding: .5rem 1rem;
  font-size: .75rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.33;
  border-radius: 2px;
  border: solid 1px #171717;
  background: transparent;
`;

export default function TextButtonExport(props) {
  return (
    <TextButton type="button">
      {props.children}
    </TextButton>
  );
}

TextButtonExport.propTypes = {
  children: PropTypes.string.isRequired,
};
