import {useState, createContext, useEffect} from 'react'

const Context = createContext();

const ContextProvider = props => {

    const [theme, setTheme] = useState('#fff')

    const [smallScreen, setSmallScreen] = useState(false)
    
    const [displaySidebar, setDisplaySidebar] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const switchTheme = () => {
        setTheme(prevTheme => prevTheme === '#fff' ? '#212121' : '#fff')
    }

    const toggleSidebar = () => {
        setDisplaySidebar(prevState => !prevState)
    }

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(()=>{

        window.addEventListener('resize', updateScreenWidth)
        if(screenWidth > 900){
            setDisplaySidebar(true)
        }else{
            setDisplaySidebar(false)
        }
    },[screenWidth])

    return(
        <Context.Provider value={{theme, switchTheme, displaySidebar, toggleSidebar}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider as Provider}