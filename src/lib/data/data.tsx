import { ServicesProps, InfoSectionsProps } from '../../types'
import LivingRoom from '../images/living-room.jpeg'
import Kitchen from '../images/kitchen.jpeg'

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




