import About from "@/components/About";
import Employees from "@/components/Employees";
import FormContact from "@/components/FormContact";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section id="home" className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>Home</h1>
            </section>
            <section id="about" className="flex min-h-screen flex-col items-center justify-between p-24">
                <About/>
            </section>
            <section id="employees" className="flex min-h-screen flex-col items-center justify-between p-24">
                <Employees/>
            </section>
            <section id="portfolio" className="flex min-h-screen flex-col items-center justify-between p-24">
                <Portfolio/>
            </section>
            <section id="form" className="flex min-h-screen flex-col items-center justify-between p-24">
                <FormContact/>
            </section>
        </main>
    )
}
