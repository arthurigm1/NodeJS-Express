import { Product } from "../entity/product";

export interface ProductGateway {
  save(product: Product): Promise<void>;
  list(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
