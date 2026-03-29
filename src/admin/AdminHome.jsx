import React from 'react'

const AdminHome = () => {
	const admin = JSON.parse(sessionStorage.getItem('loggedInAdmin') || '{}')
	const displayName = admin.username || admin.name || 'Admin'

	return (
		<section className="admin-section-card">
			<h2>Welcome, {displayName}</h2>
			<p>
				Use the admin menu to add service managers and review all users.
			</p>
		</section>
	)
}

export default AdminHome
