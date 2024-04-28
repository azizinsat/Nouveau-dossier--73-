import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from 'next/font/google'
export const metadata={

    title: 'Auth',
    description: 'Aid social media section',
    }
    const inter =Inter({ subsets : ['latin']})

    export default function RootLayout({children}){
        const clerkPublishableKey = 'pk_test_cmVmaW5lZC1wbGF0eXB1cy00My5jbGVyay5hY2NvdW50cy5kZXYk';

        return(
            <ClerkProvider publishableKey='pk_test_cmVmaW5lZC1wbGF0eXB1cy00My5jbGVyay5hY2NvdW50cy5kZXYk'>
            <html lang="en">
                <body className={'${inter.className} bg-purple-2'}>{children}</body>
            </html>
            </ClerkProvider>
        )
    }