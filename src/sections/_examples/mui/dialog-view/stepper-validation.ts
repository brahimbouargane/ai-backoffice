// eslint-disable-next-line import/no-extraneous-dependencies
import { z } from 'zod';

export const databaseSchema = z.object({
  displayName: z.string().nonempty({ message: 'Display name is required' }),
  databaseName: z.string().nonempty({ message: 'Database name is required' }),
  host: z.string().nonempty({ message: 'Host is required' }),
  port: z.string().nonempty({ message: 'Port is required' }),
  username: z.string().nonempty({ message: 'Username is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});
