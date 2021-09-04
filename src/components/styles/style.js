import styled from 'styled-components'

export const Button = styled.button`
    background-color: #3492b1;
    padding: 5px;
    margin-left: 10px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    :focus {
        background-color: #63708c;
    }
    :hover {
        background-color: #63708c;
    }
    :disabled {
        background-color: rgb(83 109 117);
        border: #63708c;
    }

`

export const StyledInput = styled.input`
    padding: 5px;
    border: 3px solid #63708c;
    border-radius: 5px;
    outline: none;
`

export const MainContainer = styled.div`
    background-color: #5d8d9c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    color: white;
    font-size: 1.4em;
`

export const Item = styled.div`
    cursor: pointer;
    border: 2px solid #416875;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    min-width: 450px;
    flex: 1
`

export const List = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`