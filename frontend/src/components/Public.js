import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Mr J's Super Bass Practice Page!</span></h1>
            </header>
            <main className="public__main">
                <h1> "MrJSuperBass" (800) SUPER-BASS</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Owner: Mr J</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                <h1>Become A Better Bass Player Now!</h1>
                
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public