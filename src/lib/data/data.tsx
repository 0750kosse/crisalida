import { ServicesProps } from '../../types'
import LivingRoom from '../images/living-room.jpeg'
import Kitchen from '../images/kitchen.jpeg'

export const services: ServicesProps[] = [
  {
    image: LivingRoom,
    cta: 'Vende con nosotros',
    ctaText: 'Info para vendedores'
  },
  {
    image: Kitchen,
    cta: 'Guia de compra',
    ctaText: 'Info para compradores'
  }
]



