import './style.css'

const setComponent = (component, text) => {
    switch (component) {
        case 'h2':
          return <h2>{text}</h2>
        case 'h3':
          return <h3>{text}</h3>
        default:
        return <h1>{text}</h1>
    }
}                                                                                                                                          


const Header = ({ children = 'Title', component }) => (
    <header className="title">
      {component ? setComponent(component, children) : children}
    </header>
)

export default Header;
