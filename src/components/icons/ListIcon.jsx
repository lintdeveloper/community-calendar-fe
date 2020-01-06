import React from 'react'
import PropTypes from 'prop-types'
import {list, active} from './Icons.module.scss'

/* Used to select list view */
const ListIcon = ({isActive, width, height, dataId}) => {
  return (
    <svg
      data-id={dataId}
      className={`${list} ${isActive ? active : ''}`}
      width={width ? width : 25}
      height={height ? height : 23}
      viewBox='0 0 25 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M24.5074 0.665588H6.79412C6.66066 0.665588 6.55147 0.785394 6.55147 0.931823V2.79547C6.55147 2.9419 6.66066 3.06171 6.79412 3.06171H24.5074C24.6408 3.06171 24.75 2.9419 24.75 2.79547V0.931823C24.75 0.785394 24.6408 0.665588 24.5074 0.665588ZM24.5074 10.1169H6.79412C6.66066 10.1169 6.55147 10.2367 6.55147 10.3832V12.2468C6.55147 12.3933 6.66066 12.5131 6.79412 12.5131H24.5074C24.6408 12.5131 24.75 12.3933 24.75 12.2468V10.3832C24.75 10.2367 24.6408 10.1169 24.5074 10.1169ZM24.5074 19.5683H6.79412C6.66066 19.5683 6.55147 19.6881 6.55147 19.8345V21.6982C6.55147 21.8446 6.66066 21.9644 6.79412 21.9644H24.5074C24.6408 21.9644 24.75 21.8446 24.75 21.6982V19.8345C24.75 19.6881 24.6408 19.5683 24.5074 19.5683ZM0 1.86365C-3.32376e-09 2.10838 0.0439338 2.35073 0.129293 2.57683C0.214652 2.80294 0.339765 3.00839 0.497488 3.18144C0.655211 3.3545 0.842455 3.49178 1.04853 3.58543C1.25461 3.67909 1.47548 3.72729 1.69853 3.72729C1.92158 3.72729 2.14245 3.67909 2.34853 3.58543C2.5546 3.49178 2.74185 3.3545 2.89957 3.18144C3.05729 3.00839 3.18241 2.80294 3.26777 2.57683C3.35313 2.35073 3.39706 2.10838 3.39706 1.86365C3.39706 1.61891 3.35313 1.37657 3.26777 1.15046C3.18241 0.924352 3.05729 0.718905 2.89957 0.54585C2.74185 0.372794 2.5546 0.235519 2.34853 0.141862C2.14245 0.0482045 1.92158 0 1.69853 0C1.47548 0 1.25461 0.0482045 1.04853 0.141862C0.842455 0.235519 0.655211 0.372794 0.497488 0.54585C0.339765 0.718905 0.214652 0.924352 0.129293 1.15046C0.0439338 1.37657 -3.32376e-09 1.61891 0 1.86365ZM0 11.315C-3.32376e-09 11.5597 0.0439338 11.8021 0.129293 12.0282C0.214652 12.2543 0.339765 12.4597 0.497488 12.6328C0.655211 12.8059 0.842455 12.9431 1.04853 13.0368C1.25461 13.1304 1.47548 13.1786 1.69853 13.1786C1.92158 13.1786 2.14245 13.1304 2.34853 13.0368C2.5546 12.9431 2.74185 12.8059 2.89957 12.6328C3.05729 12.4597 3.18241 12.2543 3.26777 12.0282C3.35313 11.8021 3.39706 11.5597 3.39706 11.315C3.39706 11.0703 3.35313 10.8279 3.26777 10.6018C3.18241 10.3757 3.05729 10.1703 2.89957 9.9972C2.74185 9.82415 2.5546 9.68687 2.34853 9.59321C2.14245 9.49956 1.92158 9.45135 1.69853 9.45135C1.47548 9.45135 1.25461 9.49956 1.04853 9.59321C0.842455 9.68687 0.655211 9.82415 0.497488 9.9972C0.339765 10.1703 0.214652 10.3757 0.129293 10.6018C0.0439338 10.8279 -3.32376e-09 11.0703 0 11.315ZM0 20.7664C-3.32376e-09 21.0111 0.0439338 21.2534 0.129293 21.4795C0.214652 21.7056 0.339765 21.9111 0.497488 22.0842C0.655211 22.2572 0.842455 22.3945 1.04853 22.4881C1.25461 22.5818 1.47548 22.63 1.69853 22.63C1.92158 22.63 2.14245 22.5818 2.34853 22.4881C2.5546 22.3945 2.74185 22.2572 2.89957 22.0842C3.05729 21.9111 3.18241 21.7056 3.26777 21.4795C3.35313 21.2534 3.39706 21.0111 3.39706 20.7664C3.39706 20.5216 3.35313 20.2793 3.26777 20.0532C3.18241 19.8271 3.05729 19.6216 2.89957 19.4486C2.74185 19.2755 2.5546 19.1382 2.34853 19.0446C2.14245 18.9509 1.92158 18.9027 1.69853 18.9027C1.47548 18.9027 1.25461 18.9509 1.04853 19.0446C0.842455 19.1382 0.655211 19.2755 0.497488 19.4486C0.339765 19.6216 0.214652 19.8271 0.129293 20.0532C0.0439338 20.2793 -3.32376e-09 20.5216 0 20.7664Z' />
    </svg>
  )
}

ListIcon.propTypes = {
  isActive: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  dataId: PropTypes.string,
}

export default ListIcon
