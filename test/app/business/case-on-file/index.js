import React from 'react';
import Layout from '../../layout/1-1';
import CaseOnFile from 'court-case-on-file';
import MessageNotice from '../message-center/messageNotice'

export default () => {
    return (
        <Layout minWidth={0}>
            <MessageNotice />
            <CaseOnFile offsetTop={50}/>
        </Layout>
    )
}