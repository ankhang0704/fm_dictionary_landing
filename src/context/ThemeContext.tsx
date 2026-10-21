"use client";

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
} from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function applyThemeToDocument(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", theme === "light" ? "#f7f8f9" : "#090909");
  }
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("fm_theme");
    return saved === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function subscribe(callback: () => void) {
  listeners.push(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === "fm_theme") {
      applyThemeToDocument(getThemeSnapshot());
      callback();
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener("storage", handleStorage);
  };
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem("fm_theme", newTheme);
    } catch {
      // LocalStorage access restricted in private sandbox
    }
    applyThemeToDocument(newTheme);
    emitChange();
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getThemeSnapshot();
    const next: Theme = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("fm_theme", next);
    } catch {
      // LocalStorage access restricted in private sandbox
    }
    applyThemeToDocument(next);
    emitChange();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
