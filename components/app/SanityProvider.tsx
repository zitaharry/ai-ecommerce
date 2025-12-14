"use client";

import { ReactNode } from "react";
import { SanityApp } from "@sanity/sdk-react";
import Loading from "@/app/(app)/loading";

const SanityProvider = ({ children }: { children: ReactNode }) => {
  const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true,
  };

  return (
    <SanityApp config={config} fallback={<Loading />}>
      {children}
    </SanityApp>
  );
};
export default SanityProvider;
