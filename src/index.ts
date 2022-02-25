/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	
	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	console.log("");
	console.log(`Desafio 3`);
	console.log(" ");
	
	const entrada = require("prompt-sync")({sigint:true});
	var quant: number = 0;
	var aluno: string = "";
	var notaMaxima: number = 0.0;
	
	quant = (entrada(`Qual a Quantidade de Alunos?`));
	console.log('');
	

	for(var i = 1; i <= quant; i++) {
		
	var nome = entrada(`Qual o nome do ${i}º Aluno: `);
	var nota = parseFloat(entrada(`Qual o nota do Aluno ${nome}: `));

    if (nota > notaMaxima) {
       notaMaxima = nota;
	   aluno = nome;
	 }
	}
		
	console.log(`Nome e Nota do Aluno(a) com a maior nota da classe é: ${aluno} com a Nota ${notaMaxima}`);	
});





