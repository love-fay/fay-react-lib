/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Icon from 'rjd/icon';
import Space from 'rjd/space';
import '../style/index.less';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Show from './show';
import IM from '../../../../business/im';
import Share from '../../../../business/share';
import Search from '../../../../business/search';
import Question from '../../../../business/question';
import Nav from './nav';

class NavTop extends Component {

    static propTypes = {
        location: PropTypes.any,
        history: PropTypes.object,
    };

    initState={
        share: false,
        im: false,
        search: false,
        question: false
    };

    constructor (props) {
        super(props);
        this.state = this.initState;
    }

    handleClick = (e) => {
        let key = e.key;
        if (key !== undefined) {
            const {history} = this.props;
            if(key.indexOf('home') === 0){
                history.push('/');
            }else if(key.indexOf('share') === 0 || key.indexOf('im') === 0 || key.indexOf('search') === 0 || key.indexOf('question') === 0){
                this.setState({
                    ...this.initState,
                    [key]: true
                })
            }else if(key.indexOf('personal') !== 0 && key.indexOf('link') !== 0 && key.indexOf('more') !== 0){
                history.push(key);
            }
        }
    };

    onChange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    render () {
        const {share, im, search, question} = this.state;
        return [
            <Nav style={this.props.style} key={1} onChange={this.handleClick}/>,
            im && <Show key={2} onChange={(visible) => this.onChange('im', visible)} visible={im} title={<span><Icon type='jstx'/><Space/>即时通讯</span>}><IM/></Show>,
            share && <Show key={3} onChange={(visible) => this.onChange('share', visible)} visible={share} title={<span><Icon type='fx'/><Space/>分享</span>}><Share/></Show>,
            search && <Show key={4} onChange={(visible) => this.onChange('search', visible)} visible={search} title={<span><Icon type='ss'/><Space/>搜索</span>}><Search/></Show>,
            question && <Show key={5} onChange={(visible) => this.onChange('question', visible)} visible={question} title={<span><Icon type='wtfk'/><Space/>疑问</span>}><Question/></Show>
        ]
    }
}

export default withRouter(NavTop);
