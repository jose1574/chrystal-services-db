import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { SalesOperationService } from '../services/sales-operation.service';

@Controller('sales-operation')
export class SalesOperationController {
    constructor(
        private readonly salesOperationService:SalesOperationService,
    ) {}

    @Get()
    async findAllSalesOperation() {
        return this.salesOperationService.findAllSalesOperation()
    }

    @Get(':id')
    async findOneSalesOperation(@Param("id") id : string) {
        return this.salesOperationService.findOneSalesOperation(id)
    }
}
