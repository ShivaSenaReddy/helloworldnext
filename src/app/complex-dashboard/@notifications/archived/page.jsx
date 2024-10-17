import React from 'react'

import Link from 'next/link.js'
import Card from '@/app/components/Card'
function ArchivedNotifications() {
    return (
        <Card>
            ArchivedNotifications
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    )
}

export default ArchivedNotifications
