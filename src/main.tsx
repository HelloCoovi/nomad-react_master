import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/nomad-react_master">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);