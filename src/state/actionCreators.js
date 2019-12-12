import * as types from './actionTypes';

export function increment(){
    return {
        type: types.INCREMENT,
    }
}

export function decrement() {
    return {
      type: types.DECREMENT,
    };
  }

  export function add(id, arr){
    let added = [...arr].filter(el => {
      return el.id === id
    })
    console.log(added);
    return {
      type: types.ADD_FEATURE,
      payload: added,
    }
  }