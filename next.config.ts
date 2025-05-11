import type { NextConfig } from "next";
import createMDX from '@next/mdx'
const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "js", "jsx", "mdx"],
  turbopack: {
    
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/
});

export default withMDX(nextConfig);
