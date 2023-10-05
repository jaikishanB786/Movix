/* eslint-disable no-unused-vars */
import React from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'

const Trending = () => {

  const onTabChange = (tab) => {
    
  }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
    </div>  
  )
}

export default Trending