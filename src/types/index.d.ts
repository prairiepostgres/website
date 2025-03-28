export type Feature = {
[x: string]: string;
  button: button;
  image: string;
  imagedarkmode: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
