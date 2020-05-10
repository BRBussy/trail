import React, {useContext} from 'react';
import config from 'react-global-configuration';
import useWS, {WSState} from 'utilities/WS';

// tslint:disable-next-line:no-empty-interface
interface EventContext {
    state: WSState
}

const Context = React.createContext({} as EventContext);

export default function EventContext({children}: { children?: React.ReactNode }) {
    const {
        state
    } = useWS({url: config.get('eventURL')})

    return (
        <Context.Provider
            value={{
                state
            }}
        >
            {children}
        </Context.Provider>
    );
};

export function useEventContext() {
    return useContext(Context);
}