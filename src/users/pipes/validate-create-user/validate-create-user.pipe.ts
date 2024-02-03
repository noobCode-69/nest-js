import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const parseAgeToInt = parseInt(value.age);
    console.log(parseAgeToInt);
    if (isNaN(parseAgeToInt)) {
      throw new HttpException(
        'Invalid data type for property age. Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { ...value, age: parseAgeToInt };
  }
}
