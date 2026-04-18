import { DeliveryPartner } from '../types';

export const deliveryPartners: DeliveryPartner[] = [
  {
    id: '1',
    name: 'DoorDash',
    displayName: 'DoorDash',
    description: 'Get your favorites delivered right to your doorstep in minutes.',
    bgColor: '#FF3008',
    icon: 'https://cdn.worldvectorlogo.com/logos/doordash.svg',
    url: 'https://www.doordash.com'
  },
  {
    id: '2',
    name: 'Uber Eats',
    displayName: 'Uber Eats',
    description: 'Premium delivery experience with real-time tracking of your feast.',
    bgColor: '#000000',
    icon: 'https://cdn.worldvectorlogo.com/logos/uber-eats-1.svg',
    url: 'https://www.ubereats.com'
  },
  {
    id: '3',
    name: 'Grubhub',
    displayName: 'Grubhub',
    description: 'Support local dining and enjoy our royal curated menu at home.',
    bgColor: '#F63440',
    icon: 'https://cdn.worldvectorlogo.com/logos/grubhub.svg',
    url: 'https://www.grubhub.com'
  }
];
