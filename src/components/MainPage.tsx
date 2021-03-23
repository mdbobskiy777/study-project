import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

import { fetchEmployersList, setFetching } from '../redux/ducks/employers';
import StyledComponents from '../styled/MainPageStyled';
import { setSearchedName } from '../redux/ducks/searchedName';
import { AppDispatch, RootState } from '../redux/store';
import Preloader from '../assets/images/preloader.svg';

const MainPage = () : JSX.Element => {
    const employersSelector = useSelector((state:RootState) => state.employers.employers);
    const searchedNameSelector = useSelector((state:RootState) => state.searchedName.searchedName);
    const isFetchingSelector = useSelector((state:RootState) => state.employers.isFetching);

    const dispatch = useDispatch<AppDispatch>();

    const [isValidName, setValid] = useState<boolean | null>(null);
    const [errorShowing, setErrorShowing] = useState<boolean>(false);

    const history = useHistory();

    useEffect(() => {
        dispatch(setFetching(true));
        dispatch(fetchEmployersList());
    }, []);

    useEffect(() => {
        if (isValidName) {
            history.push(`/employers/${searchedNameSelector}`);
            dispatch(setSearchedName(''));
            setErrorShowing(false);
        } else if(!isValidName) {
            setErrorShowing(false);
            setErrorShowing(searchedNameSelector !== '');
        }
    }, [isValidName]);

    const checkValidName = () => {
        setValid(searchEmployer(searchedNameSelector));
    };

    const searchEmployer = (name: string):boolean => employersSelector.includes(name);

    const OnSearchClickHandler = () => {
        checkValidName();
    };

    const OnChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorShowing(false);
        setValid(null);
        dispatch(setSearchedName(event.target.value));
    };

    return (
        <Container>
            <StyledComponents.MainContainer>
                <Row className="justify-content-center">
                    <Col xl="6" lg="6">
                        <StyledComponents.MyTitle>Enter the employee name</StyledComponents.MyTitle>
                        <StyledComponents.SearchFieldContainer>
                            <StyledComponents.MyInput
                                type='text'
                                placeholder='Enter name here'
                                onChange={(event) => OnChangeInputHandler(event)}
                            />
                            <StyledComponents.MyBtn onClick={() => OnSearchClickHandler()}>
                                    Search
                            </StyledComponents.MyBtn>
                        </StyledComponents.SearchFieldContainer>
                        {errorShowing && (
                            <StyledComponents.MyErrorDiv>
                                    Wrong employer name! Please enter correct name
                            </StyledComponents.MyErrorDiv>
                        )}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xl="6" lg="6">
                        <StyledComponents.MyUL>
                            {isFetchingSelector ? (
                                <div>
                                    <StyledComponents.MyIMG src = {Preloader} />
                                </div> 
                            ) : (
                                employersSelector.map(( employee: string, index: React.Key ) => (
                                    <StyledComponents.MyLI key={index}>
                                        {employee}
                                    </StyledComponents.MyLI>
                                ))
                            )}
                        </StyledComponents.MyUL>
                    </Col>
                </Row>
            </StyledComponents.MainContainer>
        </Container>
    );
};

export default MainPage;
