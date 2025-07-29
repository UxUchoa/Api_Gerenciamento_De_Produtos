import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    @ApiProperty({ 
        description: 'ID único do produto',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ 
        description: 'Nome do produto',
        example: 'Smartphone Samsung Galaxy S21'
    })
    @Column({type: 'varchar', length: 255, unique:true})
    name: string;

    @ApiProperty({ 
        description: 'Descrição do produto',
        example: 'Smartphone com tela de 6.2 polegadas, 128GB de armazenamento',
        required: false
    })
    @Column({type: 'text', nullable: true})
    description: string;

    @ApiProperty({ 
        description: 'Preço do produto',
        example: 2999.99
    })
    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;

    @ApiProperty({ 
        description: 'Quantidade em estoque',
        example: 50
    })
    @Column({type: 'int', default: 0})
    stock: number;

    @ApiProperty({ 
        description: 'Data de criação do produto',
        example: '2024-01-15T10:30:00.000Z'
    })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({ 
        description: 'Data da última atualização do produto',
        example: '2024-01-15T10:30:00.000Z'
    })
    @UpdateDateColumn()
    updatedAt: Date;
    
}
