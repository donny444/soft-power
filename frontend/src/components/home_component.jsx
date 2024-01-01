export default function HomePage() {
    return (
        <>

        </>
    )
}

function Home() {
    return (
        <>
            <Main />
            <Article />
            <Section />
        </>
    )
}

function Main() {
    return (
        <main>
            <h1>Know Thai Soft Power</h1>
            <h3>Get to know what it actually is, and the real meaning of "Soft Power"</h3>
            <button>Thai Food</button>
            <button>Thai Weather</button>
        </main>
    )
}

function Article() {
    return (
        <article>
            <h2>Meaning of "Soft Power" by Joseph Nye</h2>
            <p>In politics (and particularly in international politics), soft power is the ability to co-opt rather than coerce 
                (in contrast with hard power). It involves shaping the preferences of others through appeal and attraction. 
                Soft power is non-coercive, using culture, political values, and foreign policies to enact change. In 2012, 
                Joseph Nye of Harvard University explained that with soft power, "the best propaganda is not propaganda", 
                further explaining that during the Information Age, "credibility is the scarcest resource".
            </p>
            <p>Soft power <b>is not</b> propaganda or misunderstand information</p>
            <fig></fig>
        </article>
    )
}

function Section() {
    return (
        <section>
            <h2>Thailand Featured Soft Power</h2>
            <section>
                <h4>Mango and Sticky Rice</h4>
                <fig></fig>
            </section>
            <section>
                <h4>Y-Series</h4>
                <fig></fig>
            </section>
            <section>
                <h4>T-POP</h4>
                <fig></fig>
            </section>
            <section>
                <h4>Thai Foods</h4>
                <fig></fig>
            </section>
        </section>
    )
}