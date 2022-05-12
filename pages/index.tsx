import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Web3Provider } from '@ethersproject/providers'
import { Button, Card, DatePicker, Divider, Form, Input, Space } from 'antd'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import EventContract from '../contracts/EventContract.json'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from 'ethers'

class EventItem {
  name: string;
  description: string;
  creator: string;

  constructor(name: string, description: string, creator: string) {
    this.name = name;
    this.description = description;
    this.creator = creator;
  }
}

const Home: NextPage = () => {
  const [form] = Form.useForm();
  const [accountAddress, setAccountAddress] = useState('')
  const [events, setEvents] = useState<EventItem[]>([])
  const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337], })
  const { chainId, account, activate, active, library } = useWeb3React<Web3Provider>()

  const onClick = () => {
    activate(injectedConnector)
  }

  const [totalEvent, setTotalEvent] = useState(0)

  const getTotalEvents = async () => {

    const contract = new Contract(process.env.NEXT_PUBLIC_EVENT_CONTRACT_ADDRESS ?? '', EventContract.abi, library)
    try {
      console.log(contract);
      const data = await contract.getEventCount();
      const eventCount = (data as BigNumber).toNumber()
      console.log('Event count:', eventCount)

      const loadedEvents: EventItem[] = []

      for (let index = 0; index < eventCount; index++) {
        const eventFromContract = await contract.getEventInformation(index);
        console.log(eventFromContract)
        loadedEvents.push(new EventItem(eventFromContract[0], eventFromContract[1], eventFromContract[2]))
      }

      setEvents(loadedEvents)
      setTotalEvent(eventCount)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // show chainID, account and active status
    console.log(chainId, account, active)
    setAccountAddress(account ?? '')

    if (active) {
      getTotalEvents()
    }
  },[]);


  const onFinishForm = async (values: any) => {
    console.log(values)
    if (active) {
      const signer = library?.getSigner();
      const contract = new Contract(process.env.NEXT_PUBLIC_EVENT_CONTRACT_ADDRESS ?? '', EventContract.abi, signer)
      const eidValue = await contract.createNewEvent(values.name, values.description)
      console.log(eidValue.value.toNumber())
      console.log('Event id:', eidValue.value.toNumber())
      form.resetFields()
    }
  }

  return (

    <div style={{ padding: 30 }}>
      <Button onClick={onClick}>Connect Wallet</Button>
      <p style={{ marginTop: 30 }}>Account: {accountAddress}</p>
      <p>Total event: {totalEvent}</p>
      <div style={{ paddingBottom: 30 }}>
        <Card>
          <Space direction="vertical">
            <Form form={form} onFinish={onFinishForm}>
              <Form.Item label="Event name:" name="name">
                <Input placeholder="Hello Party" />
              </Form.Item>
              <Form.Item label="Description:" name="description">
                <Input.TextArea placeholder="Lorem" />
              </Form.Item>
              <Divider />
              <Button type="primary" htmlType='submit'>Create</Button>
            </Form>
          </Space>
        </Card>
      </div>
      <div>
      {
        events.map((event, index) => {
          return (
            <Card title={event.name} style={{ width: '100%', borderRadius: 5 }} key={index}>
              <h4>Creator: {event.creator}</h4>
              <p>{event.description}</p>
            </Card>
          )
        })
      }
      </div>
      {/* <Card title="Event name" style={{ width: '100%', borderRadius: 5 }}>
        <h4>Creator: Nextflow</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam mi. In commodo est a odio varius suscipit. Quisque ac urna in odio posuere rhoncus. Suspendisse ornare arcu nec pretium ultricies. Nullam scelerisque, lacus sit amet aliquet scelerisque, libero eros pretium dui, a hendrerit lacus nulla non risus. Suspendisse vel congue dui, vitae volutpat ipsum. Morbi aliquam facilisis orci. Mauris et risus tempor, scelerisque quam vitae, auctor elit. Etiam vel odio ante. Pellentesque orci turpis, posuere non auctor vel, auctor at velit. Phasellus suscipit elit non velit ultrices maximus. Aliquam sagittis elit vel dignissim facilisis. Maecenas suscipit ut tellus id tincidunt. Maecenas vulputate tempor condimentum.</p>
      </Card> */}
    </div>
  )
}

export default Home
