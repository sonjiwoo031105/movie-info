export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {
  const res = await fetch(API_URL, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

export async function getCredits(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch credits");
  return res.json();
}

export async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch videos");
  return res.json();
}

export async function getProviders(id: string) {
  const res = await fetch(`${API_URL}/${id}/providers`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch providers");
  return res.json();
}

export async function getSimilar(id: string) {
  const res = await fetch(`${API_URL}/${id}/similar`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch similar");
  return res.json();
}
