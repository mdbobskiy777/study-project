import "bootstrap/dist/css/bootstrap.min.css";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {Col, Container, Row} from "react-bootstrap";

import {fetchEmployersList, setFetching} from "../../redux/ducks/employers";
import StyledComponents from "../../styled/mainPage/MainPageStyled";
import {setSearchedName} from "../../redux/ducks/searchedName";

import Preloader from "../../../src/assets/images/preloader.svg";

const MainPage = ():JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const employersSelector = useSelector(state => state.employers.employers);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const searchedNameSelector = useSelector(state => state.searchedName.searchedName);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isFetchingSelector = useSelector(state => state.employers.isFetching);

    const dispatch = useDispatch();

    const [isValidName, setValid] = useState(null);
    const [errorShowing, setErrorShowing] = useState(false);

    const history = useHistory();

    useEffect(() => {
        dispatch(setFetching(true));
        dispatch(fetchEmployersList());
    }, []);

    useEffect(() => {

        if (isValidName) {
            history.push(`/employers/${searchedNameSelector}`);
            dispatch(setSearchedName(""));
            setErrorShowing(false);

        } else if(!isValidName){
            if(searchedNameSelector===""){
                setErrorShowing(false);
            }else {
                setErrorShowing(true);
            }
        }

    }, [isValidName]);

    const checkValidName = () => {
        // eslint-disable-next-line no-debugger
        setValid(searchEmployer(searchedNameSelector));
    };

    const searchEmployer = (name: string) => employersSelector.includes(name);

    const OnSearchClickHandler = () => {
        checkValidName();
    };

    return (
        <Container>
            <StyledComponents.MainContainer>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <StyledComponents.MyTitle>Enter the employee name</StyledComponents.MyTitle>
                        <StyledComponents.SearchFieldContainer>
                            <StyledComponents.MyInput type='text' placeholder='Enter name here'
                                onChange={(e: { target: { value: string; }; }) => {
                                    setErrorShowing(false);
                                    setValid(null);
                                    dispatch(setSearchedName(e.target.value));
                                }}/>
                            <StyledComponents.MyBtn
                                onClick={() => OnSearchClickHandler()}>Search</StyledComponents.MyBtn>
                        </StyledComponents.SearchFieldContainer>
                        {(errorShowing) && (<StyledComponents.MyErrorDiv>
                                Wrong employer name! Please enter correct name</StyledComponents.MyErrorDiv>
                        )}
                    </Col>
                </Row>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <StyledComponents.MyUL>
                            {(isFetchingSelector) ?
                                <div>
                                    <StyledComponents.MyIMG src = {Preloader} />
                                </div> : (
                                    employersSelector.map((employee: string,
                                        index: React.Key | null | undefined) => {
                                        return <StyledComponents.MyLI key={index}>{employee}</StyledComponents.MyLI>;
                                    })

                                )}
                        </StyledComponents.MyUL>
                    </Col>
                </Row>
            </StyledComponents.MainContainer>
        </Container>
    );

};

export default MainPage;
