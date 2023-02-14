// import *  from "./ActionType";

import { ADD, REDUCE } from "./ActionType"


export const AddHandleCount = (payload) => {
      return {
            type:ADD,
            payload
      }
}


export const ReduceCount = (payload) => {
      return {
            type:REDUCE,
            payload
      }
}