import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {RootState, AppDispatch} from './store/store'


//hook variable with right type to find
export const useAppDispatch = () => useDispatch<AppDispatch>();

//hook variable with right type to find
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//import these hooks in components instead of react redux base functions