export interface TreatmentShowcase {
  images?: TreatmentImages[];
  title: string;
  slug: string;
  content: string;
  parent: TreatmentShowcase;
}

export interface TreatmentImages {
  name: string;
  url: string;
  formats: {
    large: {
      url: string;
    },
    small: {
      url: string;
    },
  };
}
