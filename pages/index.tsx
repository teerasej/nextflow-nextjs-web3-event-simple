import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Web3Provider } from '@ethersproject/providers'
import { Button, Card } from 'antd'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import EventContract from '../contracts/EventContract.json'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from 'ethers'

const Home: NextPage = () => {
  const [accountAddress, setAccountAddress] = useState('')
  const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42,1337], })
  const { chainId, account, activate, active, library } = useWeb3React<Web3Provider>()

  const onClick = () => {
    activate(injectedConnector)
  }

  useEffect(() => {
    // show chainID, account and active status
    console.log(chainId, account, active)
    setAccountAddress(account ?? '')
  });



  return (

    <div style={{ padding: 30 }}>
      <Button onClick={onClick}>Connect Wallet</Button>
      <p>Account: {accountAddress}</p>
      <Card title="Event name" style={{ width: '100%', borderRadius: 5 }}>
        <h4>Start: 10 Feb 2022</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam mi. In commodo est a odio varius suscipit. Quisque ac urna in odio posuere rhoncus. Suspendisse ornare arcu nec pretium ultricies. Nullam scelerisque, lacus sit amet aliquet scelerisque, libero eros pretium dui, a hendrerit lacus nulla non risus. Suspendisse vel congue dui, vitae volutpat ipsum. Morbi aliquam facilisis orci. Mauris et risus tempor, scelerisque quam vitae, auctor elit. Etiam vel odio ante. Pellentesque orci turpis, posuere non auctor vel, auctor at velit. Phasellus suscipit elit non velit ultrices maximus. Aliquam sagittis elit vel dignissim facilisis. Maecenas suscipit ut tellus id tincidunt. Maecenas vulputate tempor condimentum.</p>
      </Card>
    </div>
  )
}

export default Home
