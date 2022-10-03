import {useState, createContext} from 'react'

const Context = createContext();

const ContextProvider = props => {

    const [theme, setTheme] = useState('#fff')
    
    const [displaySidebar, setDisplaySidebar] = useState(true)

    const switchTheme = () => {
        setTheme(prevTheme => prevTheme === '#fff' ? '#212121' : '#fff')
    }

    const toggleSidebar = () => {
        setDisplaySidebar(prevState => !prevState)
    }

    return(
        <Context.Provider value={{theme, switchTheme, displaySidebar, toggleSidebar}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider as Provider}