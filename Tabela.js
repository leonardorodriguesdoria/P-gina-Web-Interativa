// 1- A variavel pessoa será a variável que irá receber a Tabela
// 2- A variavel index se trata do índice da linha da tabela
var pessoas, index;

function cadPessoa(Compromisso , Data) {

    //Manipulação das linhas da Tabela//
    pessoas = document.getElementById("tbPessoas");// 1º Selecionar tabelas por ID    
    var qtdlLinhas = pessoas.rows.length;// 2º quantidades de linhas que tenho na Tabela
    var linha = pessoas.insertRow(qtdlLinhas);// 3º Inserir linhas na Tabela(pegar a última linha, e depois inserir outra linha após essa última)
    var linhaParam;
    //Inserindo Colunas
    var cellID = linha.insertCell(0);
    var cellCompromisso = linha.insertCell(1);
    var cellData = linha.insertCell(2);
    //Inserir o Conteúdo do Formulário
    cellID.innerHTML = qtdlLinhas;
    cellCompromisso.innerHTML = Compromisso;
    cellData.innerHTML = Data;

    preencheCamposForm();

}

//Atribuir os Valores destes Parâmetros(Valores Preenchidos no Formulário) para as Células das Linhas da Tabela
function altPessoa(Compromisso , Data) {

    pessoas.rows[index].cells[1].innerHTML = Compromisso;
    pessoas.rows[index].cells[2].innerHTML = Data;

}
//Navegar pelas linhas da tabela, através de loop for
function preencheCamposForm() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    {
        pessoas.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtID").value = pessoas.rows[index].cells[0].innerText;//Pegando o valor na célula especifica e atribuindo ao campo do formulário
            document.getElementById("txtCompromisso").value = pessoas.rows[index].cells[1].innerText;//""""
            document.getElementById("txtData").value = pessoas.rows[index].cells[2].innerText;//""""
        }
    }
}
//Função Para deletar Registro
function delRegistro() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    {
        if (index == i) {
            pessoas.deleteRow(index);
            return;
        }
    }
}