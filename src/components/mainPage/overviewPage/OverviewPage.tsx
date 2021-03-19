import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSubordinates } from "../../../redux/ducks/subordinates";
import OverviewPageStyled from "../../../styled/mainPage/overviewPage/OverviewPageStyled";
import { Col, Container, Row } from "react-bootstrap";

type ParamType = {
    name:string
}
const OverviewPage = ():JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const employerDataSelector = useSelector(state => state. subordinates.employerData);
    const dispatch = useDispatch();
    const paramsName:ParamType = useParams();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (paramsName.name) dispatch(fetchSubordinates(paramsName.name));

    }, 
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [paramsName.name]);

    return (
        <Container>
            <OverviewPageStyled.MainContainer>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <OverviewPageStyled.MyTittle>{paramsName.name}</OverviewPageStyled.MyTittle>
                        <OverviewPageStyled.MyDiv>
                            {`Direct subordinates: ${employerDataSelector[0]}`}
                        </OverviewPageStyled.MyDiv>
                    </Col>
                </Row>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <OverviewPageStyled.MyUL>
                            {(employerDataSelector[1]) ? employerDataSelector[1]["direct-subordinates"].map(
                                (subordinate: string , index: React.Key | null | undefined) =>
                                    <OverviewPageStyled.MyLI key={index}>
                                        {subordinate}
                                    </OverviewPageStyled.MyLI>) :
                                <div>Haven`t subordinates</div>}
                        </OverviewPageStyled.MyUL>
                    </Col>
                </Row>
            </OverviewPageStyled.MainContainer>
        </Container>
    );
};

export default OverviewPage;
