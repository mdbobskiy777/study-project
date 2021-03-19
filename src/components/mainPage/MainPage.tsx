import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Col, Container, Row } from "react-bootstrap";

import { fetchEmployersList } from '../../redux/ducks/employers';
import StyledComponents from '../../styled/mainPage/MainPageStyled';
import { setSearchedName } from '../../redux/ducks/searchedName';

const MainPage = () => {
    // @ts-ignore
    const employersSelector = useSelector(state => state.employers.employers);
    // @ts-ignore
    const searchedNameSelector = useSelector(state => state.searchedName.searchedName);

    const dispatch = useDispatch();

    const [isValidName, setValid] = useState(false);
    const [errorShowing, setErrorShowing] = useState(false);

    const history = useHistory();

    useEffect(() => {

        dispatch(fetchEmployersList());

    }, []);

    const checkValidName = () => setValid(searchEmployer(searchedNameSelector));

    const searchEmployer = (name:string) => employersSelector.includes(name);

    const OnSearchClickHandler = () => {
        checkValidName();
        if (isValidName) {
            history.push(`/employers/${searchedNameSelector}`);
        } else setErrorShowing(true);
    }
    return (
        <Container>
            <StyledComponents.MainContainer>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <StyledComponents.MyTitle>Enter the employee name</StyledComponents.MyTitle>
                        <StyledComponents.SearchFieldContainer>
                            <StyledComponents.MyInput type='text' placeholder='Enter name here'
                                                      onChange={(e: { target: { value: any; }; }) => {
                                setErrorShowing(false)
                                dispatch(setSearchedName(e.target.value))
                            }}/>
                            <StyledComponents.MyBtn
                                onClick={() => OnSearchClickHandler()}>Search</StyledComponents.MyBtn>
                        </StyledComponents.SearchFieldContainer>
                        {(errorShowing) && (<StyledComponents.MyErrorDiv>Wrong employer name! Please enter correct
                                name</StyledComponents.MyErrorDiv>
                        )}
                    </Col>
                </Row>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <StyledComponents.MyUL>
                            {employersSelector ?
                                employersSelector.map((employee: any, index: React.Key | null | undefined) => {
                                    return <StyledComponents.MyLI key={index}>{employee}</StyledComponents.MyLI>
                                }) : (
                                    <div>Haven`t data to show</div>
                                )}
                        </StyledComponents.MyUL>
                    </Col>
                </Row>
            </StyledComponents.MainContainer>
        </Container>
    )

}

export default MainPage;
