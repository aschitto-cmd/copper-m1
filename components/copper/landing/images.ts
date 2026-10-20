// What each product image shows, keyed by the paths in lib/copper/catalog.ts.
// Alt text describes the picture; captions are the one-liners in the showcase.
export const IMAGE_SIZE = {
  cutout: { width: 1254, height: 1254 },
  lifestyle: { width: 1672, height: 941 },
};

export const CUTOUT_ALT: Record<string, string> = {
  "/assets/cutouts/copper-home.png":
    "Copper Home smart speaker: a rounded copper fabric dome with a clock display on top",
  "/assets/cutouts/copper-notes.png":
    "Copper Notes clip-on recorder: a brushed copper square with a glowing amber ring",
};

export const LIFESTYLE: Record<string, { alt: string; caption: string }> = {
  "/assets/lifestyle/copper-home-desert-light.png": {
    alt: "Copper Home on a stone kitchen counter, with a saguaro desert sunset through the window",
    caption:
      "Copper Home keeps the house running, from sunrise to monsoon season.",
  },
  "/assets/lifestyle/copper-notes-stone-desk.png": {
    alt: "Copper Notes standing beside its round charging pad on a sunlit stone desk",
    caption:
      "Copper Notes charges on its pad and is ready for the next meeting.",
  },
  "/assets/lifestyle/copper-notes-golden-hour.png": {
    alt: "A man writing in a notebook with Copper Notes clipped to his shirt pocket",
    caption:
      "Clip it on and stay in the conversation. Copper Notes takes the notes.",
  },
};

// Catalog color names → brand swatch classes.
export const SWATCH: Record<string, string> = {
  "Polished Copper": "bg-primary",
  "Brushed Copper": "bg-primary",
  "Patina Teal": "bg-accent",
  "Desert Sand": "bg-[#efe3d0]",
  "Night Sky": "bg-[#1c2333]",
};
