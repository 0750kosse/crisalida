import { ServicesProps, InfoSectionsProps, SocialMediaIcons } from '../../types'
import LivingRoom from '../images/living-room.webp'
import Kitchen from '../images/kitchen.webp'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

export const introCompany: InfoSectionsProps = {
  header: 'Crisalida Homes. Un enfoque diferente para comprar o vender tu casa.',
  subheader: 'Because we make it personal.',
  cta: true
}

export const aboutIntro: InfoSectionsProps = {
  header: 'Porque no hay nada que nos entusiasme más que ofrecer un servicio amable a la vez que profesional.',
  subheader: 'Conócenos'
}

export const services: ServicesProps[] = [
  {
    image: LivingRoom,
    altText: 'LivingRoom',
    cta: 'Vende con nosotros',
    ctaText: 'Info para vendedores'
  },
  {
    image: Kitchen,
    altText: 'Kitchen',
    cta: 'Guia de compra',
    ctaText: 'Info para compradores'
  }
]

export const icons: SocialMediaIcons[] = [
  { altText: 'facebook', image: facebook },
  { altText: 'twitter', image: twitter },
  { altText: 'instagram', image: instagram }
]

export const contact: InfoSectionsProps = {
  header: 'Hablamos?',
  subheader: 'Si deseas alguna informacion sobre nuestros servicios, o tienes alguna duda, dejanos un mensaje y nos pondremos en contacto inmediatamente'
}






