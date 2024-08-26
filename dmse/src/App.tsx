import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ModeToggle"
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <ModeToggle/>
    </ThemeProvider>
  )
}

export default App







