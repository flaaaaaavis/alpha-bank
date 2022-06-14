import styled from 'styled-components';

export const StyledTransactionsCard = styled.section`    
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 0;
        span {
            font-family: 'Oxygen', sans-serif;
            font-size: 30px;
            color: #000000;
        }
        .red {
            color: #FF3D00;
        }
        .green {
            color: #007366;
        }
`;
