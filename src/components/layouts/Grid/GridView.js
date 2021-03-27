import './Grid.css'
import React from 'react'
import Spinner from '../../common/Spinner'
import Error from '../../common/Error'
import Toggle from '../../common/Toggle'

const GridView = ({
  loading,
  error,
  filter,
  sort,
  sorts = [],
  count = 0,
  children
}) => {
  if (loading) return <Spinner />
  if (error) return <Error errorText="Error loading data..."
                           action="RELOAD"
                           onClick={() => window.location.reload()} />

  return (
    <div className="Grid">
      <header className="Grid__control">
        <input className="Grid__search" placeholder="Search" onChange={(e) => filter(e.target.value)} />
        {sorts && <select className="Grid__sort" onChange={(e) => sort(e.target.selectedIndex - 1)}>
          <option disabled selected>select sort type</option>
          {sorts.map(sortBy => <option key={sortBy} value={sortBy}>{sortBy}</option>)}
        </select>}
        <Toggle toggleStyle="Grid__sort-direction"
                type="checkbox"
                onChange={(e) => sort(e.target.checked)} />
        <span className="Grid__info">{`${count} item${count > 1 ? 's' : ''}`}</span>
      </header>
      <div className="Grid__items">
        {children}
      </div>
    </div>
  )
}

export default React.memo(GridView)
