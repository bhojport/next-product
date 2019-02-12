import Link from 'next/link'
export const pagination = ({ prev, next, beforeFirstBound, afterLastBound, boundPages, page, limit, lastPage }) => {

  if (!boundPages.length) return null // we may wish to generate error page or something...

  return (
    <ul className="pagination justify-content-center">
      {prev === true && <Link href={`/?page=${+page - 1}&limit=${limit}`}><li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">Prev</span>
        </a>
      </li></Link>}
      {beforeFirstBound === true && <Link href={`/?page=1&limit=${limit}`}>
        <li>
          <a className="page-link">1</a>
        </li>
      </Link>}
      {beforeFirstBound === true && <li className="page-item before-first-bound mx-3">
        <span aria-hidden="true">...</span>
      </li>}

      {
        boundPages.map(boundPage => {
          const pageItemClass = boundPage === +page ? 'page-item active' : 'page-item'
          return (
            <Link href={`/?page=${boundPage}&limit=${limit}`} key={`bound-page-${boundPage}`}>
              <li className={pageItemClass}>
                <a className="page-link">{boundPage}</a>
              </li>
            </Link>
          )
        })
      }
      {afterLastBound === true && <li className="page-item after-last-bound mx-3">
        <span aria-hidden="true">...</span>
      </li>}
      {afterLastBound === true && <Link href={`/?page=${lastPage}&limit=${limit}`}>
        <li>
          <a className="page-link">{lastPage}</a>
        </li>
      </Link>}
      {next === true && <Link href={`/?page=${+page + 1}&limit=${limit}`}>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </Link>}
    </ul>
  )
}
