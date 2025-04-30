import { games } from "@/data/games";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <>
          <Link href={`/games/${game.slug}`} key={game.slug}>
            <div className="border rounded-2xl shadow hover:shadow-lg transition cursor-pointer bg-white">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{game.title}</h2>
                <p className="text-sm text-gray-600">{game.description}</p>
              </div>
            </div>
          </Link>
          {index === 1 && (
            <div className="w-full flex justify-center my-4">
                <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%", height: "90px" }}
                data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
                data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
                ></ins>
            </div>
          )}
        </>
      ))}
    </main>
  );
}