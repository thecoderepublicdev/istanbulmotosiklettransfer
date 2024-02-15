import Turkey from "@data/Turkey";
import Link from 'next/link'
import { replaceTurkishCharacters } from "@hooks/createSlug";

export default function RegionList() {
    return(
        <div className="grid grid-cols-2 xl:grid-cols-5 2xl:grid-cols-5 lg:grid-cols-5 gap-4">
            {Turkey.map((region, key) => (
                <div key={key} className="min-h-[80px] p-4 grid place-content-center place-items-center rounded-xl bg-white">
                    <h4 className="text-lg text-center font-bold">
                        <Link href={{
                            pathname: `/hizmetlerimiz/transfer/istanbul-${replaceTurkishCharacters(region.toLowerCase())}-motosiklet-transfer-hizmeti`,
                            query: {region: `İstanbul-${region}`}
                        }}>
                            {`İstanbul-${region}`}
                        </Link>
                    </h4>
                </div>
            ))}
        </div>
    )
}