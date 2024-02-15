import Turkey from "@data/Turkey";
import Link from 'next/link'
import { createSlug } from "@hooks/createSlug";

export default function RegionList() {
    return(
        <div className="grid grid-cols-2 xl:grid-cols-5 2xl:grid-cols-5 lg:grid-cols-5 gap-4">
            {Object.entries(Turkey).map(([key, region]) => (
                <div key={key} className="min-h-[80px] relative p-4 grid place-content-center place-items-center rounded-xl bg-white">
                    <h4 className="text-lg text-center font-bold">
                        <Link href={`/istanbul-${createSlug(region)}-motosiklet-transfer-hizmeti`} className="after:absolute after:inset-0">
                            {`İstanbul-${region}`}
                        </Link>
                    </h4>
                </div>
            ))}
        </div>
    )
}