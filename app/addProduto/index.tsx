// screens/AdicionarProduto.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';

interface Produto {
  nome: string;
  descricao: string;
  quantidade: string;
  agricultorId: string;
  status: string;
  // dataCadastro: Timestamp;
  entregaRange: {
    inicio: string;
    fim: string;
  };
}

interface Campo {
  key: keyof Produto | 'inicio' | 'fim';
  placeholder: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

export default function AdicionarProduto() {
  const [formData, setFormData] = useState<Produto>({
    nome: '',
    descricao: '',
    quantidade: '',
    agricultorId: '',
    status: 'disponível',
    // dataCadastro: Timestamp.now(),
    entregaRange: {
      inicio: '',
      fim: ''
    }
  });

  const campos: Campo[] = [
    { key: 'nome', placeholder: 'Nome do Produto' },
    { key: 'descricao', placeholder: 'Descrição' },
    { key: 'quantidade', placeholder: 'Quantidade', keyboardType: 'numeric' },
    { key: 'inicio', placeholder: 'Início da Entrega' },
    { key: 'fim', placeholder: 'Fim da Entrega' }
  ];

  function handleChange(name: string, value: string) {
    if (name === 'inicio' || name === 'fim') {
      setFormData(prev => ({
        ...prev,
        entregaRange: {
          ...prev.entregaRange,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }

  // async function handleSave() {
  //   try {
  //     const docRef = await addDoc(collection(db, 'produtos'), formData);
  //     console.log('Produto salvo com ID:', docRef.id);
  //     // Aqui você pode resetar ou redirecionar
  //   } catch (error) {
  //     console.error('Erro ao salvar produto:', error);
  //   }
  // }

  return (
    <View style={styles.container}>
      <Header userName="Fulaninho" role="Agricultor" />
      <Text style={styles.title}>Adicionar Produtos</Text>

      <View style={styles.form}>
        {campos.map((campo) => (
          <InputField
            key={campo.key}
            placeholder={campo.placeholder}
            value={
              campo.key === 'inicio' || campo.key === 'fim'
                ? formData.entregaRange[campo.key]
                : (formData as any)[campo.key]
            }
            onChangeText={(text) => handleChange(campo.key, text)}
            keyboardType={campo.keyboardType || 'default'}
          />
        ))}

        <Pressable  style={styles.button}>
          <Text style={styles.buttonText}>Salvar Produto</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: '#023047'
  },
  title: {
    fontSize: 34,
    color: '#FFF',
    paddingLeft: 14,
    marginBottom: 20
  },
  form: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 14
  },
  button: {
    backgroundColor: '#219EBC',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
