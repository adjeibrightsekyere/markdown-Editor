import React from "react";
import styled from "styled-components";
import save from '../../assets/save.png';

const SaveButtonContainer = styled.div`
    display: flex;
    border: 1px solid #E46643;
    background: #E46643;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.2s;

    &:hover {
        background: #F39765;
    }
    @media (min-width: 768px) {
    width: 9rem;
  }
`;

const SaveIcon = styled.img`
    width: 1rem;
    height: 1rem;

    @media (min-width: 768px) {
        width: 1rem;
        height: 1rem;
    }
`;

const SaveText = styled.h1`
    display: none;
    font-size: 0.875rem;
    font-weight: normal;
    color: white;
    font-family: 'Roboto', sans-serif;

    @media (min-width: 768px) {
        display: block;
    }
`;

interface SaveButtonProps {
    onSave: () => void;
}
const SaveButton: React.FC<SaveButtonProps> = ({ onSave }) => {
    return (
        <SaveButtonContainer onClick={onSave} >
            <SaveIcon

                src={save} alt='save' />
            <SaveText >Save Changes</SaveText>
        </SaveButtonContainer>
    )
}
export default SaveButton;