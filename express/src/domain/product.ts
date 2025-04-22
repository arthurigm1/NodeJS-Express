export type ProductProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export class Product {
  constructor(private props: ProductProps) {
    this.validate();
  }

  public static create(name: string, price: number) {
    return new Product({
      id: crypto.randomUUID(),
      name,
      price,
      quantity: 0,
    });
  }
  public static with(props: ProductProps) {
    return new Product(props);
  }

  private validate() {
    if (this.props.quantity < 0) {
      throw new Error("Quantity cannot be negative");
    }
  }
}
