import { IsString,IsNotEmpty, IsNumber, MinLength, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ 
        description: 'Nome do produto',
        example: 'Smartphone Samsung Galaxy S21',
        minLength: 3
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    
    @ApiProperty({ 
        description: 'Descrição do produto',
        example: 'Smartphone com tela de 6.2 polegadas, 128GB de armazenamento',
        required: false
    })
    @IsString()
    description?: string;

    @ApiProperty({ 
        description: 'Preço do produto',
        example: 2999.99,
        minimum: 0
    })
    @IsNumber()
    @IsPositive()
    price: number;

    @ApiProperty({ 
        description: 'Quantidade em estoque',
        example: 50,
        minimum: 0
    })
    @IsNumber()
    stock: number;
}
