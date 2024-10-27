import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-accounts.service';
import { BankAccountController } from './bank-accounts.controller'; 

@Module({
  controllers: [BankAccountController],
  providers: [BankAccountService]
})
export class BankAccountModule {}
