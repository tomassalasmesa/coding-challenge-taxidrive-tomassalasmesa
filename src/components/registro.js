import React, {Component} from 'react';
import '../App.css';

class Registro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            edad:'',
            telefono:'',
            mail:'',
            patente:'',
            modelo:'',
            año:'',
            listaConductores:[]
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
        });
        console.log(this.state);
    }

    mySubmitHandler = (event) => {
        var Nombre = this.state.nombre;
        var Edad = this.state.edad;
        var Telefono = this.state.telefono;
        var Mail = this.state.mail;
        var Patente = this.state.patente;
        var Modelo = this.state.modelo;
        var Año = this.state.año;
        var data = {Nombre,Edad,Telefono,Mail,Patente,Modelo,Año}
        this.state.listaConductores.push(data);

        alert("Nombre: "+this.state.listaConductores[0].Nombre + 
        " / Edad: " + this.state.listaConductores[0].Edad + 
        " / Telefono: " + this.state.listaConductores[0].Telefono + 
        " / Mail: " + this.state.listaConductores[0].Mail + 
        " / Patente: " + this.state.listaConductores[0].Patente + 
        " / Modelo: " + this.state.listaConductores[0].Modelo + 
        " / Año: " + this.state.listaConductores[0].Año) ;   
      }
    
render(){

  return (
    <div className="AddConductor">
      <div className="">
            <div>
                <div>
                <div className="card col-sm-6">
                <div className="card-body">
                
                    <form action="" method="">
                        <h1>Registrar Nuevo Conductor</h1>
                        <div className="form-group">
                            <input type="text" className="form-control" name="nombre" id="Nombre" placeholder="Nombre" value={this.state.Nombre} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="edad" placeholder="Edad" value={this.state.Edad} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="telefono" placeholder="Telefono" value={this.state.Telefono} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="mail" placeholder="Mail" value={this.state.Mail} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="patente" placeholder="Patente" value={this.state.Patente} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="modelo" placeholder="Modelo" value={this.state.Modelo} onChange={this.onChange}/>    
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="año" placeholder="Año" value={this.state.Año} onChange={this.onChange}/>    
                        </div>
                        <div className="form-group"><button type="submit" className="btn btn-outline-light" onClick={this.mySubmitHandler} >Registrar</button></div>
                    </form>
                </div>
            </div> 
                    
                </div>
            </div>
        </div>
    </div>
  );
}
}

export default Registro;