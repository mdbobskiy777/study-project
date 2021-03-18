import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {fetchSubordinates} from '../../../redux/employersReducer';
import OverviewPageStyled from "../../../styled/mainPage/overviewPage/OverviewPageStyled"

const OverviewPage = () => {

    const employerDataSelector = useSelector(state => state.employersReducer.employerData);
    const dispatch = useDispatch();
    const paramsName = useParams();

    useEffect(() => {
        if (paramsName.name) dispatch(fetchSubordinates(paramsName.name));

    }, [paramsName.name]);

    return (
        <OverviewPageStyled.MainContainer>
            <OverviewPageStyled.MyTittle>{paramsName.name}</OverviewPageStyled.MyTittle>
            <OverviewPageStyled.MyDiv>{`Direct subordinates: ${employerDataSelector[0]}`}</OverviewPageStyled.MyDiv>
            <OverviewPageStyled.MyUL>
                {(employerDataSelector[1]) ? employerDataSelector[1]["direct-subordinates"].map((e, i) => {
                    return <OverviewPageStyled.MyLI key={i}>{e}</OverviewPageStyled.MyLI>
                }) : <div>Haven`t subordinates</div>}
            </OverviewPageStyled.MyUL>
        </OverviewPageStyled.MainContainer>
    )
}

export default OverviewPage;
