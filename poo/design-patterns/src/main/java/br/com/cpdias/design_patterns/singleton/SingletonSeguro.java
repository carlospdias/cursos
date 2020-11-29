package br.com.cpdias.design_patterns.singleton;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SingletonSeguro {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SingletonSeguro.class);
	private static volatile SingletonSeguro instance;

    private String value;

    private SingletonSeguro(String value) {
        this.value = value;
    }

    public static SingletonSeguro getInstance(String value) {
    	//
    	SingletonSeguro result = instance;
        if (result != null) {
            return result;
        }
        synchronized(SingletonSeguro.class) {
            if (instance == null) {
            	LOGGER.info("Criando uma instância de {}", value);
                instance = new SingletonSeguro(value);
            }
            return instance;
        }
    }
    
    public String getNome() {
    	return this.value;
    }
}
