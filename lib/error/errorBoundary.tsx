import * as React from 'react';

interface Props {
	info?: string | React.ElementType,
	children: React.ReactElement
}

interface State {
	hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State>{

	constructor(props: Readonly<Props>){
		super(props);
		this.state={
			hasError: false,
		}
	}

	componentDidCatch(){
		this.setState({hasError: true});
	}

	goBack = () => {
		window.history.go(-1);
	};

	goHome = () => {
		window.location.href = '/';
	};

	render(){
		if(this.state.hasError){
			const {info} = this.props;
			return <div>{info || <div>Something went wrong.<button onClick={this.goBack}>back</button></div>}</div>;
		}
		return this.props.children;
	}
}
