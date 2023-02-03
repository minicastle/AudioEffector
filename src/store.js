import { createStore,combineReducers } from "redux";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

function reducer(state,action){
    if(state === undefined){
        return {time:0.8,decay:0.5,mix:0.5,frequency:400,peak:10}
    }
    else if(action.type === "timeSet"){
        return Object.assign({},state,{time:action.payload});
    }
    else if(action.type === "decaySet"){
        return Object.assign({},state,{decay:action.payload});
    }
    else if(action.type === "mixSet"){
        return Object.assign({},state,{mix:action.payload});
    }
    else if(action.type === "frequencySet"){
        return Object.assign({},state,{frequency:action.payload});
    }
    else if(action.type === "peakSet"){
        return Object.assign({},state,{peak:action.payload});
    }
    else{
        return state;
    }
};

const persistConfig={
    key:"root",
    storage
};

const rootreducer=combineReducers({reducer});
const store=createStore(persistReducer(persistConfig,rootreducer));
const persistor = persistStore(store);
export {store,persistor};