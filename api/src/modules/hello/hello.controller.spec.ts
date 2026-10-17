import { Test } from '@nestjs/testing';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

async function createController(): Promise<HelloController> {
  const moduleRef = await Test.createTestingModule({
    controllers: [HelloController],
    providers: [HelloService],
  }).compile();

  return moduleRef.get(HelloController);
}

describe('HelloController', () => {
  it('returns Hello World', async () => {
    const controller = await createController();

    expect(controller.getHello()).toBe('Hello World!');
  });
});
