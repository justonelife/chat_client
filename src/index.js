import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, 
         faPlus, 
         faUserPlus, 
         faCog, 
         faTimes, 
         faEraser, 
         faUsers, 
         faPaperclip,
         faImage,
         faLaughSquint,
         faSignOutAlt,
         faAddressCard,
         faCamera} from '@fortawesome/free-solid-svg-icons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

library.add(fab, 
            faCaretDown, 
            faPlus, 
            faUserPlus, 
            faCog, 
            faTimes, 
            faEraser, 
            faUsers, 
            faPaperclip,
            faImage,
            faLaughSquint,
            faSignOutAlt,
            faAddressCard,
            faCamera);

var store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)