import React from 'react'
import { Item1, Item2,Item3, Item4, Item5, Item6,Item7, Item8, Item9 } from '../styles/Items.styled'
import { Grid } from '@mui/material'

import Slider from '../../../layouts/slider/Slider'
import { productsData, productsData2 } from '../../../data/sliderData'

const BrandShowcase = ({showcaseData}) => {
  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Item1 url={showcaseData[0].url}></Item1>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item2 url={showcaseData[1].url}></Item2>
              <br></br>
              <Item3 url={showcaseData[2].url}></Item3>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item4 url={showcaseData[3].url}></Item4>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item5 url={showcaseData[4].url}></Item5>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item6 url={showcaseData[5].url}></Item6>
              <br></br>
              <Item9 url={showcaseData[6].url}></Item9>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item7 url={showcaseData[7].url}></Item7>
            </Grid>
            <Grid item xs={12}>
              <Item8 url={showcaseData[8].url}></Item8>
            </Grid>
        </Grid>
        <Slider title={'newest products'} data={productsData2} />
        <Slider title={'popular products'} data={productsData} />
        </>
  )
}

export default BrandShowcase