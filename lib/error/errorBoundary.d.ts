import * as React from 'react';
interface Props {
    info?: string | React.ElementType;
    children: React.ReactElement;
}
interface State {
    hasError: boolean;
}
export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Readonly<Props>);
    componentDidCatch(): void;
    goBack: () => void;
    goHome: () => void;
    render(): JSX.Element;
}
export {};
