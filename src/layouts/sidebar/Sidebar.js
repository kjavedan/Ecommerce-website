import React, {useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'
import {ContainerOuter, ContainerInner} from './components/styles/Container.styled'
import Wrapper from './components/styles/Wrapper.styled'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import '../../assets/App.css'

const Sidebar = () => {

    const {theme, displaySidebar, toggleSidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
          <div className="category_wrapper">
            <div className="category_title">
                <h1>Category</h1> <BiChevronRight />
            </div>
            <div className="category_items">
              <div className="category_item">
                <div className="category_item_title">
                  <HiOutlineDeviceMobile /><span>Mobile</span> <BiChevronRight /> 
                </div>
                <div className="category_item_sub_items">
                  <div className="category_item_sub_item"><HiOutlineDeviceMobile /><span>Apple</span></div>
                  <div className="category_item_sub_item"><HiOutlineDeviceMobile /><span>Microsoft</span></div>
                  <div className="category_item_sub_item"><HiOutlineDeviceMobile /><span>Dell</span></div>
                  <div className="category_item_sub_item"><HiOutlineDeviceMobile /><span>Soney</span></div>
                </div>
              </div>

            </div>
          </div>
          <div className="category_wrapper">
            <div className="category_title">
                <h1>Take a look at</h1> <BiChevronRight />
            </div>
            <div className="category_items">
              <div className="category_item"><HiOutlineDeviceMobile /><span>Hot Sails</span></div>
              <div className="category_item"><HiOutlineDeviceMobile /><span>Popular producst</span></div>
              <div className="category_item"><HiOutlineDeviceMobile /><span>Newest Products</span></div>
              <div className="category_item"><HiOutlineDeviceMobile /><span>Most Sailed</span></div>
              <div className="category_item"><HiOutlineDeviceMobile /><span>Top rated</span></div>
            </div>
          </div>
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar