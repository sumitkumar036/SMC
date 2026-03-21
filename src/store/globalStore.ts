// src/store/globalStore.ts
import { create } from "zustand";
import { Cookies } from "../services/Cookies"


//-------------------------------------------------------------------------------------
//                       THEME STORE
//--------------------------------------------------------------------------------------

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (Cookies.get("LibraryMSTheme") as Theme) ||"light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));



//-------------------------------------------------------------------------------------
//                       NETWORK STATE
//--------------------------------------------------------------------------------------

interface NetworkState {
  isOnline: boolean;
  setOnline: (status: boolean) => void;
}

export const useNetworkStore = create<NetworkState>((set) => ({
  isOnline: navigator.onLine,
  setOnline: (status) => set({ isOnline: status }),
}));
