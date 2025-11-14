import { Investment } from "./components/Investment";
import { Questions } from "./components/Questions";
import { RentWithStyle } from "./components/Rent-with-style";


export default function LandlordsPage() {
    return (
        <main className="flex flex-col">
            <Investment/>
            <section className="px-[10rem] py-[3rem]">
                <RentWithStyle/>
            </section>
            <section className="px-[10rem] py-[3rem]">
                <Questions/>
            </section>
        </main>
    );
}