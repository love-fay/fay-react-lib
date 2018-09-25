import React from 'react';
import Test from '../test';
import Test2 from '../test2';
import Home from '../home';
// import LegalInstrument from '../business/legal-instrument';
// import CaseOnFile from '../business/case-on-file';
// import BasicSupport from '../business/basic-support';
// import MessageCenter from '../business/message-center';
// import PetitionLetter from './business/petition-letter';
// import Division from '../business/division';
// import Review from '../business/review';
import Login from '../business/login';
// import UnderMaintenance from 'rjd/res/business/underMaintenance';

export default {
    'test': <Test a={1}/>,
    'test2': <Test2/>,
    // 'case-on-file': <CaseOnFile/>,
    // 'message-center': <MessageCenter/>,
    // '/petition-letter': <LegalInstrument/>,
    // 'division': <Division/>,
    // 'spgl': <TrialManagement/>,
    // 'sp': <Review/>,
    // '/gz': <LegalInstrument/>,
    // '/dyzx': <LegalInstrument/>,
    // '/dzda': <LegalInstrument/>,
    // '/fxpt': <LegalInstrument/>,
    // '/gxjh': <LegalInstrument/>,
    // 'uums': <BasicSupport/>,
    // '/yxjk': <LegalInstrument/>,
    'login': <Login/>,
    // 'error': <UnderMaintenance/>,
    '': <Home/>
}