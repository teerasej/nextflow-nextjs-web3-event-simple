
   
import { Menu } from "antd";
import { NextComponentType } from "next";
import Link from "next/link";

const MainMenu:NextComponentType = () => {

    const items = [
        { label: (
            <Link href={'/'}>
              All Event
            </Link>
          ), key: 'main' },
        { label: (
            <Link href={'/create-event'}>
              Create Event
            </Link>
          ), key: 'create-event',  },
      ];

    return (
        <Menu mode='horizontal' items={items} selectedKeys={['main']}/>
    )
}

export default MainMenu