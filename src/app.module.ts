import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { SalesOperationModule } from './sales-operation/sales-operation.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';


@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    DatabaseModule, 
    ProductsModule,
    SalesOperationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
