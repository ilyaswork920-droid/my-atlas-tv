import type { ClusterKey } from "./types";

export const CLUSTERS: { key: ClusterKey; name: string; description: string }[] = [
  { key: "A", name: "IPTV kaufen & Abonnieren", description: "Kaufprozess, Anbieterwahl und Abo-Modelle im Überblick." },
  { key: "B", name: "IPTV in Deutschland", description: "Markt, Sprache und Nutzung aus deutscher Perspektive." },
  { key: "C", name: "Bester IPTV Anbieter", description: "Kriterien und Einordnung, um Anbieter realistisch zu bewerten." },
  { key: "D", name: "IPTV Qualität & Premium", description: "Senderumfang, 4K-Qualität und Premium-Positionierung." },
  { key: "E", name: "IPTV Code & Line", description: "Aktivierungscodes, Lines und die Technik dahinter." },
  { key: "F", name: "IPTV Testen", description: "Testphasen sinnvoll nutzen und worauf dabei zu achten ist." },
  { key: "G", name: "IPTV Geräte & Hardware", description: "Receiver, Boxen und Sticks im Vergleich." },
  { key: "H", name: "Beste IPTV App je Gerät", description: "App-Empfehlungen für Fire TV, Android TV, LG und Samsung." },
  { key: "I", name: "IPTV Player", description: "Player-Software für Android, Windows und weitere Plattformen." },
  { key: "J", name: "IPTV Playlist & M3U", description: "Playlist-Formate und deutschsprachige Inhalte organisieren." },
  { key: "K", name: "IPTV Streaming & Sport", description: "Streaming-Technik, Bundesliga und Sport-Kontext." },
  { key: "L", name: "IPTV Recht & Sicherheit", description: "Der rechtliche Rahmen sachlich erklärt." },
];

export function clusterLabel(key: ClusterKey): string {
  return CLUSTERS.find((c) => c.key === key)?.name ?? key;
}
