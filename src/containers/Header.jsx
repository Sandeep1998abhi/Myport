import React from "react";
import {Menus} from '../utils/helper'
import {MenuItem} from "../components"
const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex items-end justify-center w-full h-auto pb-8 lg:top-0 lg:h-screen lg:w-20 lg:items-center lg:pb-0">
      <div className="px-2 py-2 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center gap-8 duration-200 backdrop-blur-md">
        {Menus && 
          Menus.map((item, index)=>(
            <MenuItem key={index} menu={item} index={index} />
          ))
        }
      </div>

    </div>
  )
};

export default Header;
