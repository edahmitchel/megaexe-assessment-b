import { useEffect } from "react";
import * as Font from 'expo-font';
import { customFonts } from "./Fonts";

export function useCustomFonts() {
    useEffect(()=>{
        async function loadFonts(){
            await Font.loadAsync(customFonts);
        }
        loadFonts();
    },[]);
}