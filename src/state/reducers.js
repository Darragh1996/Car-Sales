import * as types from './actionTypes';
const initialCount = 0;
export function countReducer(count = initialCount, action){
    switch(action.type){
        case types.INCREMENT:
            return count + 1
        case types.DECREMENT:
            return count - 1
        default:
            return count;
    }
}

const initialFeatures = [];
export function addFeature(features = initialFeatures, action){
    console.log('THIS IS IMPORTANT!!!!!!',action.payload)
    switch(action.type){
        case types.ADD_FEATURE:
            return [...features, ...action.payload];
        default:
            return features;
    }
}