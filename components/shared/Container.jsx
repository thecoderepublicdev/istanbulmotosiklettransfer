import classNames from "classnames";

export default function Container({gap, children}) {
    return(
        <section className={classNames("container max-w-screen-2xl mx-auto", {
            ["grid gap-8"]: (gap)
        })}>
            {children}
        </section>
    )
}