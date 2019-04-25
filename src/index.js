import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import App from './app/components/App';
import configureStore from './app/store';
import './index.scss';
// import ExportConfigTabs from './app/components/ExportConfigTabs';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      {/* <Route path="/exportConfig" component={ExportConfigTabs}/>*/}
    </Router>
  </Provider>,
  document.getElementById('root')
);
