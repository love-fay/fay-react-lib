import React from 'react';
import Route from './route';
import hoistStatics from 'hoist-non-react-statics';

export default Component => {
    const C = props => {
        const { wrappedComponentRef, ...remainingProps } = props;
        return (
            <Route
                children={routeComponentProps => (
                    <Component
                        {...remainingProps}
                        {...routeComponentProps}
                        ref={wrappedComponentRef}
                    />
                )}
            />

        )
    };
    return hoistStatics(C, Component);
}