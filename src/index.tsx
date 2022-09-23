/* Libraries */
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

/* Types */
import { State } from './types/Redux';
import uiReducer from './reducers/ui';

/* Application files */
import App from './components/App';

const store: Store<State> = configureStore({ reducer: { ui: uiReducer } });

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
