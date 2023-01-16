import {Noto_Sans} from "@next/font/google";
import {BrownProvider} from "../context/context";
import {prefix} from "../config/config";

const notoSans = Noto_Sans({weight: '400', subsets: ['latin']})

export default function MyApp({Component, pageProps}) {
    return (
        <BrownProvider value={{ prefix }}>
            <main className={notoSans.className}>
                <Component {...pageProps} />
            </main>
        </BrownProvider>
    );
}