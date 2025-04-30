import { useState } from "react";
import { games } from "@/data/games";
import FiltersComponent from "@/components/filters/FiltersComponent";
import Link from "next/link";

export default function HomePage() {
  const [filteredGames, setFilteredGames] = useState(games);

  const categories = ["Acción", "Aventura", "Puzzle"];

  const handleSearch = (term: string) => {
    setFilteredGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleCategorySelect = (category: string) => {
    setFilteredGames(
      games.filter(
        (game) =>
          !category || game.category.toLowerCase() === category.toLowerCase()
      )
    );
  };

  return (
    <main className="bg-red-500 min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-8 text-center text-white">
        Bienvenido a ClickTopia
      </h1>

      {/* Componente de filtros */}
      <FiltersComponent
        categories={categories}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
      />

      {/* Lista de juegos filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Link href={`/games/${game.slug}`} key={game.slug}>
            <div className="game-card hover:scale-105 transform transition">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="game-card-img"
              />
              <div className="game-card-content">
                <h2 className="game-card-title">{game.title}</h2>
                <p className="game-card-description">{game.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}