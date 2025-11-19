// import { defineConfig } from "@prisma/config";

// export default defineConfig({
//   datasource: {
//     url: process.env.DATABASE_URL!, // your Postgres connection
//   },
// });
// import { defineConfig } from "@prisma/config";

// export default defineConfig({
//   engine: {
//     // Use "binary" unless you are on edge/wasm
//      "binary",
//   },
//   datasource: {
//     provider: "postgresql",
//     url: process.env.DATABASE_URL!,
//   },
// });

import { defineConfig } from "@prisma/config";

export default defineConfig({
  engine: "binary", // or "wasm"
  datasource: {
    db: {
      url: process.env.DATABASE_URL!,
    },
  },
});
