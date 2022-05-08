import { CiCircleFilled } from '@ant-design/icons'
import { Button, Card, DatePicker, Divider, Input, Space } from 'antd'
import type { NextPage } from 'next'

const Home: NextPage = () => {

    const onChange = () => {

    }



    return (
        <div style={{ padding: 30 }}>
            <Card>
                <Space direction="vertical">
                
                    <h4>Event name:</h4>
                    <Input placeholder="Basic usage" />
                    <h4>Start date:</h4>
                    <DatePicker onChange={onChange} />
                    <Button type="ghost">Ghost Button</Button>
                    <Divider />
                    <Button type="primary">Create</Button>
                </Space>
            </Card>
        </div>
    )
}

export default Home
