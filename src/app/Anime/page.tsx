import React from "react";

export const metadata = {
    title: "Anime",
    description: "A simple TypeScript React page for anime items",
};

type Anime = {
    id: string;
    title: string;
    year?: number;
    description?: string;
};

const SAMPLE_ANIME: Anime[] = [
    { id: "1", title: "Naruto", year: 2002, description: "A young ninja's journey." },
    { id: "2", title: "Fullmetal Alchemist: Brotherhood", year: 2009, description: "Two brothers seek the Philosopher's Stone." },
    { id: "3", title: "Cowboy Bebop", year: 1998, description: "Bounty hunters in space." },
];

export default function AnimePage(): JSX.Element {
    return (
        <main style={{ padding: 24, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
            <h1>Anime</h1>
            <p>A minimal TypeScript React page (Next.js app router compatible).</p>

            <section>
                <h2>Sample List</h2>
                <ul>
                    {SAMPLE_ANIME.map((a) => (
                        <li key={a.id} style={{ marginBottom: 12 }}>
                            <strong>{a.title}</strong>
                            {a.year ? <span> ({a.year})</span> : null}
                            {a.description ? <div style={{ color: "#555" }}>{a.description}</div> : null}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}