import React from 'react';
import Layout from '../../layout/1-1';
import LegalInstrument from 'court-legal-instrument';
import {withRouter} from 'react-router-dom';
import {get} from 'rj-lib/location/search';

export default withRouter(({location}) => {
    const search = get(location);
    if(search && search.onlyEditor){
        return (
            <LegalInstrument/>
        )
    }
    return (
        <Layout minWidth={0}>
            <LegalInstrument offsetTop={50}/>
        </Layout>
    )
});