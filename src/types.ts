export interface Logo {
  size?: 'small' | 'medium' | 'large';
}

export interface NavBarProps {
  text?: string,
  href?: string,
  open: boolean,
  setOpen?: (x: boolean) => void
}

export interface BurguerIconProps {
  onClick?: (x: boolean) => void,
  open: boolean,
  setOpen: (x: boolean) => void
}

export interface InfoSectionsProps {
  header: string,
  subheader?: string,
  image?: any,
  imageDescription?: string,
  cta?: boolean,
  ctaDescription?: string
}