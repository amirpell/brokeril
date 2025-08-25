import Footer from "@/components/home-three/Footer";
import Header from "@/components/home-three/Header";

type LayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
