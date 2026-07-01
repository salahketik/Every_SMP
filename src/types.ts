export interface ServerStatus {
  season: string;
  theme: string;
  status: 'Online' | 'Offline' | 'Maintenance';
  version: string;
  playersOnline: number;
  playersMax: number;
}

export interface RuleItem {
  id: number;
  text: string;
}

export interface StaffMember {
  name: string;
  role: 'Owner' | 'Co Owner' | 'Developer' | 'Admin' | 'Helper';
  avatarSeed: string; // Used to generate custom cute blocky Minecraft avatars via dicebear or fallback
  colorClass: string;
}

export interface RankItem {
  name: string;
  price: string;
  isPopular?: boolean;
  isPremium?: boolean;
  isCreator?: boolean;
  benefits: string[];
  color: string;
}

export interface OfficialLink {
  name: string;
  url: string;
  platform: 'WhatsApp' | 'Discord' | 'Vote' | 'TikTok' | 'YouTube';
  colorClass: string;
  description: string;
}
