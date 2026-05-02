import type { ProductData } from "../types/ProductData";

export class Product {
  public readonly id: number;
  public readonly title: string;
  public readonly slug: string;
  public readonly price: number;
  public readonly category: string;
  public readonly image: string;
  public readonly description: string;
  public readonly inStock: boolean;

  public constructor(data: ProductData) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.price = data.price;
    this.category = data.category;
    this.image = data.image;
    this.description = data.description;
    this.inStock = data.inStock;
  }

  public getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  public getSlug(): string {
    return this.slug;
  }

  public isInStock(): boolean {
    return this.inStock;
  }

  public getCategoryLabel(): string {
    const firstLetter: string = this.category.charAt(0).toUpperCase();
    return `${firstLetter}${this.category.slice(1)}`;
  }
}
