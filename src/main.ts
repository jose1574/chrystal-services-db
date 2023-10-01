import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port).then((server) => {
    if(server) {
      console.log(`servidor iniciado en el puerto ${port}`);
      
    }else{
      console.error(`error al iniciar servidor`);
      
    }
  } );
}
bootstrap();
