import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

  export class FormComponent implements OnInit {
    form: FormGroup;
  
    ciudades: string[] = [
      'Quito',
      'Guayaquil',
      'Cuenca',
      'Santo Domingo',
      'Machala',
      'Manta',
      'Portoviejo',
      'Ambato',
      'Ibarra',
      'Esmeraldas',
      'Riobamba',
      'Quevedo',
      'Loja',
      'Tulcán',
      'Santa Elena',
      'Milagro',
      'Tena',
      'Puyo',
      'Macas',
      'Puerto Francisco de Orellana (Coca)',
      'Salinas',
      'Sangolquí',
      'Daule',
      'El Carmen',
      'Montecristi',
      'La Libertad',
      'Babahoyo',
      'Samborondón',
      'Durán',
      'Ventanas',
      'Nueva Loja',
      'Zamora',
      'Zaruma'
    ];
  
    estadoProvincias: string[] = [
      'Azuay',
      'Bolívar',
      'Cañar',
      'Carchi',
      'Chimborazo',
      'Cotopaxi',
      'El Oro',
      'Esmeraldas',
      'Galápagos',
      'Guayas',
      'Imbabura',
      'Loja',
      'Los Ríos',
      'Manabí',
      'Morona Santiago',
      'Napo',
      'Orellana',
      'Pastaza',
      'Pichincha',
      'Santa Elena',
      'Santo Domingo de los Tsáchilas',
      'Sucumbíos',
      'Tungurahua',
      'Zamora Chinchipe'
    ];
  
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
      this.buildForm();
      this.form?.valueChanges.pipe(debounceTime(1000))
        .subscribe(value => {
          console.log(value);
        });
    }
  
    private buildForm() {
      this.form = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        numeroCedula: ['', Validators.required],
        estadoCivil: ['', Validators.required],
        coloniaBarrio: ['', Validators.required],
        ciudad: ['', Validators.required],
        estadoProvincia: ['', Validators.required],
        telefono: ['', Validators.required],
        correoElectronico: ['', [Validators.required, Validators.email]],
        documentosAdjuntos: ['', Validators.required]
      });
    }
  
    save(event: Event) {
      event.preventDefault();
      if (this.form.valid) {
        const datosFormulario = this.form.value;
        console.log(datosFormulario);
      } else {
        this.form.markAllAsTouched();
      }
    }
  }