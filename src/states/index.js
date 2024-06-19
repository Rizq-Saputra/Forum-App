import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import isPreloadReducer from './isPreload/reducer';
import detailThreadReducer from './detailThread/reducer';
import leaderboardsReducer from './leaderboard/reducer';

const store = configureStore({
    reducer: {
      authUser: authUserReducer,
      isPreload: isPreloadReducer,
      users: usersReducer,
      threads: threadsReducer,
      detailThread: detailThreadReducer,
      loadingBar: loadingBarReducer,
      leaderboards: leaderboardsReducer,
    },
  });
  
  export default store;