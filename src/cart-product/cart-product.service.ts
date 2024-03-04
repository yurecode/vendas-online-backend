import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartProductEntity } from './entities/cart-product.entity';
import { Repository } from 'typeorm';
import { InsertCartDTO } from '../cart/dtos/insert-cart.dto';
import { CartEntity } from '../cart/entities/cart.entity';

@Injectable()
export class CartProductService {

    constructor(
        @InjectRepository(CartProductEntity)
        private readonly cartProductRepository: Repository<CartProductEntity>
    ){}

    async verifyProductInCart(productId: number, cartId: number): Promise<CartProductEntity> {
        const cartProduct = await this.cartProductRepository.findOne({
            where: {
                productId,
                cartId,
            }
        });

        if(!cartProduct){
            throw new NotFoundException('Product not found in cart')
        }

        return cartProduct;
    }

    async createProductInCart(inserctCartDTO: InsertCartDTO, cartId: number): Promise<CartProductEntity> {
        return this.cartProductRepository.save({
            amount: inserctCartDTO.amount,
            productId: inserctCartDTO.productId,
            cartId,
        });         
    }

    async insertProductInCart(inserctCartDTO: InsertCartDTO, cart: CartEntity): Promise<CartProductEntity> {
        const cartProduct = await this.verifyProductInCart(inserctCartDTO.productId, cart.id).catch(() => undefined);

        if(!cartProduct){
            return this.createProductInCart(inserctCartDTO, cart.id);
        }

        return this.cartProductRepository.save({
            ...cartProduct,
            amount: cartProduct.amount + inserctCartDTO.amount,
        });

    }
}
