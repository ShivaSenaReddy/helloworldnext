import React from 'react'
import styles from './page.module.css'
function ComplexDashboardLayout({ children, notifications, revenue, useranalytics }) {
    return (
        <>
            {children}

            <div className={styles.complexDashboard}>

                <div>
                    {notifications}
                    {revenue}
                </div>
                {useranalytics}
            </div>
        </>
    )
}

export default ComplexDashboardLayout