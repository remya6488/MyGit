import { Address } from './Address';
import { Contact } from './Contact';

export class User {
    constructor(
      public id: string,
      public firstName: string,
      public lastName: string,
      public mailId: string,
      public addresses: Address[],
      public contacts: Contact[] 
    ){}
  }