Hosted URL: https://roaring-concha-d876b2.netlify.app

I chose dynamic product pages with `src/pages/products/[slug].astro` and `getStaticPaths()`. This approach fits the dataset because each product already includes a stable slug, so static route generation is straightforward and reliable.

I chose this over manually authored pages because it avoids repetitive page code and keeps the routing logic tied directly to the data model. It also makes the catalog scalable: when a new product is added to `products.json`, the corresponding page is created automatically at build time.

Compared to category-based routes, per-product dynamic routes provide direct links that are cleaner for users and easier to share. Category routes are still useful for browsing, but they do not replace a dedicated detail view for each product.

The trade-off is that the route generation depends on slug correctness. If slugs are duplicated or malformed in the source JSON, page generation can break or produce conflicts. A future improvement would be to add validation in the catalog layer before building.
