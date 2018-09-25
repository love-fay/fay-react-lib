import React from 'react';
import Layout from '../../layout/1-1';
import CourtBasicSupport from 'court-basic-support';
import MessageNotice from '../message-center/messageNotice'

export default () => {
    return (
        <Layout>
            <MessageNotice />
            <CourtBasicSupport/>
        </Layout>
    )
}