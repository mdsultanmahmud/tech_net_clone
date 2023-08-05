/**
 * step for building a middlewear
 * 1.const middlewearName = store => next => action =>{
 *  business logic
 * }
 */

import { Middleware } from "@reduxjs/toolkit"

const customeLogger: Middleware = (store) => (next) => action =>{
    console.log("This middlewear created by Sultan!!!");
    
    console.log("Previous State",store.getState());
    console.log("action", action);
    const result = next(action)
    console.log("Current State", store.getState());
    return result    
}

export default customeLogger