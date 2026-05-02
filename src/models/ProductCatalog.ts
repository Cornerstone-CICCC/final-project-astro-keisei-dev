import type { ProductData } from "../types/ProductData";
import { Product } from "./Product";

export class ProductCatalog {
  private readonly products: Product[];

  public constructor(rawProducts: ProductData[]) {
    this.products = rawProducts.map((product: ProductData) => new Product(product));
  }

  public getAllProducts(): Product[] {
    return [...this.products];
  }

  public getProductBySlug(slug: string): Product | undefined {
    return this.products.find((product: Product) => product.getSlug() === slug);
  }

  public getProductsByCategory(category: string): Product[] {
    return this.products.filter((product: Product) => product.category === category);
  }

  public getCategories(): string[] {
    const categories: string[] = this.products.map((product: Product) => product.category);
    return Array.from(new Set(categories));
  }
}
