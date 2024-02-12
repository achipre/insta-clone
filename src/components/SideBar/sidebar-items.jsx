import React from 'react'
import Home from './home'
import Notifications from './notifications'
import CreatePost from './create-post'
import ProfileLink from './profile-link'
import Search from './search'

export default function SidebarItems () {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  )
}
