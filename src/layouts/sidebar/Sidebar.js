import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'
import {Wrapper, CategoryWrapper} from './components/styles/Wrappers.styled'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import '../../assets/App.css'
import CategoryTitle from './components/CategoryTitle'

const Sidebar = () => {

    const {theme, displaySidebar, toggleSidebar} = useContext(Context)

    const [displayCategoryItems, setDisplayCategoryItems] = useState(true)

    const toggleChilds = () => {setDisplayCategoryItems(prevState=> !prevState)}

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
          <CategoryWrapper display={displayCategoryItems}>    
            <CategoryTitle toggleChilds={toggleChilds} />
            <div className="category_items">
              <div className="category_item_parent">
                <div className="category_item_parent_title">
                  <HiOutlineDeviceMobile /><span>Mobile</span> <BiChevronRight /> 
                </div>
                <div className="category_item_children">
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Apple</span></div>
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Samsung</span></div>
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Nokia</span></div>
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Soney</span></div>
                </div>
              </div>
              <div className="category_item_parent">
                <div className="category_item_parent_title">
                  <HiOutlineDeviceMobile /><span>Laptop</span> <BiChevronRight /> 
                </div>
                <div className="category_item_children">
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Apple</span></div>
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Microsoft</span></div>
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Dell</span></div>
                  <div className="category_item_child"><HiOutlineDeviceMobile /><span>Soney</span></div>
                </div>
              </div>
            </div>
          </CategoryWrapper>
          <div className="category_wrapper">
          <div className="category_title">
                <h1>Take a look at</h1> <BiChevronRight />
            </div>
            <div className="category_item_children">
                <div className="category_item_child"><HiOutlineDeviceMobile /><span>Hot saile</span></div>
                <div className="category_item_child"><HiOutlineDeviceMobile /><span>most sailes</span></div>
                <div className="category_item_child"><HiOutlineDeviceMobile /><span>off</span></div>
                <div className="category_item_child"><HiOutlineDeviceMobile /><span>cool</span></div>
            </div>
          </div>
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar