import { DataTable } from "@shopify/polaris";

const productData = [
  {
    name: "Product 1",
    avgReviewStar: 4.5,
    avgRating: 4.7,
    totalReviews: 120,
  },
  {
    name: "Product 2",
    avgReviewStar: 3.8,
    avgRating: 4.0,
    totalReviews: 56,
  },
  {
    name: "Product 3",
    avgReviewStar: 5.0,
    avgRating: 4.9,
    totalReviews: 200,
  },
];

export function ProductTable() {
  const rows = productData.map((product) => [
    product.name,
    product.avgReviewStar.toFixed(1), // Show 1 decimal place
    product.avgRating.toFixed(1),
    product.totalReviews.toString(),
  ]);

  const headers = [
    "Product Name",
    "Avg Review Star",
    "Avg Rating",
    "Total Reviews",
  ];

  return (
    <div>
      <DataTable
        columnContentTypes={["text", "numeric", "numeric", "numeric"]}
        headings={headers}
        rows={rows}
      />
    </div>
  );
}
