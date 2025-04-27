import { View, Text } from 'react-native'
import React from 'react'

interface ServiceCardProps {
    title: string;
}

const ServiceCard = ({ title }: ServiceCardProps) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default ServiceCard