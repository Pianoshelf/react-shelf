// Import external modules
import React from 'react';
import { Route, Redirect } from 'react-router';

// Main components
import App from '../components/App';
import Homepage from '../components/Homepage';

// Authentication related components
import Authentication from '../components/Authentication';
import Login from '../components/Authentication/Login';
import Logout from '../components/Authentication/Logout';
import Register from '../components/Authentication/Register';
import ResetPassword from '../components/Authentication/ResetPassword';
import ResetPasswordConfirm from '../components/Authentication/ResetPasswordConfirm';
import VerifyEmail from '../components/Authentication/VerifyEmail';

// Profile components
import Profile from '../components/Profile';
import ProfileViewer from '../components/Profile/Viewer';

// Search components
import Search from '../components/Search';
import Browse from '../components/Search/Browse';

// Sheet music components
import SheetMusic from '../components/SheetMusic';
import SheetMusicViewer from '../components/SheetMusic/Viewer';

// Static components
import Static from '../components/Static';
import Copyright from '../components/Static/Copyright';
import PrivacyPolicy from '../components/Static/PrivacyPolicy';
import TermsOfService from '../components/Static/TermsOfService';

// Dashboard components
import Dashboard from '../components/Dashboard';

// Uploader components
import Upload from '../components/Upload';

// Error components
import Error404 from '../components/Error/Error404';

/**
 * A function that retrieves the route configuration for both
 * the server and client.
 *
 * @param {Store} store The redux store.
 *
 * @return {React.Component} The set of routes objects.
 */
export default function getRoutes(store) {
  function requireAuth(nextState, replace) {
    if (!store.getState().login.loggedIn) {
      replace({ pathname: '/login/', query: { redirect: nextState.location.pathname } });
    }
  }

  function requireNoAuth(nextState, replace) {
    if (store.getState().login.loggedIn) {
      replace({ pathname: '/' });
    }
  }

  function goToDashboard(nextState, replace) {
    if (store.getState().login.loggedIn) {
      replace({ pathname: '/home' });
    }
  }

  return (
    <Route component={App}>

      { /* Homepage */ }
      <Route path="/" component={Homepage} onEnter={goToDashboard} />

      { /* Authentication routes */ }
      <Route component={Authentication}>
        <Route path="/login" component={Login} onEnter={requireNoAuth} />
        <Route path="/register" component={Register} onEnter={requireNoAuth} />
        <Route path="/login/forgot" component={ResetPassword} onEnter={requireNoAuth} />
        <Route path="/login/reset/:uid/:token" component={ResetPasswordConfirm}
          onEnter={requireNoAuth}
        />
        <Route path="/login/verify/:key" component={VerifyEmail} />
        <Route path="/logout" component={Logout} />
        <Redirect from="/password-reset-confirm/:uid/:token" to="/login/reset/:uid/:token" />
        <Redirect from="/verify-email/:key" to="/login/verify/:key" />
      </Route>

      { /* Profile routes */ }
      <Route component={Profile}>
        <Route path="/user/:username" component={ProfileViewer} />
        <Redirect from="/profile/:username" to="/user/:username" />
      </Route>

      { /* Search routes */ }
      <Route component={Search}>
        <Route path="/browse" component={Browse} />
        <Redirect path="/sheetmusic" to="/browse" />
      </Route>

      { /* Sheet music routes */ }
      <Route component={SheetMusic}>
        <Route path="/sheetmusic/:id/:slug" component={SheetMusicViewer} />
      </Route>

      { /* Static routes */ }
      <Route component={Static}>
        <Route path="/copyright" component={Copyright} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Redirect path="/terms.html" to="/terms" />
        <Redirect path="/copyright.html" to="/copyright" />
      </Route>

      { /* Dashboard route */ }
      <Route path="/home" component={Dashboard} onEnter={requireAuth} />

      { /* Upload route */ }
      <Route path="/upload" component={Upload} onEnter={requireAuth} />

      { /* Upload route */ }
      <Route path="*" component={Error404} />

    </Route>
  );
}
