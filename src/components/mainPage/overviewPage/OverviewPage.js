import React, {useEffect} from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {fetchSubordinates} from "../../../redux/employersReducer";

const MainContainer = styled.div`
  text-align: center;
  margin: 20px auto;
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
    const employerDataSelector = useSelector(state => state.employersReducer.employerData)
    const dispatch = useDispatch()
    const paramsName = useParams()

    useEffect(() => {
        if (paramsName.name) dispatch(fetchSubordinates(paramsName.name))

    }, [paramsName.name])

    return (
        <MainContainer>
            <MyTittle>{paramsName.name}</MyTittle>
            <MyDiv>{`Direct subordinates: ${employerDataSelector[0]}`}</MyDiv>
            <MyUL>
                {(employerDataSelector[1]) ? employerDataSelector[1]["direct-subordinates"].map((e, i) => {
                    return <MyLI key={i}>{e}</MyLI>
                }) : <div>Haven`t subordinates</div>}
            </MyUL>
        </MainContainer>
    )
}
export default OverviewPage
