import CompD from "./CompD.jsx";

function CompC(props) {
    return (
      <>
        <div className="box">
          <h1>Component C</h1>
          <CompD user={props.user}/>
        </div>
      </>
    );
  }
  export default CompC;
  