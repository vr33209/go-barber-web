import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";

import rootReducer from "./modules/rootReducers";
import rootSaga from "./modules/rootSagas";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

const middlwares = [sagaMiddlware];

const store = createStore(rootReducer, middlwares);

sagaMiddlware.run(rootSaga);

export default store;
