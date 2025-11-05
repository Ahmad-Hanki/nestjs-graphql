import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './graphql/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'src/schema.gql',
      driver: ApolloDriver,
      playground: true, // ✅ enables Apollo Sandbox
      introspection: true, // ✅ allows schema inspection
    }),
    UserModule,
  ],
})
export class AppModule {}
