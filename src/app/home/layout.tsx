import { Navbar } from "../ui/navbar/navbar";
import './home.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <section className="home">
        <div className="navegacion">
          <Navbar></Navbar>
        </div>
        <div className="content">
          {children}
        </div>

      </section>


    </>


  );
}