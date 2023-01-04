import styled from 'styled-components'

export const Wrapper = styled.div<{color?: string}>`
    align-items: center;
    display: flex;
    justify-content: space-around;
    p {
        position: absolute;
        margin: 0px;
        font-size: 24px;
        color: ${({color}) => color};
    }
`