import styled from 'styled-components';
import {Button, ListGroup} from 'react-bootstrap';

const StyledComponents = {
    MainContainer: styled.div`
      text-align: center;
      margin: 20px auto;
      padding: 10px;
      max-width: 40%;
      overflow: hidden;
      background: whitesmoke;
    `,
    MyTitle: styled.div`
      font-size: 1.5em;
    `,
    MyErrorDiv: styled.div`
      font-size: 1em;
      color: darkred;
      border: 1px solid darkred;
      width: 80%;
      margin: 5px auto;
      padding: 5px;
    `,
    MyInput: styled.input`
      margin: 5px;
    `,
    SearchFieldContainer: styled.div`
      padding: 5px;
    `,
    MyBtn: styled(Button)`
      margin: 5px;
    `,
    MyUL: styled(ListGroup)`
      margin: 10px auto;
      padding: 10px;
      background: white;
    `,
    MyLI: styled(ListGroup.Item)`
      width: 100%;
      margin: 0 auto;
    `
}
export default StyledComponents;

/*
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
`*/
