import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { EmprestimosService } from 'src/app/service/emprestimos.service';
import { LivrosService } from 'src/app/service/livros.service';
<<<<<<< HEAD
=======
import { UploadService } from 'src/app/service/upload.service';
>>>>>>> main
import { Emprestimo } from '../../models/emprestimo';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  public emprestimo!: Emprestimo
  public listaLivros: Livro[] = []
<<<<<<< HEAD
=======

>>>>>>> main

  constructor(
    private emprestimoService: EmprestimosService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private router: Router,
    private listaLivrosService: LivrosService

  ) {  }
  ngOnInit(): void {
    this.inicializeArquivos()
    this.listarLivrosDisponiveis()
  }

  public listarLivrosDisponiveis(): void{
    this.listaLivrosService.listarLivrosDisponiveis().subscribe(
      (resposta) => {
        this.listaLivros = resposta
      }
    )
  }

  private inicializeArquivos(): void{
    const id = this.route.snapshot.params["id"]

    this.emprestimoService.editarEmprestimoById(id).subscribe(emprestimoRetornado =>{
      this.emprestimo = emprestimoRetornado
    })
  }

  public editarEmprestimo(form: NgForm): void {
    if(form.valid){
      this.emprestimoService.editarEmprestimo(this.emprestimo).subscribe(()=>{
        this.notificationService.Showmessage("Emprestimo Editado.")
        this.router.navigate(["/dashboard"])
      })
    }else{
      this.notificationService.Showmessage("Nao conseguiu editar emprestimo.")
    }
<<<<<<< HEAD
=======
    if(this.emprestimo.status == "devolvido"){
      this.listaLivrosService.livrosDisponiveis(this.emprestimo.livro).subscribe(
        (resposta) => {
          this.notificationService.Showmessage("Livro devolvido")
        }
      )
    }
>>>>>>> main
    }
 }
