import styled, { css } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #afafaf;
`

type StyledFormPropsType = {
    hiddenForm: boolean
}

export const Form = styled.form<StyledFormPropsType>`
    padding: 50px;
    display: ${props => props.hiddenForm
        ? 'none'
        : 'flex'
    };
    flex-direction: column;
    gap: 15px;
`
type StyledInputPropsType = {
    placeholder?: string
    border?: string
    borderRadius?: string
    bgc?: string
    scale?: boolean
}

export const Input = styled.input<StyledInputPropsType>`
    border: ${props => props.border
        ? props.border
        : null
    };
    border-radius: ${props => props.borderRadius
        ? props.borderRadius
        : null
    };
    background-color: ${props => props.bgc || null};
    &:hover {
        ${props => props.scale && css`
            transform: scale(1.1);
            animation: 4s ease-in;
`}
    }
`