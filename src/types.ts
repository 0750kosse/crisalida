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
  header: string,
  subheader?: string,
}

export interface HeaderProps {
  scrollY: Object
}

export interface ServicesProps {
  image: any,
  cta: string,
  ctaText: string
}