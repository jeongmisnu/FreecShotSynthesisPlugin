import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const PostgresConfig = async (
  config: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: config.get('database.host'),
  port: +config.get('database.port'),
  username: config.get('database.user'),
  password: config.get('database.password'),
  database: config.get('database.name'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: config.get('database.synchronize'),
});
