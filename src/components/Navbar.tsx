import Icon from "@/components/ui/icon";

type Page = "browse" | "play" | "create";

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
}

const Navbar = ({ page, setPage }: NavbarProps) => {
  const links: { id: Page; label: string; icon: string }[] = [
    { id: "browse", label: "Browse", icon: "Compass" },
    { id: "play", label: "Play", icon: "Gamepad2" },
    { id: "create", label: "Create", icon: "Wrench" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="font-orbitron text-xl neon-text font-bold tracking-widest">GAMEHUB</span>
        </div>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-rajdhani font-semibold tracking-wider transition-all ${
                page === link.id
                  ? "bg-primary text-primary-foreground neon-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon name={link.icon} size={16} />
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
