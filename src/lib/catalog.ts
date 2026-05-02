import rawProducts from "../../products.json";
import { ProductCatalog } from "../models/ProductCatalog";
import type { ProductData } from "../types/ProductData";

const products: ProductData[] = rawProducts as ProductData[];

export const catalog: ProductCatalog = new ProductCatalog(products);
