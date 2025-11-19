import { authenticate } from "../shopify.server";
import { useLoaderData } from "react-router";

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

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
      }
    }
  }`,
  );
  const json = await response.json();
  return json.data;
};

export default function Reviews() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Product Reviews</h1>
      <table border={2}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sample data structure for products (replace with actual data fetching logic)
