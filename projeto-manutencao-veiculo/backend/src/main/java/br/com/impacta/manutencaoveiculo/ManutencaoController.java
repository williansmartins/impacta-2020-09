package br.com.impacta.manutencaoveiculo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManutencaoController {
	
	@Autowired
	ManutencaoRepository repositorio;

	@GetMapping("/manutencoes")
	public List<ManutencaoModel> buscarTodos() {
		return repositorio.findAll();
	}
	
	@GetMapping("/manutencoes/{id}")
	public Optional<ManutencaoModel> buscarUm(@PathVariable Long id) {
		return repositorio.findById(id);
	}
	
	@GetMapping("/manutencoes/nome/{nome}")
	public List<ManutencaoModel> buscarPorNome(@PathVariable String nome) {
		return repositorio.findByNome(nome);
	}
	
	@PostMapping("/manutencoes")
	public ManutencaoModel criar(@RequestBody ManutencaoModel model) {
		repositorio.save(model);
		return model;
	}
	
	@PutMapping("/manutencoes/{id}")
	public ManutencaoModel atualizar(@PathVariable Long id, @RequestBody ManutencaoModel model) {
		model.setId(id);
		repositorio.save(model);
		return model;
	}
	
	@DeleteMapping("/manutencoes/{id}")
	public String remover(@PathVariable Long id) {
		try{
			repositorio.deleteById(id);
			return "1";
		}catch (Exception e) {
			return "0";
		}
	}
	
}