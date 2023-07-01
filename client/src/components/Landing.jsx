import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div>
      <h1>
      Landing
      </h1>
<Link to={"/properties/map/near-by"}>
see the properties nearby:
</Link>
    </div>
  )
}
