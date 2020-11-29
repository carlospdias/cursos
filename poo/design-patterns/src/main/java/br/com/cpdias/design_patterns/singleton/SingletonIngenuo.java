package br.com.cpdias.design_patterns.singleton;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SingletonIngenuo {
	private static final Logger LOGGER = LoggerFactory.getLogger(SingletonIngenuo.class);
	private static SingletonIngenuo instancia;

	private String nome;

	private SingletonIngenuo(String nome) {
		super();
		try {
			LOGGER.info("Executando a thread {}", nome);
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		this.nome = nome;
	}

	public static SingletonIngenuo getInstance(String value) {
		if (instancia == null) {
			instancia = new SingletonIngenuo(value);
		}
		return instancia;
	}
	public String getNome() {
		return this.nome;
	}
}
