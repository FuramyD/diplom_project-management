import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./modules/auth/auth.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { TeamsModule } from "./modules/teams/teams.module";
import { ConfigModule } from "@nestjs/config";
import { AuthController } from "./modules/auth/controller/auth.controller";

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://educationPlatform:educationPlatform1234!@cluster0.zj6m5.mongodb.net/educationPlatform?retryWrites=true&w=majority"),
        ConfigModule.forRoot(),
        AuthModule,
        ProjectsModule,
        TeamsModule,
    ],
    controllers: [AppController, AuthController],
    providers: [AppService],
})
export class AppModule {}
