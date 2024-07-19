import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface DashboardCardProps {
    title: string;
    icon: React.ReactNode;
    value: number;
}

const DashboardCard = ({ title, icon, value}: DashboardCardProps ) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent className="text-3xl font-bold">{value}</CardContent>
      </Card>
    </div>
  );
}

export default DashboardCard
