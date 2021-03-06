import { Account } from '@mutadev/account';
import { Client } from '@mutadev/client';
import { RISCVService } from './RISCVService';

const account = Account.fromPrivateKey(
  '0x2b672bb959fa7a852d7259b129b65aee9c83b39f427d6f7bded1f58c4c9310c2',
);

const client = new Client();

test('test RISCVService', async () => {
  const service = new RISCVService(client, account);

  const res = await service.read.check_deploy_auth({
    addresses: ['0x0000000000000000000000000000000000000000'],
  });

  expect(Number(res.code)).toBe(0);
});
