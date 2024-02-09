import CompC from "./CompC.jsx";

function CompB(props) {
  return (
    <>
      <div className="box">
        <h1>Component B</h1>
        <CompC user={props.user}/>
      </div>
    </>
  );
}
export default CompB;
