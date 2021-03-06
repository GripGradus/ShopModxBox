

// Needed for redux-saga es6 generator support
import "babel-polyfill";

import locale from 'moment/src/locale/ru';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyRouterMiddleware, Router, browserHistory } from "react-router";
import { useScroll } from "react-router-scroll";
// Import routes
import rootRoute from "modules/Site/config/routes";

import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from "modules/Site/config/store";
// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
let initialState = {};


import {MainApp} from 'modules/Site/components/App';

if(
  typeof window !== 'undefined'
  && window.REDUX_INITIAL_STATE
){
  initialState = window.REDUX_INITIAL_STATE;
}


const store = configureStore(initialState);

// alert("sdfsdf");

// import jQuery from 'jquery';

// // global.jQuery = jQuery;
// // global.$ = jQuery;

// // console.log('jQuery', jQuery);


// if(typeof window !== "undefined"){
//   window.jQuery = jQuery;
// }


// import defaultQuery from 'modules/Site/components/ORM/query';
// import rootResolver from 'modules/Site/components/ORM/resolver';

// import RootType, {
//   Mutation,
//   rootDirectives,
// } from 'modules/Site/components/ORM';

// const bootstrap = require('bootstrap')(jQuery);
// import 'bootstrap/dist/js/bootstrap';

import {AppMain as ShopModxApp} from 'shopmodx-react';

if(typeof window !== "undefined"){

  


  injectTapEventPlugin();

  browserHistory.listen(function (location) {
    window.ga && window.ga('send', 'pageview', location.pathname);
  });


  const render = () => {

    // ReactDOM.render(
    //   <MainApp
    //     appExports={{}}
    //     defaultQuery={defaultQuery}
    //     rootResolver={rootResolver}
    //     RootType={RootType}
    //     Mutation={Mutation}
    //     rootDirectives={rootDirectives}
    //   >
    //     <Provider store={store}>
    //       <Router
    //         history={browserHistory}
    //         routes={rootRoute}
    //         render={applyRouterMiddleware(useScroll())}
    //       />
    //     </Provider>
    //   </MainApp>,
    //   document.getElementById("root")
    // );

    // ReactDOM.render(
    //   <MainApp
    //     appExports={{}}
    //     defaultQuery={defaultQuery}
    //     rootResolver={rootResolver}
    //     RootType={RootType}
    //     Mutation={Mutation}
    //     rootDirectives={rootDirectives}
    //   >
    //     <Provider store={store}>
    //       <Router
    //         history={browserHistory}
    //         routes={rootRoute}
    //         render={applyRouterMiddleware(useScroll())}
    //       >
    //         <ShopModxApp />
    //       </Router>
    //     </Provider>
    //   </MainApp>,
    //   document.getElementById("root")
    // );

    ReactDOM.render(
      <MainApp
        appExports={{}}
      >
        <Provider store={store}>
          <Router
            history={browserHistory}
            routes={rootRoute}
            render={applyRouterMiddleware(useScroll())}
          >

          </Router>
        </Provider>
      </MainApp>,
      document.getElementById("root")
    );

    // ReactDOM.render(
    //   <Provider store={store}>
    //     <Router
    //       history={browserHistory}
    //       routes={rootRoute}
    //       render={applyRouterMiddleware(useScroll())}
    //     >

    //     </Router>
    //   </Provider>,
    //   document.getElementById("root")
    // );

    // ReactDOM.render(
    //   <ShopModxApp />,
    //   document.getElementById("root")
    // );

  };

  render();

  if (module.hot) {
    // modules.hot.accept does not accept dynamic dependencies,
    // have to be constants at compile-time
    module.hot.accept(["modules/Site/config/routes"], () => {
      render();
    });
  }
  
}



