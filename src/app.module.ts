import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // ✅ required in NestJS v10+
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // optional
    }),
    UserModule,
  ],
})
export class AppModule {}
