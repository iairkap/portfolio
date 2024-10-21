export const audiovisualProyects = [
  {
    id: 9,
    title: "Surge - Trailer",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=vJzfbejMxME&t=3s",
    company: "highlight",
    keywords: ["MasterClass", "Trailer", "10 Episodes"],
  },
  {
    id: 5,
    title: "Click for a Special Offer!",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=s1pEc1CetGI",
    company: "seekingalpha",
    keywords: ["Motion Graphics", "Animation"],
  },
  {
    id: 1,
    title: "Avis By Highlight Films",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=hYUYZmtrNX4&t=8s",
    company: "highlight",
    keywords: ["Promo", "Fixer"],
  },
  {
    id: 13,
    title: "Siemens Healthineers - Atellica ",
    src: "firebase",
    videoLink:
      "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FINTRO%20HOLOGRAMA.mp4?alt=media&token=e322a1a0-545f-4833-ba68-4eededcd9d5c",
    company: "siemens",
    keywords: ["Spot", "Hologram", "Motion Graphics"],
  },

  {
    id: 2,
    title: "NYSE report from Israel",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=f6mOyiWU6e4&t=2s",
    company: "highlight",
    keywords: ["News", "Report", "NYSE"],
  },
  {
    id: 11,
    title: "Punto Mov Reel",
    src: "firebase",
    videoLink:
      "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FReel%20PuntoMov.mp4?alt=media&token=fa5a0902-7548-4598-9843-a7437160751e",
    company: "puntomov",
    keywords: ["Reel", "Promo"],
  },
  {
    id: 6,
    title:
      "Try Seeking Alpha's Stock Warnings Now | Let your portfolio take off!",
    src: "firebase",
    videoLink:
      "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FTry%20Seeking%20Alpha%20s%20Stock%20Warnings%20Now%20_%20Let%20your%20portfolio%20take%20off!.mp4?alt=media&token=bec98093-3609-4672-9344-2b453807d999",
    company: "seekingalpha",
    keywords: ["ShortPromo", "Animation"],
  },

  {
    id: 3,
    title: "El Mar Muerto: Una experiencia de vida ",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=2EYSb2V9l0w&t=9s",
    company: "highlight",
    keywords: ["Documentary", "Travel"],
  },
  {
    id: 4,
    title: "Highlight Films Showreel 2021",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=6YrOo1rJDr4&t=3s",
    company: "highlight",
    keywords: ["Reel", "Promo"],
  },

  {
    id: 7,
    title: "Meet Seeking Alpha s Stock Picking Expert",
    src: "firebase",
    videoLink:
      "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FMeet%20Seeking%20Alpha%20s%20Stock%20Picking%20Expert.mp4?alt=media&token=4c79d1b2-d6b1-463d-a35f-aee705e32a9d",
    company: "seekingalpha",
    keywords: ["Youtube Trailer", "Promo"],
  },
  {
    id: 8,
    title: "CEO INTERVIEWS | Seeking Alpha",
    src: "youtube",
    videoLink: "https://www.youtube.com/watch?v=HLsLkfk57RE",
    company: "seekingalpha",
    keywords: ["Interview", "Intro", "Motion Graphics"],
  },
  {
    id: 10,
    title: "Amigas son Amigas | Sofia Morandi",
    src: "firebase",
    videoLink:
      "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FAmigasSonAmigasFinal_1.mp4?alt=media&token=0b0ec030-ce70-481d-9926-c1cbe0d5d0a2",
    company: "puntomov",
    keywords: ["Serie Web"],
  },

  {
    id: 12,
    title: "Assekuransa Spot",
    src: "firebase",
    videoLink:
      "https://firebasestorage.googleapis.com/v0/b/real-cover.appspot.com/o/iair%2FExport%20Spot%20Poliza%20de%20Responsabilidad%20.mp4?alt=media&token=c5c208ac-ce02-4bdc-a23e-02aab77c3ef0",
    company: "puntomov",
    keywords: ["Spot", "Insurance", "Motion Graphics"],
  },
];

export function getEmbedLink(videoLink, src) {
  if (src === "youtube") {
    const videoId = videoLink.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return videoLink; // Para otros enlaces, devuelve el enlace tal cual
}
