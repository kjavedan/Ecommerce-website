import {useState, createContext} from 'react'

const Context = createContext();

const ThemeProvider = props => {

    const [theme, setTheme] = useState('#fff')

    const switchTheme = () => {
        setTheme(prevTheme => prevTheme === '#fff' ? '#212121' : '#fff')
    }

    return(
        <Context.Provider value={{theme, switchTheme}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ThemeProvider as Provider}