import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.module';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:User
})
@Controller('users')
@ApiTags('用户3')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){

    }
}
