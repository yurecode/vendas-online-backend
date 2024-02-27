import { Controller, Get } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';

@Roles(UserType.Admin, UserType.User)
@Controller('product')
export class ProductController {
    constructor(
        private readonly produtcService: ProductService
    ){}

    @Get()
    async findAll(): Promise<ReturnProduct[]>{
        return (await this.produtcService.findAll()).map((product) => new ReturnProduct(product),
        );
    }
}
