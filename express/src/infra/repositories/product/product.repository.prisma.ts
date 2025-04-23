import { PrismaClient } from "@prisma/client";
import { Product } from "../../../domain/product/entity/product";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";

export class ProductRepositoryPrisma implements ProductGateway {
  private constructor(private readonly prismaClient: PrismaClient) {}

  public static create(prismaClient: PrismaClient) {
    return new ProductRepositoryPrisma(prismaClient);
  }
  public async save(product: Product): Promise<void> {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
    await this.prismaClient.product.create({
      data,
    });
  }
  public async list(): Promise<Product[]> {
    const products = await this.prismaClient.product.findMany();

    const productList = products.map((p: Product) => {
      return Product.with({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
      });
    });

    return productList;
  }

  //
  findById(id: string): Promise<Product | null> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<Product | null> {
    throw new Error("Method not implemented.");
  }
  update(product: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
