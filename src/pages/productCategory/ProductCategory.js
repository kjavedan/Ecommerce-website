import React, { useContext, useEffect, useState } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import Sidebar from '../../layouts/sidebar/Sidebar'
import { sidebarDataMobile } from '../../data/sidebarData'
import StyledMain from '../../layouts/main/components/styles/Main.styled'
import SidebarToggler from '../../layouts/main/components/SidebarToggler'
import PageRoute from '../../components/PageRoute'
import FastLinks from '../../components/FastLinks'
import { ProductCategorylinks } from '../../data/fastLinks'
import Container from './styles/Container.styled';
import Products from './components/Products'
import { Pagination } from '@mui/material'

const ProductCategory = () => {

    const {theme, displaySidebar} = useContext(Context)

    const [numberOfPages, setNumberOfPages] = useState()

    const [selectedPage, setselectedPage] = useState(1)


    const paginaitonStyles = {
        margin: '4rem 0rem',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-text':{
            color: theme === '#fff' ? 'black' : 'white',
        },
        '& .Mui-selected':{
            backgroundColor: theme === '#fff' ? '' : 'black'
        }

    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0
        })
    },[selectedPage])

    return (
        <StyledContainer theme={theme}>
            <Header />
            <Sidebar category={sidebarDataMobile} isProductCategory={true}/>
            <StyledMain theme={theme} displaySidebar={displaySidebar}>
                <SidebarToggler />
                <Container>
                    <PageRoute /> 
                </Container>
                <FastLinks links={ProductCategorylinks}/>
                <div style={{backgroundColor: theme === '#fff' ? '#e0e0e0' : '#2E2E2E'}}>
                    <Products 
                    category={'laptop'}
                    selectedPage={selectedPage} 
                    setNumberOfPages={setNumberOfPages}
                    />
                </div>
                <Pagination 
                sx={paginaitonStyles} 
                count={numberOfPages} 
                onChange={(e, value) => setselectedPage(value)}
                />
            </StyledMain>
            <Footer /> 
        </StyledContainer>
    )
}

export default ProductCategory