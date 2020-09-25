import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import ChatZoneInit from './ChatZoneInit';

const MainBar = () => {
    const selectedChannel = useSelector(state => state.SelectChannel);

    var display = undefined;

    if (!selectedChannel) {
        display = <Dashboard />;
    } else {
        display = <ChatZoneInit key={selectedChannel + new Date()} />;
        // display = <ChatZoneInit />
    }
    return (
        <React.Fragment>
            {display}
        </React.Fragment>
    )
}

export default MainBar;