import { IsNotEmpty } from 'class-validator';

export class CreateBillingDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;
}

export class UpdateBillingDto {
  readonly name?: string;
  readonly description?: string;
}