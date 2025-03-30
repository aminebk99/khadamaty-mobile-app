import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: "home"
                }}
            />
            <Tabs.Screen
                name='categories'
                options={{
                    headerShown: false,
                    title: "categories"
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    headerShown: false,
                    title: "profil"
                }}
            />
        </Tabs>
    )
}

export default _layout