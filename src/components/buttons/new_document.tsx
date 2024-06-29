import React from 'react';
import styled from 'styled-components';

const NewDocumentButton = styled.div`
    display: flex;
    border: 1px solid #E46643;
    background: #E46643;
    cursor: pointer;
    width: 13rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: background 0.2s;

  &:hover {
    background: #F39765;
  }
`;

const ButtonText = styled.h1`
     font-size: 0.875rem;
     font-family: 'Roboto', sans-serif;
     color: white;
     font-weight: normal;
`;

const NewDocument: React.FC = () => {
    return (

        <NewDocumentButton>
            <ButtonText>+ New Document</ButtonText>
        </NewDocumentButton>

    )
}
export default NewDocument;