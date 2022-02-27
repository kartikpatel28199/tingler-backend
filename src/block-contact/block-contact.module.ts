import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockContactRepository } from './respository/block-contact.repository';
import { BlockContactService } from './block-contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlockContactRepository])],
  providers: [BlockContactService],
  exports: [BlockContactService],
})
export class BlockContactModule {}
