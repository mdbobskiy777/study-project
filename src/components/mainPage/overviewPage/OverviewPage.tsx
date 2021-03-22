import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSubordinates, setFetching, setSubordinatesList } from "../../../redux/ducks/subordinates";

import OverviewPageStyled from "../../../styled/mainPage/overviewPage/OverviewPageStyled";
import { Col, Container, Row } from "react-bootstrap";
import Preloader from "../../../assets/images/preloader.svg";
import {AppDispatch, RootState} from "../../../redux/store";

type ParamType = {
    name:string
};

const OverviewPage:React.FC = ():JSX.Element => {

    const employerDataSelector = useSelector((state:RootState) => state. subordinates.employerData);
    const isFetchingSelector = useSelector((state:RootState) => state. subordinates.isFetching);
    const dispatch = useDispatch<AppDispatch>();
    const paramsName:ParamType = useParams();

    useEffect(() => {
        dispatch(setFetching(true));
        if (paramsName.name) dispatch(fetchSubordinates(paramsName.name));
    },
    [paramsName.name]);

    useEffect(() => {
        return () => {
            dispatch(setSubordinatesList([]));
        };
    },[]);

    return (
        <Container>
            <OverviewPageStyled.MainContainer>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <OverviewPageStyled.MyTittle>{paramsName.name}</OverviewPageStyled.MyTittle>
                        {
                            employerDataSelector[0]&&<OverviewPageStyled.MyDiv>
                                {(employerDataSelector[0])&&`Direct subordinates: ${employerDataSelector[0]}`}
                            </OverviewPageStyled.MyDiv>
                        }
                    </Col>
                </Row>
                <Row xl="12" lg="10" md="8" sm="8" xs="6">
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <OverviewPageStyled.MyUL>
                            {(employerDataSelector[1])?(
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                                employerDataSelector[1]["direct-subordinates"].map(
                                    ( subordinate: string , index: React.Key ) =>
                                        <OverviewPageStyled.MyLI key={index}>
                                            {subordinate}
                                        </OverviewPageStyled.MyLI>)):
                                !isFetchingSelector&&<div>Haven`t subordinates</div>
                            }
                            {
                                isFetchingSelector&&<div>
                                    <OverviewPageStyled.MyIMG src = {Preloader} />
                                </div>
                            }
                        </OverviewPageStyled.MyUL>
                    </Col>
                </Row>
            </OverviewPageStyled.MainContainer>
        </Container>
    );
};

export default OverviewPage;
