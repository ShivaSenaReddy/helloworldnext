import React from 'react'
import styles from './page.module.css'
function ComplexDashboardLayout({ children, notifications, revenue, useranalytics, login }) {
    const loggedIn = false;
    if (loggedIn)
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
    else
        return <>{login}</>
}

export default ComplexDashboardLayout