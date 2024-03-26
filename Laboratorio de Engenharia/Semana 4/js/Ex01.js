document.addEventListener('DOMContentLoaded', function() {
   var enviar = document.getElementById('enviar');

   enviar.addEventListener('click', function(event) {
      event.preventDefault(); 
      submitFormulario();
        
   });

   function submitFormulario() {

      let tipoPessoa = document.querySelector('input[name="tipoPessoa"]:checked').value;

      let pessoa;
      if (tipoPessoa === 'aluno') {
         
         var nome = document.getElementById('nome').value;
         var email = document.getElementById('email').value;
         var dataNasc = document.getElementById('dataNasc').value;
         var telFixo = document.getElementById('telFixo').value;
         var telCel = document.getElementById('telCel').value;
         var curso = document.getElementById('curso').value;
         
         pessoa = new Aluno(nome, email, dataNasc, telFixo, telCel, curso);

         Swal.fire({
            title: 'Aluno Cadastrado!',
            html: `Nome: ${nome}<br>
                  Email: ${email}<br>
                  Data de Nascimento: ${dataNasc}<br>
                  Telefone Fixo: ${telFixo}<br>
                  Telefone Celular: ${telCel}<br>
                  Curso: ${curso}<br>
                  Contador: ${Aluno.contador}`,
            icon: 'success',
            confirmButtonText: 'Ok'
         }).then(() => {
             location.reload();
         });

      } else if (tipoPessoa === 'professor') {
         
         var nome = document.getElementById('nome').value;
         var email = document.getElementById('email').value;
         var dataNasc = document.getElementById('dataNasc').value;
         var telFixo = document.getElementById('telFixo').value;
         var telCel = document.getElementById('telCel').value;
         var area = document.getElementById('area').value;
         var lattes = document.getElementById('lattes').value;
         
         pessoa = new Professor(nome, email, dataNasc, telFixo, telCel, area, lattes);

         Swal.fire({
            title: 'Professor Cadastrado!',
            html: `Nome: ${nome}<br>
                  Email: ${email}<br>
                  Data de Nascimento: ${dataNasc}<br>
                  Telefone Fixo: ${telFixo}<br>
                  Telefone Celular: ${telCel}<br>
                  Área: ${area}<br>
                  Lattes: ${lattes}<br>
                  Contador: ${Professor.contador}`,
            icon: 'success',
            confirmButtonText: 'Ok'
         }).then(() => {
            location.reload();
         });

      } else {
         alert('Por favor, selecione um tipo de pessoa.');
         return; 
      }
   }

   
   document.querySelectorAll('input[name="tipoPessoa"]').forEach(function(radio) {
       radio.addEventListener('change', function() {
           const tipoPessoa = this.value;
           const tipoAluno = document.getElementById('tipoAluno');
           const tipoProfessor = document.getElementById('tipoProfessor');

           if (tipoPessoa === 'aluno') {
               tipoAluno.style.display = 'block';
               tipoProfessor.style.display = 'none';
           } else if (tipoPessoa === 'professor') {
               tipoAluno.style.display = 'none';
               tipoProfessor.style.display = 'block';
           } else {
               tipoAluno.style.display = 'none';
               tipoProfessor.style.display = 'none';
           }
       });
   });
});