import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';

@Controller('gpt')
export class GptController {
  constructor(@Inject('GPT_SERVICE') private client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Post()
  async sentTest() {
    console.log('start');
    this.client.send('user', 'hello').subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
