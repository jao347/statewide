"use client"

import type React from "react"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc2626", // red-600
    },
    secondary: {
      main: "#6b7280", // gray-500
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
  },
})

export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
