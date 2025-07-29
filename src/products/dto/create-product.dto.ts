import { IsString,IsNotEmpty, IsNumber, MinLength, IsPositive } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    
    @IsString()
    description?: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    stock: number;
}
