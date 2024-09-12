class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        const animaisValidos = ['MACACO', 'GIRAFFO', 'LEAO', 'CROCODILO', 'LEOPARDO', 'GAZELA', 'HIPOPOTAMO'];
        const recintos = [
          { numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes: ['MACACO', 'MACACO', 'MACACO'] },
          { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: [] },
          { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: ['GAZELA'] },
          { numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: [] },
          { numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: ['LEAO'] }
        ];
        
      if (!animaisValidos.includes(animal)) {
          return { erro: 'Animal inválido', recintosViaveis: false };
        }
    
      if (quantidade <= 0) {
          return { erro: 'Quantidade inválida', recintosViaveis: false };
        }
           
      if (quantidade >= 10 ) {
          return { erro: 'Não há recinto viável', recintosViaveis: false };
      }
  
      const recintosViaveis = recintos[animal].filter(recinto => recinto.includes('Recinto'));
      return { erro: null, recintos}
    }

}

export { RecintosZoo as RecintosZoo };
