import * as React from 'react';
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = () => {
            window.history.go(-1);
        };
        this.goHome = () => {
            window.location.href = '/';
        };
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch() {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            const { info } = this.props;
            return React.createElement("h1", null, info || React.createElement("div", null, "\u9875\u9762\u51FA\u73B0\u9519\u8BEF,\u52A0\u8F7D\u5931\u8D25"));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=errorBoundary.js.map