import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

function Logo() {
  return (
   <Image
    src="/logo.png"
    alt="Logo Harry Potter Quiz"
      width={300}
      height={100}
   />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizLogo;