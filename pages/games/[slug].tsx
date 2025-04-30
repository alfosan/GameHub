import { useRouter } from "next/router";
import { games } from "@/data/games";

export default function GamePage() {
  const { query } = useRouter();
  const game = games.find((g) => g.slug === query.slug);

  if (!game) return <div className="p-8">Juego no encontrado.</div>;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
      <iframe
        src={`/games/${game.slug}/index.html`}
        className="w-full max-w-4xl h-[600px] border rounded-xl shadow"
      />
      <div className="w-full flex justify-center my-4">
        <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: "90px" }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
            data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
        ></ins>
      </div>
    </div>
  );
}