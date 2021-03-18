import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEmployersList, setSearchedName} from '../../redux/employersReducer';
import {useHistory} from 'react-router';

const MainContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  max-width: 40%;
  overflow: hidden;
  background: whitesmoke;
`
const MyTitle = styled.div`
  font-size: 1.5em;
`
const MyErrorDiv = styled.div`
  font-size: 1em;
  color: darkred;
  border: 1px solid darkred;
  width: 80%;
  margin: 5px auto;
  padding: 5px;
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

const MyUL = styled(ListGroup)`
  margin: 10px auto;
  padding: 10px;
  background: white;
`
const MyLI = styled(ListGroup.Item)`
  width: 100%;
  margin: 0 auto;
`

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
        <MainContainer>
            <MyTitle>Enter the employee name</MyTitle>
            <SearchFieldContainer>
                <MyInput type='text' placeholder='Enter name here' onChange={(e) => {
                    setErrorShowing(false)
                    dispatch(setSearchedName(e.target.value))
                }}/>
                <MyBtn onClick={() => OnSearchClickHandler()}>Search</MyBtn>
            </SearchFieldContainer>
            {(errorShowing) ? <MyErrorDiv>Wrong employer name! Please enter correct name</MyErrorDiv> : null}
            <MyUL>
                {(employersSelector) ? employersSelector.map((e, i) => {
                    return <MyLI key={i}>{e}</MyLI>
                }) : <div>Haven`t data to show</div>}
            </MyUL>
        </MainContainer>
    )

}

export default MainPage;
