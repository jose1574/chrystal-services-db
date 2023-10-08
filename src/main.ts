import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const port = configService.get('SERVER_PORT');

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
<<<<<<< HEAD
  await app.listen(port).then((server) => {
    if(server) {
      console.log(`servidor iniciado en el puerto ${port}`);
      
    }else{
      console.error(`error al iniciar servidor`);
      
    }
  } );
=======
=======
>>>>>>> parent of 551cbdb (se realizaron cambios en los nombres de las funciones de los servicios y controladores para que se entiendan mejor, ademas de que se mejoraron las funciones de los servicios, se añadio operation update en cada una de las tablas)
  await app.listen(port).then(() => {
    console.log(`servidor iniciado en el puerto ${port}`);
  });
>>>>>>> development
}
bootstrap();
