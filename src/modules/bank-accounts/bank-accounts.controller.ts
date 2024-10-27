import { Controller, Get, Post, Body, Param, Delete, Put, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { BankAccountService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('bank-account')
export class BankAccountController {
    constructor(private readonly bankAccountService: BankAccountService) {}

    @Post()
    create(@ActiveUserId() userId: string, @Body() createBankAccountDto: CreateBankAccountDto) {
        return this.bankAccountService.create(userId, createBankAccountDto);
    }

    @Get()
    findAll(@ActiveUserId() userId: string) {
        return this.bankAccountService.findAllByUserId(userId);
    }

    @Put(':bankAccountId')
    update(
        @ActiveUserId() userId: string,
        @Param('bankAccountId', ParseUUIDPipe) bankAccountId: string,
        @Body() updateBankAccountDto: UpdateBankAccountDto) {
        return this.bankAccountService.update(userId, bankAccountId, updateBankAccountDto);
    }

    @Delete(':bankAccountId')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(
        @ActiveUserId() userId: string,
        @Param('bankAccountId', ParseUUIDPipe) bankAccountId: string) {
        return this.bankAccountService.remove(userId, bankAccountId);
    }
}
