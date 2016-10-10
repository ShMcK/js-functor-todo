import React from 'react'
import { Component } from '../functors'
import Todo from '../Todo'

const Header = Component(s => <h1>Now Viewing {s}</h1>)

const ProfileLink = Component(u => <a href={`/users/${u.id}`}>{u.name}</a>)

const App = Header.contramap(s => s.pageName)
						.concat(Todo)
						.concat(ProfileLink.contramap(s => s.current_user))
            .fold({ pageName: 'Home',
                    current_user: {id: 2, name: 'Boris' } })

export default App
