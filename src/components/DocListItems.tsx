import React from 'react';
import styled from 'styled-components';
import doc from '../assets/doc.png';

const ListItemContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid #2B2D31;
    background: #2B2D31;
    cursor: pointer;
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
`;

const DocumentIcon = styled.img`
  margin-right: 0.5rem;
`;

const DocumentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocumentDate = styled.p`
  font-size: 0.75rem;
  color: #7C8187;
`;

const DocumentName = styled.h1`
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-weight: normal;
  transition: color 0.2s;

  &:hover {
    color: #E46643;
  }
`;

interface DocumentListItemProps{
    name: string;
    date: string;
}

const DocumentListItem: React.FC<DocumentListItemProps> =({name, date}) => {
    return (
        <ListItemContainer>
            <DocumentIcon src={doc} alt='doc'  />
            <DocumentInfo>
                <DocumentDate>{date}</DocumentDate>
                <DocumentName>
                    {name}
                </DocumentName>
            </DocumentInfo>
        </ListItemContainer>
    )
}
export default DocumentListItem;