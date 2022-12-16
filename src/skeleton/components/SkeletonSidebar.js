import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Context } from '../../context/uiContext'
import { StyledCategory } from '../../layouts/sidebar/styles/Category.styled'
import StyledSidebar from '../../layouts/sidebar/styles/Sidebar.styled'
import { Wrapper } from '../../layouts/sidebar/styles/Wrappers.styled'

const SkeletonSidebar = () => {

    const {theme, displaySidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar} >
        <Wrapper theme={theme}>
            <StyledCategory>
                <h1>
                    <Skeleton width={'50%'} />
                </h1>
            </StyledCategory>
                <div>
                    <Skeleton style={{marginTop:'1rem'}}/>
                </div>
                <div>
                    <Skeleton count={10} style={{marginTop:'.5rem'}}/>
                </div>
            
                <h1>
                    <Skeleton width={'50%'} style={{marginTop:"5rem"}}/>
                </h1>
           
                <div>
                    <Skeleton style={{marginTop:'1rem'}}/>
                </div>
                <div>
                    <Skeleton count={2} style={{marginTop:'.5rem'}}/>
                </div>
        </Wrapper>
    </StyledSidebar>
  )
}

export default SkeletonSidebar