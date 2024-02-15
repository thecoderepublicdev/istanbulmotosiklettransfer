function Title({children}) {
    return <h2 className="font-bold text-3xl tracking-tighter">{children}</h2>
}
function Description({children}) {
    return <p className="text-xl text-black/50">{children}</p>
}
function Button({link, children}) {
    return <a href={link} className="block rounded-xl border border-gray-300 px-8 py-4 font-bold cursor-pointer hover:bg-gray-100 w-fit">{children}</a>
}
function Icon({children}) {
    return(
        <div className="p-4 rounded-xl w-20 h-20 grid place-conten-center place-items-center bg-black text-white">
            <span className="material-symbols-rounded !text-[40px]">{children}</span>
        </div>
    )
}

export default function ContactChannelBox({children}) {
    const Childrens = {
        Title: children.find(c => c.type === Title),
        Icon: children.find(c => c.type === Icon),
        Description: children.find(c => c.type === Description),
        Button: children.find(c => c.type === Button),
    }

    return(
        <div className="bg-white rounded-xl p-6 flex gap-4 justify-between flex-col">
            {Childrens.Icon}
            <div className="grid gap-2">
                {Childrens.Title}
                {Childrens.Description}
                {Childrens.Button}
            </div>
        </div>
    )
}

ContactChannelBox.Title = Title;
ContactChannelBox.Description = Description;
ContactChannelBox.Button = Button;
ContactChannelBox.Icon = Icon;