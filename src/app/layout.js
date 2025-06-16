"use client";
import { ToastContainer } from "react-toastify";
import { AppWrapper } from "@/context/useAppContext";
import { CartProvider } from "@/context/cartContext";
import { UserProvider } from "@/context/userContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const metadata = {
  title: "Home",
  description: "Something does something something",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  if (pathName.startsWith("/profile")) {
    return (
      <html lang="en">
        <body>
          <UserProvider>
            <CartProvider>
              <AppWrapper>
                <Header />
                {children}
              </AppWrapper>
            </CartProvider>
          </UserProvider>
          <ToastContainer />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <UserProvider>
          <CartProvider>
            <AppWrapper>
              <Header />
              {children}
              <Footer />
            </AppWrapper>
          </CartProvider>
        </UserProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
