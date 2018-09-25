import React from 'react';
import Layout from '../../layout/1-1';
import PetitionLetter from 'court-petition-letter';
import './style/index.less';
import {prefix} from "../../classNamePrefix";

export default () => {
    const stylePrefix = prefix + '-petition-letter';
    return <Layout className={stylePrefix}><PetitionLetter/></Layout>;
}