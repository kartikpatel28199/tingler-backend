import { Injectable } from '@nestjs/common';
import { BlockContact } from './entities/block-contact.entity';
import { BlockContactRepository } from './respository/block-contact.repository';

@Injectable()
export class BlockContactService {
  constructor(private blockContactRepository: BlockContactRepository) {}

  async blockContact(blockUserId: string, user) {
    const blockContactExist = await this.blockContactExist(blockUserId, user);
    if (blockContactExist) {
      return 'User already blocked  ';
    }
    const blockContact = new BlockContact();
    blockContact.userId = user.uid;
    blockContact.blockedContactId = blockUserId;
    return await this.blockContactRepository.save(blockContact);
  }

  async blockContactExist(blockUserId: string, user) {
    return this.blockContactRepository.findOne({
      where: { userId: user.uid, blockedContactId: blockUserId },
    });
  }
}
