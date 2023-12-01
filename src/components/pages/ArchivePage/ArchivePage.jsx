import React from 'react'
import ArchiveTable from "../../ArchiveTable/ArchiveTable.jsx"

export const ArchivePage = () => {
  if (!window.location.hash) {
    window.location = window.location + '#uge_obnovleno';
    window.location.reload();
  }
    return (
      <div className='Content'>
        <div className="Archive">
            <div className="ArchiveHeader">
              <h1>Архив тестов</h1>
            </div>
            <div className="ArchiveBody">
            </div>
            <ArchiveTable rowCount={2}/>
        </div>
      </div>
    )
  }