export const FLAGS: Record<string, string> = {
  Cameroun: "https://flagcdn.com/w640/cm.png",
  "République Centrafricaine": "https://flagcdn.com/w640/cf.png",
  Tchad: "https://flagcdn.com/w640/td.png",
  Niger: "https://flagcdn.com/w640/ne.png",
  Mali: "https://flagcdn.com/w640/ml.png",
  Nigeria: "https://flagcdn.com/w640/ng.png",
  Mauritanie: "https://flagcdn.com/w640/mr.png",
};

export const flagOf = (pays: string): string | undefined => FLAGS[pays];
