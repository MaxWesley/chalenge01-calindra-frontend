import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    flex-direction: column;

    span {
        color: #EEEEEE;

        font-size: 1.8rem;
        font-weight: 800;
        text-transform: uppercase;
    }

    input {
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

        @media screen and (max-width: 860px) {
            width: 100%;

            margin-bottom: 1rem;

            font-size: 1rem;
        }
    }

    @media screen and (max-width: 840px) {
        width: 100%;
    }
`;