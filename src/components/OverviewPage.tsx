import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

import { fetchSubordinates, setFetching, setSubordinatesList } from '../redux/ducks/subordinates';
import OverviewPageStyled from '../styled/OverviewPageStyled';
import { AppDispatch, RootState } from '../redux/store';
import Preloader from '../assets/images/preloader.svg';

const OverviewPage = () : JSX.Element => {
    const employerDataSelector = useSelector((state:RootState) => state. subordinates.employerData);
    const isFetchingSelector = useSelector((state:RootState) => state. subordinates.isFetching);

    const dispatch = useDispatch<AppDispatch>();

    const paramsName: { name:string } = useParams();

    useEffect(() => {
        dispatch(setFetching(true));
        if (paramsName.name) dispatch(fetchSubordinates(paramsName.name));
    }, [paramsName.name]);

    useEffect(() => {
        return () => {
            dispatch(setSubordinatesList([]));
        };
    },[]);

    return (
        <Container>
            <OverviewPageStyled.MainContainer>
                <Row className="justify-content-center">
                    <Col xl="6" lg="6">
                        <OverviewPageStyled.MyTittle>{paramsName.name}</OverviewPageStyled.MyTittle>
                        {employerDataSelector[0] && (
                            <OverviewPageStyled.MyDiv>
                                {employerDataSelector[0] && (
                                    `Direct subordinates: ${employerDataSelector[0]}`
                                )}
                            </OverviewPageStyled.MyDiv>
                        )}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xl="6" lg="6">
                        <OverviewPageStyled.MyUL>
                            {employerDataSelector[1]?(
                                Object.values(employerDataSelector[1]).map(
                                    ( subordinate: string , index: React.Key ) =>
                                        <OverviewPageStyled.MyLI key={index}>
                                            {subordinate}
                                        </OverviewPageStyled.MyLI>
                                )) : (
                                !isFetchingSelector && (
                                    <div>Haven`t subordinates</div>
                                )
                            )}
                            {isFetchingSelector && (
                                <div>
                                    <OverviewPageStyled.MyIMG src={Preloader} />
                                </div>
                            )}
                        </OverviewPageStyled.MyUL>
                    </Col>
                </Row>
            </OverviewPageStyled.MainContainer>
        </Container>
    );
};

export default OverviewPage;
