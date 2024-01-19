import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

const configService = new ConfigService();
const port =  configService.get('SERVER_PORT'); 
  ;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port).then((server) => {
    if(!server) {
      console.error('error al iniciar el servidor');      
    }
    console.log(`servidor iniciado en el puerto ${port}`);
  });
}
bootstrap(); 
