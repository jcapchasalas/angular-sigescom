import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from 'src/app/config/config';

import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();

  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }


  login(usuario: Usuario, recordar: boolean = false) {

    if ( recordar ) {
      localStorage.setItem('email', usuario.email );
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
    .pipe(
      map( (resp: any) => {

        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.Usuario) );

        return true;

      })

    );

  }


  crearUsuario( usuario: Usuario ) {

    const url = URL_SERVICIOS + '/usuario';

    return this.http.post( url, usuario )
    .pipe(
          map( (resp: any) => {
            Swal.fire({
              title: 'Usuario creado correctamente',
              text: usuario.email,
              icon: 'success'
            });

            return resp.usuario;
          })
    );

  }

  actualizarUsuario(usuario: Usuario) {

    let url = URL_SERVICIOS +  '/usuario/' + usuario._id;
    url += '?token=' + this.token;

    console.log(url);

    return this.http.put( url, usuario )
    .pipe(
      map( ( resp: any ) => {

        let usuarioDB: Usuario = resp.usuario;

        this.guardarStorage( usuarioDB._id, this.token, usuarioDB );

        Swal.fire({
          title: 'Usuario actulizado correctamente',
          text: usuario.email,
          icon: 'success'
        });

        return true;

      })

    );

  }

}
