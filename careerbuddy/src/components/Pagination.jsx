import React, {useState, useEffect, Fragment, useRef} from 'react'

import './Pagination2.css'

// add special prop to adhere to the component

const Pagination = ({items, itemsOnPage, topNav, bottomNav, entryProp, children}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState([])

  let currentPageRef = useRef(null)

  // Touch event handling
  // This will signal that the page is being swiped
  const [isDragging, setIsDragging] = useState(false)
  // This will be the point of the initial touch
  const [initialTouch, setInitialTouch] = useState(0)
  // These positions are needed to determine whether to move the page or not,
  // as well as to decide of the page should be flipped
  const [posLeft, setPosLeft] = useState(0)
  const [prevLeft, setPrevLeft] = useState(0)

  // This object will hold the current page container's style
  const divStyle = {
    position: isDragging ? 'relative' : 'static',
    left: isDragging ? posLeft : 0,
  }

  // onTouchStart we signal our container to become position: relative, so that
  // the left property affects its position
  // We also set the initialTouch state and the prevLeft state
  const _onTouchStart = event => {
    setIsDragging(true)
    setInitialTouch(event.nativeEvent.touches[0].clientX)

    const {left} = extractPositionDelta(event.nativeEvent.touches[0])

    if (posLeft + left <= 0) {
      setPosLeft(posLeft + left)
    }
  }

  // Here we decide if the page should be moved, 30 might be a good balance
  // between too stiff and too sensitive
  const _onTouchMove = event => {
    if (!isDragging) {
      return
    }
    const {left} = extractPositionDelta(event.nativeEvent.touches[0])

    if (Math.abs(posLeft) + Math.abs(left) > 30) {
      setPosLeft(posLeft + left)
    }
  }

  // When the use removes finger from the screen, we need to determine if
  // his or her intention was to flip the page; once again, 30 works well
  // In the end we set our state to the initial values
  const _onTouchEnd = event => {
    setIsDragging(false)

    let delta = Math.abs(prevLeft) - Math.abs(posLeft)

    if (delta < -30 && posLeft < initialTouch) {
      if (pages[currentPage + 1]) handlePageChange(currentPage + 1)
    } else if (delta > 30 && posLeft > initialTouch) {
      if (pages[currentPage - 1]) handlePageChange(currentPage - 1)
    }

    setPosLeft(0)
    setPrevLeft(0)
    setInitialTouch(0)
  }

  const extractPositionDelta = event => {
    const left = event.clientX

    const delta = {
      left: left - prevLeft,
    }

    setPrevLeft(left)

    return delta
  }

  const handlePageChange = pageNo => {
    if (currentPage > pageNo) {
      currentPageRef.current.style.animation = 'prevPage .5s forwards'
    } else {
      currentPageRef.current.style.animation = 'nextPage .5s forwards'
    }
    setCurrentPage(pageNo)
  }

  useEffect(() => {
    let itemsPerPage = itemsOnPage ? itemsOnPage : 5
    let workingPages = []
    let workingPagesCurrentIndex = 0

    if (items) {
      items.forEach((item, index, array) => {
        if (
          workingPages[workingPagesCurrentIndex] &&
          workingPages[workingPagesCurrentIndex].length === itemsPerPage
        )
          workingPagesCurrentIndex++

        if (workingPages[workingPagesCurrentIndex] === undefined)
          workingPages[workingPagesCurrentIndex] = []

        workingPages[workingPagesCurrentIndex].push(item)
      })
    }

    setPages([...workingPages])
  }, [items, itemsOnPage, setPages])

  useEffect(() => {
    if (!pages[currentPage]) {
      setCurrentPage(currentPage - 1 > -1 ? currentPage - 1 : 0)
    }
  }, [currentPage, pages])

  return (
    <div
      className="pagintaion__paginationContainer"
      style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}
    >
      {topNav || (!bottomNav && !topNav) ? (
        <div className="paginationContainer__topNavControls paginationControls">
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(0)}
            disabled={currentPage === 0 ? true : false}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0 ? true : false}
          >
            <svg
              className="bi bi-chevron-left"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {pages &&
            pages.map((page, index) => (
              <button
                className={`paginationContols__pageNoBtn
                        ${index === currentPage ? 'paginationContols__pageNoBtn--active' : ''}
                        ${
                          pages.length > 10 &&
                          index !== 0 &&
                          index !== pages.length - 1 &&
                          (currentPage > index ? currentPage - index > 3 : index - currentPage > 3)
                            ? 'paginationContols__pageNoBtn--hidden'
                            : ''
                        }
                        ${
                          pages.length > 10 &&
                          index !== 0 &&
                          index !== pages.length - 1 &&
                          currentPage > index &&
                          currentPage - index === 3
                            ? 'paginationContols__pageNoBtn--dotsBefore'
                            : ''
                        }
                        ${
                          pages.length > 10 &&
                          index !== 0 &&
                          index !== pages.length - 1 &&
                          index > currentPage &&
                          index - currentPage === 3
                            ? 'paginationContols__pageNoBtn--dotsAfter'
                            : ''
                        }
                        `}
                key={index}
                onClick={() => handlePageChange(index)}
                disabled={index === currentPage}
              >
                {index + 1}
              </button>
            ))}
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pages.length - 1 ? true : false}
          >
            <svg
              className="bi bi-chevron-right"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(pages.length - 1)}
            disabled={currentPage === pages.length - 1 ? true : false}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      ) : null}
      <div
        ref={currentPageRef}
        className={`paginationContainer__currentPageDiv`}
        onAnimationEnd={() => {
          if (currentPageRef.current) {
            currentPageRef.current.style.animation = ''
          }
        }}
        style={divStyle}
        onTouchStart={_onTouchStart}
        onTouchMove={_onTouchMove}
        onTouchEnd={_onTouchEnd}
        onTouchCancel={_onTouchEnd}
      >
        {pages.length &&
          pages[currentPage] &&
          pages[currentPage].map((item, index) => {
            let objectToClone = {}
            objectToClone[entryProp] = item
            return (
              <Fragment key={item.id ? item.id : index}>
                {React.cloneElement(children, objectToClone)}
              </Fragment>
            )
          })}
      </div>
      {bottomNav ? (
        <div className="paginationContainer__bottomNavControls paginationControls">
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(0)}
            disabled={currentPage === 0 ? true : false}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0 ? true : false}
          >
            <svg
              className="bi bi-chevron-left"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {pages &&
            pages.map((page, index) => (
              <button
                className={`paginationContols__pageNoBtn
                    ${index === currentPage ? 'paginationContols__pageNoBtn--active' : ''}
                    ${
                      pages.length > 10 &&
                      index !== 0 &&
                      index !== pages.length - 1 &&
                      (currentPage > index ? currentPage - index > 3 : index - currentPage > 3)
                        ? 'paginationContols__pageNoBtn--hidden'
                        : ''
                    }
                    ${
                      pages.length > 10 &&
                      index !== 0 &&
                      index !== pages.length - 1 &&
                      currentPage > index &&
                      currentPage - index === 3
                        ? 'paginationContols__pageNoBtn--dotsBefore'
                        : ''
                    }
                    ${
                      pages.length > 10 &&
                      index !== 0 &&
                      index !== pages.length - 1 &&
                      index > currentPage &&
                      index - currentPage === 3
                        ? 'paginationContols__pageNoBtn--dotsAfter'
                        : ''
                    }
                `}
                key={index}
                onClick={() => handlePageChange(index)}
                disabled={index === currentPage}
              >
                {index + 1}
              </button>
            ))}
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pages.length - 1 ? true : false}
          >
            <svg
              className="bi bi-chevron-right"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="paginationControls__arrowBtn"
            onClick={() => handlePageChange(pages.length - 1)}
            disabled={currentPage === pages.length - 1 ? true : false}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Pagination
