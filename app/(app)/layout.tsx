import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { SanityLive } from "@/sanity/lib/live";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import Header from "@/components/app/Header";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import CartSheet from "@/components/app/CartSheet";
import AppShell from "@/components/app/AppShell";
import { SanityApp } from "@sanity/sdk-react";
import Loading from "@/app/(app)/loading";
import SanityProvider from "@/components/app/SanityProvider";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <AppShell>
            <Header />
            <main suppressHydrationWarning>{children}</main>
          </AppShell>
          <CartSheet />
          {/*<ChatSheet />*/}
          <Toaster position="bottom-center" />
          <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  );
};
export default AppLayout;
