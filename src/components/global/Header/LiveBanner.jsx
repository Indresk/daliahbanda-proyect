import { Link } from "react-router"
export default function LiveBanner(){
    return(
        <section role="region" aria-label="Transmisión en vivo activa" class="live-banner bg-pink-800">
            <div class="live-banner-content flex gap-2 justify-around flex-wrap p-2">
                <strong class="live-indicator" aria-hidden="true">● EN VIVO</strong>
                <p>Daliah Banda está transmitiendo su ensayo en directo desde Bogotá.</p>
                <Link to="/live" title="Entrar al streaming en vivo de Daliah Banda" class="live-banner-button underline">Ver transmisión ahora</Link>
            </div>
        </section>
    )
}