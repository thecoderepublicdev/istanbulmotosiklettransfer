import { useMemo } from "react"

function AltText({children}) {
    return useMemo(() => {
        return children;
    }, [children]);
}

export default function Logo({orientation = 'horizontal', color = 'Colored', children}) {
    return(
        <a href="/" title="İstanbul Motosiklet Transfer">
            <img 
                src={`/assets/logo/${orientation}/${color}.svg`} 
                className={`!w-[200px] h-auto object-cover`} 
                alt={() => children.filter(c => c.type === AltText)}
            />
        </a>
    )
}

Logo.AltText = AltText