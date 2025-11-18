import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [RouterModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements AfterViewInit {

  ngAfterViewInit() {

    const telInput: any = document.getElementById('telefono');
  
    // Bloquear letras y todo lo que no sea número
    telInput.addEventListener('keypress', (e: KeyboardEvent) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault(); // bloquea letras en tiempo real
      }
    });
  
    // Bloquear letras incluso si pega texto
    telInput.addEventListener('input', () => {
      telInput.value = telInput.value
        .replace(/[^0-9]/g, '') // solo números
        .substring(0, 10);      // máximo 10
    });
  
    // Bootstrap Validation
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
  
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
  
          const alert = document.getElementById('successAlert');
          alert?.classList.remove('d-none');
  
          form.reset();
          form.classList.remove('was-validated');
        }
  
        form.classList.add('was-validated');
      });
    });
  } }
