import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    className="skeleton-cards"
    speed={2}
    width={210}
    height={320}
    viewBox="0 0 210 310"
    backgroundColor="#bababa"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="422" y="110" rx="30" ry="30" width="120" height="130" /> 
    <rect x="2" y="24" rx="30" ry="30" width="197" height="287" /> 
    <rect x="236" y="307" rx="30" ry="30" width="14" height="50" />
  </ContentLoader>
)

export default MyLoader;