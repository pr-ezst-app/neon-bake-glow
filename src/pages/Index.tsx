import { useState } from "react";
import Navbar from "@/components/Navbar";
import BrowsePage from "@/components/BrowsePage";
import PlayPage from "@/components/PlayPage";
import CreatePage from "@/components/CreatePage";

type Page = "browse" | "play" | "create";

const Index = () => {
  const [page, setPage] = useState<Page>("browse");

  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar page={page} setPage={setPage} />
      <main className="pt-16">
        {page === "browse" && <BrowsePage setPage={setPage} />}
        {page === "play" && <PlayPage />}
        {page === "create" && <CreatePage />}
      </main>
    </div>
  );
};

export default Index;
