import {Noto_Sans} from "@next/font/google";

const notoSans = Noto_Sans({weight: '400', subsets: ['latin']})

export default function MyApp({Component, pageProps}) {
    return (
        <main className={notoSans.className}>
            <Component {...pageProps} />
        </main>
    );
}