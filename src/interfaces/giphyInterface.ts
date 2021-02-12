export interface Giphy {
  giphy: {
    id: string;
    title: string;
    url: string;
    images: {
      fixed_width: {
        url: string;
      };
    };
  }[];
}
