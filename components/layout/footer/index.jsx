import Logo from "@components/shared/Logo";
import Turkey from "@data/Turkey";
import TCRBadge from "./TCRBadge";
import Link from 'next/link'
import { replaceTurkishCharacters } from "@hooks/createSlug";
export default function Footer({childrens}) {
    return(
        <footer className="py-12 bg-black">
            <div className="container mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-3">
                    <div>
                        <Logo width={10} orientation="vertical" color="White">
                            <Logo.AltText>İstanbul Motosiklet Transfer | Transfer & Yol Yardım Hizmeti</Logo.AltText>
                        </Logo>
                    </div>
                </div>

                <div className="py-8 grid gap-4">
                    <label className="font-bold text-xl text-white py-4 border-b border-gray-500">Hizmet Verdiğimiz Bölgeler</label>
                    <ul className="grid lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2">
                        {Turkey.map((region, key) => (
                            <li key={key}>
                                <Link className="text-white/50 hover:text-white transition-all border border-transparent hover:border-white ease-in-out block p-4 rounded-xl hover:bg-white/10 cursor-pointer" href={{
                            pathname: `/hizmetlerimiz/transfer/istanbul-${replaceTurkishCharacters(region.toLowerCase())}-motosiklet-transfer-hizmeti`,
                            query: {region: `İstanbul-${region}`}
                        }} title={`${region} Motosiklet Transfer`}>{region}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-white/50 pt-8 flex border-t border-white/20 gap-4 flex-col xl:flex-row 2xl:flex-row lg:flex-row justify-between align-center content-center items-center">
                    <label>İstanbul Motosiklet Transfer&copy; {new Date().getFullYear()} Tüm Hakları Saklıdır</label>
                    <TCRBadge/>
                </div>
            </div>
        </footer>
    )
}