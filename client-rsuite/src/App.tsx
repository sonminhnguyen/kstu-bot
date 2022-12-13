import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';
import locales from './locales';
import Frame from './components/Frame';
import DashboardPage from './pages/dashboard';
import Error404Page from './pages/authentication/404';
import Error500Page from './pages/authentication/500';
import SignInPage from './pages/authentication/sign-in';
import SignUpPage from './pages/authentication/sign-up';
import CalendarPage from './pages/calendar';
import CommandPage from './pages/command';
import RequirePage from './pages/require/inqueue';
import SolvedPage from './pages/require/solved';
import { appNavs } from './config';

const App = () => {
  return (
    <IntlProvider locale="en" messages={locales.en}>
      <CustomProvider locale={enGB}>
        <Routes>
          <Route path="/" element={<Frame navs={appNavs} />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="inqueue" element={<RequirePage />} />
            <Route path="solved" element={<SolvedPage />} />
            <Route path="command" element={<CommandPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="error-404" element={<Error404Page />} />
            <Route path="error-500" element={<Error500Page />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </CustomProvider>
    </IntlProvider>
  );
};

export default App;
