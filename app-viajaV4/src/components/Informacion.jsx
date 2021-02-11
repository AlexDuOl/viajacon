import React from 'react'
import { Image, Header, Grid, Icon } from 'semantic-ui-react'
import avatar from '../images/avatar.jpg'

const InformacionComponent = (props) => (
    
    <div className="informacion-container">
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Header as="h3" textAlign='center'>Datos del contrato</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h4'>Cliente</Header>
                    <Image floated='left' size='tiny' src={avatar} alt="Imagen de cliente"/>
                    <p><span>{props.contactoNombre}</span></p>
                    <p><span>Cel: </span>{props.contactoNumeroCelular}</p>
                    <p><span>Tel: </span>{props.contactoNumeroTelefono}</p>
                    <p><span>Correo: </span><a href='/' className="links">{props.contactoEmail}</a></p>
                    <p><Icon className='exclamation triangle orange' /> Firme su contrato <span><a href={props.contratoWeb}>aquí</a></span></p>
                </Grid.Column>

                <Grid.Column width={8}>
                    <Header as='h4'>Asesor</Header>
                    <Image floated='left' size='tiny' src={props.usuario.fotografia} />
                    <p><span>{props.usuario.nombre}</span></p>
                    <p><span>Cel: </span>{props.usuario.numeroTelefono}</p>
                    <p><span>Teléfono: </span>{props.usuario.numeroTelefono}</p>
                    <p><span>Correo: </span><a href='https://suma.mx/' className="links">{props.usuario.email}</a></p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default InformacionComponent