import { RuleItem, StaffMember, RankItem, OfficialLink } from './types';

export const rulesServer: RuleItem[] = [
  { id: 1, text: "Harus Sopan sesama pemain dan staff." },
  { id: 2, text: "Jangan Keterlaluan Ngomong Kasar di obrolan publik." },
  { id: 3, text: "Tidak Boleh Rusuh (Griefing, merusak bangunan orang lain)." },
  { id: 4, text: "Dilarang Pakai Cheat (X-Ray, Fly, Hack Client, dll)." },
  { id: 5, text: "Jangan Spam Chat atau melakukan provokasi berlebihan." },
  { id: 6, text: "Jangan Ngemis Ke Staff untuk meminta item atau rank gratis." },
  { id: 7, text: "Jangan Membahas Server Lain di dalam game." },
  { id: 8, text: "Jangan Memanfaatkan Bug (Laporkan bug untuk reward khusus)." }
];

export const rulesGrup: RuleItem[] = [
  { id: 1, text: "Dilarang Toxic, Flame, Provoke, Menghina sesama anggota grup." },
  { id: 2, text: "Dilarang Spam Chat/Stiker secara berlebihan." },
  { id: 3, text: "Dilarang Promosi server lain, grup lain, atau produk komersial." },
  { id: 4, text: "Harus Sopan saat berinteraksi dengan siapa saja." },
  { id: 5, text: "Bertanya Yang Jelas dan padat, jangan bertele-tele." },
  { id: 6, text: "Ikuti Arahan Staff demi ketertiban bersama." },
  { id: 7, text: "Dilarang Share Konten Dewasa (NSFW) dalam bentuk apa pun." },
  { id: 8, text: "Laporkan Bug Melalui Staff di jalur pribadi (PC)." },
  { id: 9, text: "Bantu Sesama pemain jika Anda mengetahui jawabannya." },
  { id: 10, text: "Kirim Video/Foto 1x Lihat untuk hal yang bersifat privasi saja." },
  { id: 11, text: "Jangan Call / telepon staff tanpa persetujuan." },
  { id: 12, text: "Jangan Bug Grup yang mengganggu kestabilan chat." },
  { id: 13, text: "Jangan Ribut atau menyelesaikan perselisihan pribadi di grup." },
  { id: 14, text: "Jangan Merendahkan Sesama pemain atau tingkat skill mereka." }
];

export const staffMembers: StaffMember[] = [
  {
    name: "Refan",
    role: "Owner",
    avatarSeed: "Notch",
    colorClass: "from-red-500 to-pink-600 border-red-500/30"
  },
  {
    name: "Reza",
    role: "Co Owner",
    avatarSeed: "Steve",
    colorClass: "from-orange-500 to-red-600 border-orange-500/30"
  },
  {
    name: "Damia",
    role: "Developer",
    avatarSeed: "MHF_Herobrine",
    colorClass: "from-cyan-500 to-blue-600 border-cyan-500/30"
  },
  {
    name: "Zakky",
    role: "Developer",
    avatarSeed: "Jeb_",
    colorClass: "from-cyan-500 to-blue-600 border-cyan-500/30"
  },
  {
    name: "Aditya",
    role: "Admin",
    avatarSeed: "Dream",
    colorClass: "from-yellow-500 to-orange-600 border-yellow-500/30"
  },
  {
    name: "Ibrahim",
    role: "Admin",
    avatarSeed: "Technoblade",
    colorClass: "from-yellow-500 to-orange-600 border-yellow-500/30"
  },
  {
    name: "Joo",
    role: "Admin",
    avatarSeed: "Skeppy",
    colorClass: "from-yellow-500 to-orange-600 border-yellow-500/30"
  },
  {
    name: "Revan",
    role: "Helper",
    avatarSeed: "MHF_Steve",
    colorClass: "from-emerald-500 to-teal-600 border-emerald-500/30"
  },
  {
    name: "Vino",
    role: "Helper",
    avatarSeed: "Tubbo",
    colorClass: "from-emerald-500 to-teal-600 border-emerald-500/30"
  }
];

export const rankList: RankItem[] = [
  {
    name: "ELITE",
    price: "15K",
    benefits: [
      "Akses Kit Elite Mingguan",
      "Prefix Keren [ELITE] di Chat",
      "Uang Tambahan +$5,000",
      "Slot Cadangan saat Server Penuh"
    ],
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500"
  },
  {
    name: "EMPEROR",
    price: "30K",
    isPopular: true,
    benefits: [
      "Semua Fitur Rank ELITE",
      "Kit Emperor Eksklusif",
      "Prefix Spesial [EMPEROR]",
      "Klaim Area Lebih Luas (+20 chunk)",
      "Uang Tambahan +$15,000"
    ],
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500"
  },
  {
    name: "NOVA",
    price: "50K",
    isPremium: true,
    benefits: [
      "Semua Fitur Rank EMPEROR",
      "Kit Nova Dahsyat",
      "Efek Partikel Berkilau di Tubuh",
      "Akses Command Eksklusif (/feed)",
      "Bisa Terbang (Fly) di Lobby Utama"
    ],
    color: "from-purple-500/20 to-pink-500/20 border-purple-500"
  },
  {
    name: "SULTAN",
    price: "80K",
    isPremium: true,
    benefits: [
      "Semua Fitur Rank NOVA",
      "Kit Sultan Mewah",
      "Kustom Tag/Slogan Pribadi",
      "Prioritas Utama Masuk Server",
      "Menyimpan XP saat Mati (KeepXP)"
    ],
    color: "from-amber-500/20 to-yellow-500/20 border-amber-500"
  },
  {
    name: "MYTHICAL",
    price: "100K",
    isPremium: true,
    benefits: [
      "Semua Fitur Rank SULTAN",
      "Kit Mythical Legendaris",
      "Kustom Nickname (/nick)",
      "Pendamping Pet Naga/Serigala",
      "Multi-Home Maksimal (Hingga 10)"
    ],
    color: "from-rose-500/20 to-red-500/20 border-rose-500"
  },
  {
    name: "CELESTIAL",
    price: "150K",
    isPremium: true,
    benefits: [
      "Semua Fitur Rank MYTHICAL",
      "Kit Celestial Dewa",
      "Bisa Terbang (Fly) di Dunia Survival",
      "Akses Custom Head Pemain Lain",
      "Efek Sayap Kosmik Istimewa"
    ],
    color: "from-cyan-500/20 to-blue-600/20 border-cyan-500"
  },
  {
    name: "EVERY",
    price: "200K",
    isPremium: true,
    isPopular: true,
    benefits: [
      "Kekuasaan Tertinggi!",
      "Semua Fitur Semua Rank Di Bawahnya",
      "Akses Item Developer Eksklusif",
      "Unlimited Homes (Rumah Tanpa Batas)",
      "Reset Statistik Game Gratis Kapan Saja"
    ],
    color: "from-red-500/20 to-orange-500/20 border-primary"
  },
  {
    name: "CUSTOM",
    price: "300K",
    isPremium: true,
    benefits: [
      "Kustomisasi Tanpa Batas!",
      "Buat Item Kustom Sendiri via Developer",
      "Kustom Prefix Bebas Sesuai Keinginan",
      "Chat Global Berwarna Menarik",
      "Tag Unik Spesial di Discord Server"
    ],
    color: "from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500"
  },
  {
    name: "YOUTUBE",
    price: "Free",
    isCreator: true,
    benefits: [
      "Rank Khusus Kreator YouTube",
      "Minimal 500 Subscriber",
      "Membuat Konten Server Rutin",
      "Sering Melakukan Live Streaming"
    ],
    color: "from-red-600/20 to-rose-700/20 border-red-600"
  },
  {
    name: "TIKTOK",
    price: "Free",
    isCreator: true,
    benefits: [
      "Rank Khusus Kreator TikTok",
      "Minimal 1000 Followers",
      "Membuat Konten Server Kreatif",
      "Sering Melakukan Live Streaming"
    ],
    color: "from-neutral-800/40 to-neutral-700/40 border-neutral-400"
  }
];

export const officialLinks: OfficialLink[] = [
  {
    name: "Group WhatsApp",
    url: "https://chat.whatsapp.com/K52wGMJHVo6Hjq2cbIUOdi?mode=gi_t",
    platform: "WhatsApp",
    colorClass: "hover:border-emerald-500/50 hover:bg-emerald-950/20 text-emerald-400",
    description: "Bergabunglah dengan komunitas obrolan hangat kami di WhatsApp."
  },
  {
    name: "Discord Server",
    url: "https://discord.gg/EnVQ8FZ6V6",
    platform: "Discord",
    colorClass: "hover:border-indigo-500/50 hover:bg-indigo-950/20 text-indigo-400",
    description: "Diskusikan petualangan, suara bareng, dan koordinasi di Discord."
  },
  {
    name: "Vote Server",
    url: "https://minecraft-mp.com/server/357323/vote/",
    platform: "Vote",
    colorClass: "hover:border-amber-500/50 hover:bg-amber-950/20 text-amber-400",
    description: "Bantu server kami berkembang dengan memberikan Vote harian Anda!"
  },
  {
    name: "TikTok @every.smp",
    url: "https://tiktok.com/@every.smp",
    platform: "TikTok",
    colorClass: "hover:border-pink-500/50 hover:bg-pink-950/20 text-pink-400",
    description: "Lihat cuplikan video seru, event, dan update terbaru di TikTok."
  },
  {
    name: "YouTube @EverySmp",
    url: "https://www.youtube.com/@EverySmp",
    platform: "YouTube",
    colorClass: "hover:border-red-500/50 hover:bg-red-950/20 text-red-400",
    description: "Tonton video tutorial, cinematic teaser, dan live stream seru kami."
  }
];
