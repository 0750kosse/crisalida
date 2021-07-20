export interface Logo {
  size?: 'small' | 'medium' | 'large';
}

export interface NavBarProps {
  text?: string,
  href?: string,
  open: boolean,
  setOpen?: (x: boolean) => void,
  scrollY?: Object
}

export interface BurguerIconProps {
  onClick?: (x: boolean) => void,
  open: boolean,
  setOpen: (x: boolean) => void
}

export interface InfoSectionsProps {
  primary?: boolean,
  secondary?: boolean,
  header?: string,
  subheader?: string,
  cta?: boolean,
  className?: string
}

export interface HeaderProps {
  scrollY: Object
}

export interface ServicesProps {
  image: any,
  altText: string,
  cta: string,
  ctaText: string
}

export interface SocialMediaIcons {
  altText: string,
  image: any
}

export interface FooterProps {
  className?: string
}