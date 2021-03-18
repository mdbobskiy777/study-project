import styled from 'styled-components';
import {ListGroup} from 'react-bootstrap';

const OverviewPageStyled = {
    MainContainer: styled.div`
      text-align: center;
      margin: 20px auto;
      padding: 10px;
      max-width: 25%;
      background: whitesmoke;
    `,
    MyUL: styled(ListGroup)`
      margin: 10px auto;
      padding: 10px;
      background: white;
    `,
    MyLI: styled(ListGroup.Item)`
      width: 100%;
      margin: 0 auto;
    `,
    MyTittle: styled.div`
      background: white;
      margin: 5px auto;
      padding: 2px;
      font-size: 1.5em;
    `,
    MyDiv: styled.div`
      font-size: 1.25em;
    `
}
export default OverviewPageStyled;
/*
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
`*/
