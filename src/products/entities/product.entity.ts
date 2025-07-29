import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255, unique:true})
    name: string;

    @Column({type: 'text', nullable: true})
    description: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;

    @Column({type: 'int', default: 0})
    stock: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
}
