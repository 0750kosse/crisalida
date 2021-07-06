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
  header: string,
  subheader?: string,
  cta?: boolean
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