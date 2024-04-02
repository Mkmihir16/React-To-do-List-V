import { configureStore } from "@reduxjs/toolkit";
import alllist from "../Slice/AllList";
export default configureStore({
    reducer:{
        listitem:alllist,
    }
})