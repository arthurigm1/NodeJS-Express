import { Product } from "../../domain/product/entity/product";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductInputDto = void;
export type ListProductOutputDto = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
export class ListProductUsecase
  implements Usecase<ListProductInputDto, ListProductOutputDto[]>
{
  private constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway) {
    return new ListProductUsecase(productGateway);
  }

  public async execute(): Promise<ListProductOutputDto[]> {
    const products = await this.productGateway.list();
    const output = this.presentOutput(products);
    return output;
  }

  private presentOutput(products: Product[]): ListProductOutputDto[] {
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    }));
  }
}
