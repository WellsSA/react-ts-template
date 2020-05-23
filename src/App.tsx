import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from 'routes';
import GlobalStyle from 'theme/global';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from 'store';
import { history } from 'services';
import i18n from './i18n';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <Router history={history}>
              <Helmet>
                <title>{i18n.t('COMMON.APPLICATION_NAME_KEY')}</title>
              </Helmet>
              <GlobalStyle />
              <Routes />
              <ToastContainer />
            </Router>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
