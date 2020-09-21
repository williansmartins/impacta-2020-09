package br.com.impacta.manutencaoveiculo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ManutencaoModel {

	@Id @GeneratedValue
	private Long id;
	
	private Date dia;
	private String nome;
	private double valor;

	public ManutencaoModel() {

	}
	
	public ManutencaoModel(Long id, Date dia, String nome, double valor) {
		super();
		this.id = id;
		this.dia = dia;
		this.nome = nome;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDia() {
		return dia;
	}

	public void setDia(Date dia) {
		this.dia = dia;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}
}