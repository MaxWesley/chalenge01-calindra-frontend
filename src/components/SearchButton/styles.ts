import styled from 'styled-components';

interface ContainerProps {
    active?: boolean;
}

export const Container = styled.button<ContainerProps>`
    height: 4rem;
    
    padding: 1rem;

    border-radius: 1rem;
    margin-left: 1rem;

    cursor: pointer;

    transition: filter 0.3s;

    background-color: ${props => props.active ? "#00865e" : "#787A91"};

    color: #EEEEEE;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 3px;
        
        margin: 0 0.5rem;

        text-transform: uppercase;
    }

    &:hover {
        filter: brightness(0.8);
    }
`;