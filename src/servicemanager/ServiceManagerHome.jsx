import React from 'react'

const ServiceManagerHome = () => {
	const manager = JSON.parse(sessionStorage.getItem('loggedInServiceManager') || '{}')
	const displayName = manager.name || manager.managername || manager.email || 'Service Manager'

	return (
		<section className="sm-section-card">
			<h2>Welcome, {displayName}</h2>
			<p>
				Use the navigation menu to add and manage the services you provide.
			</p>
		</section>
	)
}

export default ServiceManagerHome
