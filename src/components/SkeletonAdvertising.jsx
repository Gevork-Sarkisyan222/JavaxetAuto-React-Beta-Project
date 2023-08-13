
import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    className="Skeleton-Advertising"
    speed={2}
    width={1100}
    height={500}
    viewBox="0 0 1200 500"
    backgroundColor="#8a8585"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-7" y="0" rx="12" ry="12" width="1100" height="510" />
  </ContentLoader>
)

export default MyLoader




