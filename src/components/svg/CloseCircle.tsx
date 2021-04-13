import React from 'react'

export default function CloseCircle({click = ()=>{}}) {
  const [active, setActive] = React.useState(false)
  return (
    <>
      { !active ? <svg
        onMouseOver={() => setActive(true)}
        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14C3.14005 14 0 10.86 0 7C0 3.14005 3.14005 0 7 0C10.86 0 14 3.14005 14 7C14 10.86 10.86 14 7 14ZM7 0.875C3.62251 0.875 0.875 3.62251 0.875 7C0.875 10.3775 3.62251 13.125 7 13.125C10.3775 13.125 13.125 10.3775 13.125 7C13.125 3.62251 10.3775 0.875 7 0.875Z" fill="#222E34"/>
<path d="M4.83473 9.60263C4.72269 9.60263 4.61064 9.56012 4.52551 9.47435C4.35461 9.30345 4.35461 9.02638 4.52551 8.85548L8.85672 4.52417C9.02773 4.35327 9.30479 4.35327 9.47569 4.52417C9.64659 4.69507 9.64659 4.97214 9.47569 5.14314L5.14438 9.47435C5.05808 9.56012 4.94614 9.60263 4.83473 9.60263Z" fill="#222E34"/>
<path d="M9.1653 9.60256C9.05337 9.60256 8.94132 9.56005 8.85619 9.47428L4.52498 5.1436C4.35398 4.97271 4.35398 4.69564 4.52498 4.52474C4.69588 4.35373 4.97295 4.35373 5.14385 4.52474L9.47506 8.85595C9.64606 9.02685 9.64606 9.30392 9.47506 9.47481C9.3894 9.56005 9.27735 9.60256 9.1653 9.60256Z" fill="#222E34"/>
</svg>

        :
        <svg onClick={click} onMouseOut={() => setActive(false)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C3.14005 0 0 3.14005 0 7C0 10.86 3.14005 14 7 14C10.86 14 14 10.86 14 7C14 3.14005 10.86 0 7 0Z" fill="#F44336" />
          <path d="M9.57783 8.75317C9.80587 8.98132 9.80587 9.34993 9.57783 9.57808C9.46408 9.69183 9.31475 9.74897 9.16532 9.74897C9.016 9.74897 8.86668 9.69183 8.75293 9.57808L7.00004 7.82508L5.24716 9.57808C5.1334 9.69183 4.98408 9.74897 4.83476 9.74897C4.68533 9.74897 4.53601 9.69183 4.42225 9.57808C4.19421 9.34993 4.19421 8.98132 4.42225 8.75317L6.17524 7.00029L4.42225 5.2474C4.19421 5.01925 4.19421 4.65065 4.42225 4.4225C4.6504 4.19445 5.01901 4.19445 5.24716 4.4225L7.00004 6.17549L8.75293 4.4225C8.98107 4.19445 9.34968 4.19445 9.57783 4.4225C9.80587 4.65065 9.80587 5.01925 9.57783 5.2474L7.82484 7.00029L9.57783 8.75317Z" fill="#FAFAFA" />
        </svg>
      }
    </>
  )
}