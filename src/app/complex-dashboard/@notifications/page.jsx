import React from 'react'
import Card from '../../components/Card.jsx'
import Link from 'next/link.js'
function Notifications() {
  return (
    <Card >
      Notifications
      <Link href='./complex-dashboard/archived'>Archived</Link>
    </Card>
  )
}

export default Notifications
