import styled, { css } from "styled-components"
import { MyAnimation } from "../styles/animations/Animations"

type StyleBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' | 'outlined' 
    active?: boolean
}


export const StyledBtn = styled.button<StyleBtnPropsType>`
    border: none;
    padding: 10px 20px;
    color: snow;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;
    border-radius: 8px;

    &:hover {
        animation: ${MyAnimation} 1s ease-in;
    }

    ${props => props.btnType === 'outlined' && css<StyleBtnPropsType>`
    border: 2px solid ${props => props.color || '#a0ffc6'};
    color: ${props => props.color || '#a0ffc6'};
    background-color: transparent;
    &:hover {
        border: 2px solid #f01578;
        color: #f01578;
        }
    `
    }

    ${props => props.btnType === 'primary' && css<StyleBtnPropsType>`
        background-color: ${props => props.color || '#a0ffc6'};
        color: snow;
        &:hover {
        background-color: #5c6cff;
        }
    `
    }

    ${props => props.active && css<StyleBtnPropsType>`
        box-shadow: 1px 5px 5px rgba(210, 206, 206, 0.8)
    `}
    
`

// export const SuperButton = styled(StyledBtn)`
//   border-radius: 5px;
//   background-color: #84ff61;
//   color: gray;

//   &:hover {
//       animation: ${MyAnimation} 2s ease-in-out infinite;
//   }
// `
