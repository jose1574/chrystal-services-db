import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { SalesOperationModule } from './sales-operation/sales-operation.module';

@Module({
  imports: [ DatabaseModule, ProductsModule, SalesOperationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
