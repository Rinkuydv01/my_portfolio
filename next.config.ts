import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-expect-error Disable new Next 15+ indicator keys that might not be in types yet
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
