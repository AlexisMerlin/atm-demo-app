import { EnumCardType } from '@/types/EnumCardType';
import { Client } from './client.slice';

const clientsDB: Record<string, Client> = {
  '1234': {
    balance: 0,
    cardType: EnumCardType.DEBIT,
    id: 'id-fake-1',
    name: 'Peter Parker',
  },
  '2345': {
    balance: 10000,
    cardType: EnumCardType.DEBIT,
    id: 'id-fake-2',
    name: 'Harvey Osborn',
  },
  '9876': {
    balance: 100,
    cardType: EnumCardType.CREDIT,
    id: 'id-fake-3',
    name: 'Mary Jane Watson',
  },
};

export function findClient(pin: string) {
  const client = clientsDB[pin];
  if (!client) {
    throw new Error('Client not found');
  }
  return client;
}
