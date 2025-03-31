import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900"
    >
      {theme === "light" ? (
        <i className="fa-solid fa-moon" />
      ) : (
        <i className="fa-solid fa-sun" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
