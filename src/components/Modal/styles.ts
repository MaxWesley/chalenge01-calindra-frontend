import styled from 'styled-components';

export const Viewer = styled.div`
    max-width: 800px;
    max-height: 500px;

    a {
        display: flex;
        background-color: #FFFFFF;

        text-decoration: none;

        span {        
            min-width: 162.81px;
            height: 140px;

            display: flex;
            align-items: center;

            padding: 1rem;
            background-color: #ff910055;

            font-weight: 300;
            font-size: 18px;
            letter-spacing: 2px;

            color: #474747;
        }

        h2 {
            padding: 1rem 1rem;

            color: #474747CC;

            font-weight: 500;
        }

        p {
            color: #474747CC;

            padding: 1rem 1rem;
        }

        margin-bottom: 1rem;
        border-bottom: 1px solid #47474722;

        transition: filter 0.3s;
        
        &:hover {
            filter: brightness(0.98);
        }
    }
`;