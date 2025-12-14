import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { SanityLive } from "@/sanity/lib/live";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <CartStoreProvider>
      <main>{children}</main>
      <Toaster position="bottom-center" />
      <SanityLive />
      </CartStoreProvider>
    </ClerkProvider>
  );
};
export default AppLayout;
