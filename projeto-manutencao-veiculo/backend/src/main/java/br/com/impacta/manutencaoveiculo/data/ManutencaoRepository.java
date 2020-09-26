package br.com.impacta.manutencaoveiculo.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ManutencaoRepository extends JpaRepository<ManutencaoModel, Long> {

	public List<ManutencaoModel> findByNome(String string);

}