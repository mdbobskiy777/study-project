import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";

/*
const a = "322"
*/

const MainContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  max-width: 40%;
  overflow: hidden;
  background: whitesmoke;
`
const EmployeeContentContainer = styled.div`
  background: white;
  max-width: 50%;
  margin: 5px auto;
  text-align: left;
  padding: 5px;
`
const MyTitle = styled.div`
  font-size: 1.5em;
`
const MyDiv = styled.div`
  font-size: 1.25em;
`
const MyInput = styled.input`
  margin: 5px;
`
const SearchFieldContainer = styled.div`
  padding: 5px;
`
const MyBtn = styled(Button)`
  margin: 5px;
`
const MainPage = () => {
    return (
        <MainContainer>
            <MyTitle>Enter the employee name</MyTitle>
            <SearchFieldContainer>
                <MyInput type="text" placeholder="Enter name here"/>
                <MyBtn>Search</MyBtn>
            </SearchFieldContainer>
            <EmployeeContentContainer>
                <MyDiv>Employee: Leanna Hogg</MyDiv>
                <MyDiv>Working position: marketing supervisor</MyDiv>
            </EmployeeContentContainer>
        </MainContainer>
    )
}
export default MainPage
