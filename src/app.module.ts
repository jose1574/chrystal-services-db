import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { ProductsCodesModule } from './products-codes/products-codes.module';
import { ProductsUnitsModule } from './products-units/products-units.module';
import { UnitModule } from './unit/unit.module';
import { DepartmentsModule } from './departments/departments.module';
import { StoresModule } from './stores/stores.module'; 
import { LocationsModule } from './locations/locations.module';
import { ProductsPartsModule } from './products-parts/products-parts.module';
import { ProductsStockModule } from './products-stock/products-stock.module';
import { MarksModule } from './marks/marks.module';
import { SizeModule } from './size/size.module';
import { TaxesModule } from './taxes/taxes.module';
import { TaxTypesModule } from './tax-types/tax-types.module';
import { CoinModule } from './coin/coin.module';
import { OriginModule } from './origin/origin.module';
import { StatusModule } from './status/status.module';
import { TechnicianModule } from './technician/technician.module';
import { ProductsImageModule } from './products-image/products-image.module';
import { ProductsLotsModule } from './products-lots/products-lots.module';
import { ProductsLotsStockModule } from './products-lots-stock/products-lots-stock.module';
import { ProductsLotsUnitsModule } from './products-lots-units/products-lots-units.module';
import { ProductsProviderModule } from './products-provider/products-provider.module';
import { ProviderModule } from './provider/provider.module';
import { CitysModule } from './citys/citys.module';
import { CountrysModule } from './countrys/countrys.module';
import { ProvincesModule } from './provinces/provinces.module';
import { TownsModule } from './towns/towns.module';
import { PersonTypeModule } from './person_type/person_type.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    DatabaseModule, 
    ProductsModule,
    ProductsCodesModule,
    ProductsUnitsModule,
    UnitModule,
    DepartmentsModule,
    StoresModule,
    LocationsModule,
    ProductsPartsModule,
    ProductsStockModule,
    MarksModule,
    SizeModule,
    TaxesModule,
    TaxTypesModule,
    CoinModule,
    OriginModule,
    StatusModule,
    TechnicianModule,
    ProductsImageModule,
    ProductsLotsModule,
    ProductsLotsStockModule,
    ProductsLotsUnitsModule,
    ProductsProviderModule,
    ProviderModule,
    CitysModule,
    CountrysModule,
    ProvincesModule,
    TownsModule,
    PersonTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
