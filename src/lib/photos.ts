// Resolves CDN-hosted photo pointers extracted from the SIAT-Engineering document.
const modules = import.meta.glob<{ url: string }>("../assets/photos/*.asset.json", {
  eager: true,
});

const urls: Record<string, string> = {};
for (const [path, mod] of Object.entries(modules)) {
  const key = path.split("/").pop()!.replace(".jpg.asset.json", "");
  urls[key] = (mod as unknown as { default?: { url: string }; url?: string }).default?.url ?? (mod as { url: string }).url;
}

export function photo(name: string): string {
  return urls[name] ?? "";
}
