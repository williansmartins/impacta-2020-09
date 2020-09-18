package br.com.impacta.manutencaoveiculo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

interface ManutencaoRepository extends JpaRepository<ManutencaoModel, Long> {

	public List<ManutencaoModel> findByNome(String string);
	
}