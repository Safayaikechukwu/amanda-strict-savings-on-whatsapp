export type Bubble = {
  id: string;
  from: "user" | "amanda";
  text: string;
  time: string;
  bold?: string;
};

/** Hero lock + spend thread — same story as before, Amanda in-app chat. */
export const AMANDA_THREAD: Bubble[] = [
  {
    id: "k1",
    from: "user",
    text: "FoodPlace just dropped their account",
    time: "7:41 PM",
  },
  {
    id: "k2",
    from: "user",
    text: "transfer 15k?",
    time: "7:41 PM",
  },
  {
    id: "k3",
    from: "amanda",
    text: "It's 7:42PM. Transfers reopen at 6AM.",
    bold: "Transfer blocked.",
    time: "7:42 PM",
  },
  {
    id: "k4",
    from: "user",
    text: "ah come on. please",
    time: "7:42 PM",
  },
  {
    id: "k5",
    from: "amanda",
    text: "No. Land fund stays locked till morning.\nNo override.",
    time: "7:42 PM",
  },
  {
    id: "k6",
    from: "user",
    text: "fine. what did I even spend this week",
    time: "7:43 PM",
  },
  {
    id: "k7",
    from: "amanda",
    text: "Food ₦18.4k · Transfers ₦6.2k · Noise ₦4.1k",
    time: "7:43 PM",
  },
  {
    id: "k8",
    from: "user",
    text: "lock snacks after 7 too",
    time: "7:43 PM",
  },
  {
    id: "k9",
    from: "amanda",
    text: "Done. Strict mode is on. Sleep — the money will still be there.",
    time: "7:44 PM",
  },
];
