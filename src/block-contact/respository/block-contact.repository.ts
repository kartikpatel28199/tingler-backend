import { EntityRepository, Repository } from 'typeorm';
import { BlockContact } from '../entities/block-contact.entity';

@EntityRepository(BlockContact)
export class BlockContactRepository extends Repository<BlockContact> {}
