import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { SanityLive } from "@/sanity/lib/live";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <main>{children}</main>
      <Toaster position="bottom-center" />
      <SanityLive />
    </ClerkProvider>
  );
};
export default AppLayout;
