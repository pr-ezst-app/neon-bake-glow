import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "browse" | "play" | "create";

interface BrowsePageProps {
  setPage: (p: Page) => void;
}

const GENRES = ["All", "Action", "Puzzle", "Arcade", "Strategy", "Adventure"];

const GAMES = [
  {
    id: "snake",
    title: "Snake Classic",
    genre: "Arcade",
    description: "Eat food, grow longer, don't hit the walls.",
    players: "12.4K",
    rating: 4.8,
    color: "from-green-900 to-green-700",
    icon: "🐍",
    tag: "HOT",
  },
  {
    id: "memory",
    title: "Memory Match",
    genre: "Puzzle",
    description: "Flip cards and match pairs before time runs out.",
    players: "8.1K",
    rating: 4.5,
    color: "from-blue-900 to-blue-700",
    icon: "🧠",
    tag: "NEW",
  },
  {
    id: "clicker",
    title: "Space Clicker",
    genre: "Arcade",
    description: "Click to build your galactic empire. Idle and conquer.",
    players: "21.3K",
    rating: 4.7,
    color: "from-purple-900 to-purple-700",
    icon: "🚀",
    tag: "TOP",
  },
  {
    id: "wordle",
    title: "Word Blitz",
    genre: "Puzzle",
    description: "Guess the hidden 5-letter word in 6 tries.",
    players: "5.6K",
    rating: 4.6,
    color: "from-yellow-900 to-yellow-700",
    icon: "📝",
    tag: null,
  },
  {
    id: "dodge",
    title: "Bullet Dodge",
    genre: "Action",
    description: "Dodge incoming bullets as long as you can survive.",
    players: "9.9K",
    rating: 4.4,
    color: "from-red-900 to-red-700",
    icon: "💥",
    tag: "HOT",
  },
  {
    id: "tower",
    title: "Tower Defense",
    genre: "Strategy",
    description: "Place towers and defend your base from waves of enemies.",
    players: "3.2K",
    rating: 4.3,
    color: "from-orange-900 to-orange-700",
    icon: "🏰",
    tag: null,
  },
];

const BrowsePage = ({ setPage }: BrowsePageProps) => {
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = GAMES.filter((g) => {
    const matchGenre = genre === "All" || g.genre === genre;
    const matchSearch =
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.description.toLowerCase().includes(search.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 animate-fade-in">
        <h1 className="text-5xl font-rajdhani font-bold neon-text mb-2">Browse Games</h1>
        <p className="text-muted-foreground text-lg">Discover, play, and share browser games</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in stagger-1">
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search games..."
            className="w-full pl-9 pr-4 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`px-4 py-2 rounded-md text-sm font-rajdhani font-semibold tracking-wide transition-all ${
                genre === g
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((game, i) => (
          <div
            key={game.id}
            className={`card-hover rounded-xl border border-border bg-card overflow-hidden cursor-pointer animate-fade-in stagger-${Math.min(i + 1, 6)}`}
            onClick={() => setPage("play")}
          >
            <div className={`bg-gradient-to-br ${game.color} h-40 flex items-center justify-center relative`}>
              <span className="text-7xl">{game.icon}</span>
              {game.tag && (
                <span className="absolute top-3 right-3 tag-live">{game.tag}</span>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-rajdhani font-bold text-xl text-foreground">{game.title}</h3>
                <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded font-barlow">{game.genre}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{game.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="Users" size={12} />
                  <span>{game.players} playing</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-yellow-400">
                  <Icon name="Star" size={12} />
                  <span>{game.rating}</span>
                </div>
              </div>
              <button
                className="mt-3 w-full py-2 rounded-md bg-primary text-primary-foreground font-rajdhani font-semibold text-sm tracking-wider hover:opacity-90 transition-opacity"
                onClick={(e) => { e.stopPropagation(); setPage("play"); }}
              >
                PLAY NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <Icon name="Frown" size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg">No games found. Try a different search.</p>
        </div>
      )}
    </div>
  );
};

export default BrowsePage;
