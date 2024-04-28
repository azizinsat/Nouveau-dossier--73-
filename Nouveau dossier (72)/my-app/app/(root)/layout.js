import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css"
import {Inter} from "next/font/google";
import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import TopBar from "@components/layout/TopBar";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";
export const metadata = {
  title: 'AID',
  description: 'Aid social media section',
};
const inter =Inter({ subsets : ['latin']})

export default function RootLayout({ children }) {
  // Hardcoded Clerk publishable key
  const clerkPublishableKey = 'pk_test_cmVmaW5lZC1wbGF0eXB1cy00My5jbGVyay5hY2NvdW50cy5kZXYk';

  return (
    <ClerkProvider publishableKey='pk_test_cmVmaW5lZC1wbGF0eXB1cy00My5jbGVyay5hY2NvdW50cy5kZXYk'>
      <html lang="en">
        <body className={'${inter.className} bg-purple-2 text-light-1'}>
          <main className="flex flex-row">
          <LeftSideBar />
          <MainContainer>
            
            {children} 
            </MainContainer>
          <RightSideBar/>
          </main>
          <BottomBar />
          </body>
      </html>
    </ClerkProvider>
  );
}
