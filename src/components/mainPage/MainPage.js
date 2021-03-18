import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from 'react-redux';
import {fetchEmployersList, setSearchedName} from '../../redux/employersReducer';
import {useHistory} from 'react-router';
import StyledComponents from "../../../src/styled/mainPage/MainPageStyled"


const MainPage = () => {
    const employersSelector = useSelector(state => state.employersReducer.employers);

    const searchedNameSelector = useSelector(state => state.employersReducer.searchedName);

    const dispatch = useDispatch();

    const [isValidName, setValid] = useState(false);
    const [errorShowing, setErrorShowing] = useState(false);

    const history = useHistory();

    useEffect(() => {

        dispatch(fetchEmployersList());

    }, []);

    const checkValidName = () => {

        setValid(searchEmployer(searchedNameSelector));

    };

    const searchEmployer = (name) => {

        return employersSelector.includes(name);

    };

    const OnSearchClickHandler = () => {
        checkValidName();
        if (isValidName) history.push(`/employers/${searchedNameSelector}`);
        else setErrorShowing(true);
    }
    return (
        <StyledComponents.MainContainer>
            <StyledComponents.MyTitle>Enter the employee name</StyledComponents.MyTitle>
            <StyledComponents.SearchFieldContainer>
                <StyledComponents.MyInput type='text' placeholder='Enter name here' onChange={(e) => {
                    setErrorShowing(false)
                    dispatch(setSearchedName(e.target.value))
                }}/>
                <StyledComponents.MyBtn onClick={() => OnSearchClickHandler()}>Search</StyledComponents.MyBtn>
            </StyledComponents.SearchFieldContainer>
            {(errorShowing) ? <StyledComponents.MyErrorDiv>Wrong employer name! Please enter correct
                name</StyledComponents.MyErrorDiv> : null}
            <StyledComponents.MyUL>
                {(employersSelector) ? employersSelector.map((e, i) => {
                    return <StyledComponents.MyLI key={i}>{e}</StyledComponents.MyLI>
                }) : <div>Haven`t data to show</div>}
            </StyledComponents.MyUL>
        </StyledComponents.MainContainer>
    )

}

export default MainPage;
