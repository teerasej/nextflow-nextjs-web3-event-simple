import { Card } from 'antd'
import type { NextPage } from 'next'
import { useState } from 'react'
import MainMenu from '../components/menu'

const Home: NextPage = () => {




  const onChange = () => {

  }

  return (

    <div style={{ padding: 30 }}>
      <Card title="Event name" style={{ width: '100%', borderRadius: 5 }}>
        <h4>Start: 10 Feb 2022</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et diam mi. In commodo est a odio varius suscipit. Quisque ac urna in odio posuere rhoncus. Suspendisse ornare arcu nec pretium ultricies. Nullam scelerisque, lacus sit amet aliquet scelerisque, libero eros pretium dui, a hendrerit lacus nulla non risus. Suspendisse vel congue dui, vitae volutpat ipsum. Morbi aliquam facilisis orci. Mauris et risus tempor, scelerisque quam vitae, auctor elit. Etiam vel odio ante. Pellentesque orci turpis, posuere non auctor vel, auctor at velit. Phasellus suscipit elit non velit ultrices maximus. Aliquam sagittis elit vel dignissim facilisis. Maecenas suscipit ut tellus id tincidunt. Maecenas vulputate tempor condimentum.</p>
      </Card>
    </div>
  )
}

export default Home
