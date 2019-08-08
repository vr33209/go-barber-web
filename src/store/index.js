import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";

import persistReducers from "./persistReducers";

import rootReducer from "./modules/rootReducers";
import rootSaga from "./modules/rootSagas";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

const middlwares = [sagaMiddlware];

const store = createStore(persistReducers(rootReducer), middlwares);
const persistor = persistStore(store);
sagaMiddlware.run(rootSaga);

export { store, persistor };
