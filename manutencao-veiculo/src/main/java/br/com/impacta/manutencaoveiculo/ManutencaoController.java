package br.com.impacta.manutencaoveiculo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManutencaoController {

	@GetMapping("/manutencoes")
	public String buscarTodos() {
		return "buscarTodos";
	}
	
	@GetMapping("/manutencoes/{id}")
	public String buscarUm(@PathVariable Long id) {
		System.out.println(">>>>" + id);
		return "buscarum";
	}
	
	@PostMapping("/manutencoes")
	public String criar() {
		return "criar";
	}
	
	@PutMapping("/manutencoes")
	public String atualizar() {
		return "atualizar";
	}
	
	@DeleteMapping("/manutencoes/{id}")
	public String remover(@PathVariable Long id) {
		System.out.println(">>>>" + id);
		return "remover";
	}
}
