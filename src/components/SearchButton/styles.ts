import styled from 'styled-components';

export const Container = styled.button`
    height: 4rem;
    
    padding: 1rem;

    border-radius: 1rem;
    margin-left: 1rem;

    cursor: pointer;

    transition: filter 0.3s;

    background-color: #787A91;

    color: #EEEEEE;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 1rem;
        margin-left: 0.5rem;

        text-transform: uppercase;
    }

    &:hover {
        filter: brightness(0.8);
    }
`;