
   
import { Menu } from "antd";
import { NextComponentType } from "next";

const MainMenu:NextComponentType = () => {

    const items = [
        { label: 'All Event', key: 'main' },
        { label: 'Create Event', key: 'create-event' },
      ];

    return (
        <Menu mode='horizontal' items={items} selectedKeys={['main']}/>
    )
}

export default MainMenu