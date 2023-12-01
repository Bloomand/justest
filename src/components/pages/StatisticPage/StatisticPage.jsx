import React from 'react'
import StatisticTable from "../../StatisticTable/StatisticTable.jsx"

export const StatisticPage = () => {
  if (!window.location.hash) {
    window.location = window.location + '#uge_obnovleno';
    window.location.reload();
  }
    return (
      <div className='Content'>
        <div className="Statistic">
            <div className="StatisticHeader">
              <h1>Статистика тестов</h1>
            </div>
            <div className="StatisticBody">
            </div>
            <StatisticTable rowCount={2}/>
          </div>
      </div>
    )
  }