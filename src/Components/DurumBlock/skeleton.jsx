import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="durum-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
     <rect x="6" y="13" rx="0" ry="0" width="266" height="274" />
    <rect x="1" y="296" rx="10" ry="10" width="280" height="25" /> 
    <rect x="0" y="345" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="447" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="447" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

