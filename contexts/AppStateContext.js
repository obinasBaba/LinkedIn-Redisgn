import React, { useEffect, useState } from 'react'

export const AppStateContext = React.createContext({})


const AppStateProvider = ( {children} ) => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [searchDropdown, setSearchDropdown] = useState(false)
    const [navBarHeight, setNavBarHeight] = useState(0);
    const [innerNavBarHeight, setInnerNavBarHeight] = useState(0);




    return (
    <AppStateContext.Provider value={{
      isDropDownOpen, setIsDropDownOpen,
      searchDropdown, setSearchDropdown,
        navBarHeight, setNavBarHeight,
        innerNavBarHeight, setInnerNavBarHeight
    }} >

      {children}

    </AppStateContext.Provider>
  )
}

export default AppStateProvider
