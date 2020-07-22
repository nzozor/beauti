export interface TreatmentShowcase {
  images?: TreatmentImages[];
  title: string;
  slug: string;
  content: string;
}

export interface TreatmentImages {
  name: string;
  url: string;
  format: {
    large: {
      url: string;
    },
  };
}
