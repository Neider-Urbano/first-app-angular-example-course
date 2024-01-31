export interface SocialNetwork {
  id: number;
  ariaLabel: string;
  title: string;
  href: string;
}

export type SocialNetworks = Array<SocialNetwork>;
