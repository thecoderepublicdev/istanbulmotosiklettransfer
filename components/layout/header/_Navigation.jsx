import classNames from "classnames";
import { useRouter } from "next/router";
import { useMemo } from "react";

function NavigationItem({url, title, children}) {
    const router = useRouter();
    
    const isActive = (router.asPath === url)

    const memorizedUrl = useMemo(() => {
        return url
    }, [url]);

    const memorizedTitle = useMemo(() => {
        return title;
    }, [title])

    return(
        <li>
            <a className={classNames(
                'p-4 rounded-xl', {
                    ['bg-[#004225] text-white']: isActive,
                    ['hover:bg-[#004225]/10']: !isActive
                }
            )} href={memorizedUrl} title={memorizedTitle}>{children}</a>
        </li>
    )
}

export default function Navigation({children}) {
    return(
        <nav>
            <ul className="flex justify-between align-center items-center content-center gap-4">
                {children}
            </ul>
        </nav>
    )
}

Navigation.Item = NavigationItem;