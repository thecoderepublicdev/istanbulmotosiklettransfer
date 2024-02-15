import { useMemo } from "react"

function Title({children}) {
    const memorizedTitle = useMemo(() => {
        return children;
    }, [children])

    return(
        <h1 className="tracking-tighter	font-bold text-3xl xl:text-6xl lg:text-6xl 2xl:text-6xl text-white">{memorizedTitle}</h1>
    )
}

function Description({children}) {
    const memorizedDescription = useMemo(() => {
        return children;
    }, [children])

    return(
        <p className="text-white text-xl">{memorizedDescription}</p>
    )
}

export default function Masthead({children}) {
    const Childrens = {
        Title: children.find(c => c.type === Title),
        Description: children.find(c => c.type === Description),
    }
    
    return(
        <section className="relative overflow-hidden container mx-auto max-w-screen-2xl rounded-xl">
            <video className="bg-black/50 h-[700px] object-cover" width="100%" autoPlay muted controls={false}>
                <source src="assets/videos/istanbul-motosiklet-transfer-masthead-video.mp4" type="video/mp4"/>
            </video>

            <div className="rounded-xl grid gap-4 absolute bottom-8 p-8 left-8 right-8 backdrop-blur-lg w-auto">
                {Childrens.Title}
                {Childrens.Description}
                
                <a className="text-[#004225] bg-white w-fit text-center font-bold px-8 py-4 rounded-full" href="https://wa.me/905323902067" title="İstanbul Motosiklet Transfer İletişim Numarası">
                    Bizimle İletişime Geçin
                </a>
            </div>
        </section>
    )
}

Masthead.Title = Title
Masthead.Description = Description