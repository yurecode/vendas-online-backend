import { Column } from "typeorm";
import { PaymentEntity } from "./payment.entity";

export class PaymentCreditCardEntity extends PaymentEntity {
    @Column({name: 'amount_payment', nullable: false})
    amountPayment: number;
    
}