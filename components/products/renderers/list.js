import { listItems } from './listItems'
import { pagination } from './pagination'

const list = ({ content: contents, ...rest }) => {
  if(!contents.length) return null
  const { onAddNewAction } = rest
  return (
    <>
      <div className="col-12">
        <button type="button" className="float-right btn btn-secondary" onClick={onAddNewAction}>Add new item</button>
      </div>

      <div className="col-12 table-responsive">
        <table className="table table-bordered table-hover mt-3 table-list">
          <thead>
            <tr>
              <th scope="col" className="w-25">Image</th>
              <th scope="col" className="w-75">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Available sizes</th>
              <th scope="col">Available colors</th>
            </tr>
          </thead>
          <tbody>
            {
              listItems(contents)
            }
          </tbody>
        </table>
      </div>

      <div className="col-12">
        {
          pagination(rest)
        }
      </div>
    </>
  )
}

export default list