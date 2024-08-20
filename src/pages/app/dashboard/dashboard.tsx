import { Helmet } from 'react-helmet-async'

import { PopularProductsChart } from './components/ popularProductsChart'
import { DayOrdersAmountCard } from './components/dayOrdersAmountCard'
import { MonthCanceledOrdersAmount } from './components/monthCanceledOrdersAmount'
import { MonthOrdersAmountCard } from './components/monthOrdersAmountCard'
import { MonthRevenueCard } from './components/monthRevenueCard'
import { RevuneuChart } from './components/revuneuChart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevuneuChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
