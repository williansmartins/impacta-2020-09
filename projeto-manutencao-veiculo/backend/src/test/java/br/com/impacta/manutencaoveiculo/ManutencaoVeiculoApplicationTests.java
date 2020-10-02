package br.com.impacta.manutencaoveiculo;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;



@SpringBootTest
public class ManutencaoVeiculoApplicationTests {

	@Autowired
	ManutencaoRepository repository;
			
	@Test
	public void validarDataOK() {
		List<String> cpfs = new ArrayList<String>();
		cpfs.add("12345678909");
		cpfs.add("123.456.789-09");
		cpfs.add("123.456.78909");
		cpfs.add("123456.789-09");
		cpfs.add("123.456789-09");

	
		for(String cpf : cpfs) {		
			boolean resultado = VALIDATORTABAJARA.validar(cpf);
			Assert.assertTrue(resultado);
		}
	}
	
	@Test
	public void validarDataNOK() {
		List<String> cpfs = new ArrayList<String>();
		cpfs.add("12345a678909");
		cpfs.add("123c456.789-09");
		cpfs.add("");
		cpfs.add("11111111111");
		cpfs.add(null);
		cpfs.add("########");
		cpfs.add("$$$$$");
	
		for(String cpf : cpfs) {		
			boolean resultado = VALIDATORTABAJARA.validar(cpf);
			Assert.assertFalse(resultado);
		}
	}
	

}
