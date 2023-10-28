import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { ProductsCodesModule } from './products-codes/products-codes.module';
import { ProductsUnitsModule } from './products-units/products-units.module';
import { UnitModule } from './unit/unit.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    DatabaseModule, 
    ProductsModule,
    ProductsCodesModule,
    ProductsUnitsModule,
    UnitModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
