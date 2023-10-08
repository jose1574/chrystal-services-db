import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

const test = false;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'db1',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
<<<<<<< HEAD
        retryDelay: 3000,
=======
        retryDelay: 3000, 
>>>>>>> parent of 551cbdb (se realizaron cambios en los nombres de las funciones de los servicios y controladores para que se entiendan mejor, ademas de que se mejoraron las funciones de los servicios, se añadio operation update en cada una de las tablas)
        autoLoadEntities: true,
      }),
    }),

    // TypeOrmModule.forRootAsync({
      // name: 'db2',
      // imports: [ConfigModule],
      // inject: [ConfigService],
      // useFactory: async (configService: ConfigService) => ({
      //   type: 'postgres',
      //   host: configService.get('DB_HOST'),
      //   port: configService.get('DB_PORT'),
      //   username: configService.get('DB_USER'),
      //   password: configService.get('DB_PASSWORD'),
      //   database: configService.get('DB_NAME'),
      //   retryDelay: 3000,
      //   autoLoadEntities: true,
      // }),
    // }),


    // TypeOrmModule.forRootAsync({
    //   name: 'db2',
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => {
    //     const shouldConnectToDatabase = true; // Cambia esto a false si no deseas conectarte a la base de datos

    //     if (shouldConnectToDatabase) {
    //       try {
    //         return {
    //           type: 'postgres',
    //           host: configService.get('DB_HOST'),
    //           port: configService.get('DB_PORT'),
    //           username: configService.get('DB_USER'),
    //           password: configService.get('DB_PASSWORD'),
    //           database: configService.get('DB_NAME'),
    //           retryDelay: 3000,
    //           autoLoadEntities: true,
    //         };
    //       } catch (error) {
    //         console.error('Error al conectar a la base de datos:', error.message);
    //         // Mostrar mensaje de error en una ventana emergente
    //         alert('Error al conectar a la base de datos: ' + error.message);
    //         return null;
    //       }
    //     } else {
    //       return null;
    //     }
    //   },
    // })
  ],
})
export class DatabaseModule {}
