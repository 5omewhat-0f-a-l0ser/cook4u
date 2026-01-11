import './Main.css';  

function Main() {
    return (
        <main>
            <section className="cards">
                <p className="cards__text">
                    This is where the recipe cards will be displayed.
                </p>
            </section> 
            <ul className="cards__list">
                {/* Recipe cards will be dynamically inserted here */}
            </ul>
        </main>
    )
}

export default Main;