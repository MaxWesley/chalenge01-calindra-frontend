import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    flex-direction: column;

    position: relative;

    span {
        color: #EEEEEE;

        font-size: 1.8rem;
        font-weight: 800;
        text-transform: uppercase;
    }

    @media screen and (max-width: 840px) {
        width: 100%;
    }
`;

interface InputSearchProps {
    reactBottom: boolean
}

export const InputSearch = styled.input<InputSearchProps>`
    outline: none;
    padding: 1rem;

    font-size: 1.2rem;

    border: 2px solid transparent;
    border-radius: 1rem;

    margin-top: 0.5rem;

    width: 30rem;
    height: 4rem;

    background-color: #141E61;
    color: #EEEEEE;

    text-transform: uppercase;
    letter-spacing: 2px;

    transition: border-color 0.3s;
    
    &:focus {
        border-color: #EEEEEEAA;
    }

    ${props => props.reactBottom ?
        `
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0;
        `
        :
        ``
    };

    @media screen and (max-width: 860px) {
        width: 100%;

        margin-bottom: 1rem;

        font-size: 1rem;
    }
`;

interface ContainerSuggestionsProps  {
    show: boolean
}

export const ContainerSuggestions = styled.div<ContainerSuggestionsProps>`

    max-height: 140px;
    overflow-y: scroll;

    position: fixed;

    bottom: 0;
    left: 0;

    width: 100%;
    min-height: 4rem;

    background-color: #FFFFFF;

    display: ${props => props.show ? 'block' : 'none'};

    p {
        color: #474747;

        padding: 1rem;

        cursor: pointer;

        transition: background-color 0.3s;

        &:hover {
            background-color: #47474711;
        }
    }
`;