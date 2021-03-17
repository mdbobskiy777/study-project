import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import {ListGroup} from "react-bootstrap";

const MainContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  max-width: 25%;
  background: whitesmoke;
`
const MyUL = styled(ListGroup)`
  margin: 10px auto;
  padding: 10px;
  background: white;
`
const MyLI = styled(ListGroup.Item)`
  width: 100%;
  margin: 0 auto;
`
const MyTittle = styled.div`
  background: white;
  margin: 5px auto;
  padding: 2px;
  font-size: 1.5em;
`
const MyDiv = styled.div`
  font-size: 1.25em;
`
const OverviewPage = () => {
    return (
        <MainContainer>
            <MyTittle>Leanna Hogg</MyTittle>
            <MyDiv>Direct subordinates:</MyDiv>
            <MyUL>
                <MyLI>Vincent Todd</MyLI>
                <MyLI>Faye Oneill</MyLI>
                <MyLI>Lynn Haigh</MyLI>
                <MyLI>Aila Hodgson</MyLI>
            </MyUL>
        </MainContainer>
    )
}
export default OverviewPage
