import { Link } from "react-router-dom";

const Registro = () => {
    return ( 
        <>

<form className="row g-3 p-3 px-6">
  <div className="col-md-6">
    <label for="validationServer01" className="form-label">Nombre</label>
    <input type="text" className="form-control " id="validationServer01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationServer02" className="form-label">Apellido</label>
    <input type="text" className="form-control " id="validationServer02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationServerUsername" className="form-label">Usuario</label>
    <div className="input-group ">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationServer03" className="form-label">Ciudad</label>
    <input type="text" className="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required/>
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label className="form-check-label" for="invalidCheck3">
        Acepto terminos y condiciones
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <Link className="nav-link" to="/"> <button className="btn btn-primary" type="submit">Enviar</button></Link>
</form>

    
</>



    )}
export default Registro;