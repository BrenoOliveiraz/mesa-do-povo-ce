const { writeFileSync } = require('fs');

// Array original com os dados dos proponentes
const dadosOriginais = [
  {
    "Num TPAF": "CE/2025/02/0001",
    "Nome Proponente": "ASSOCIACAO DOS PRODUTORES RURAIS DA COM. N S. DA CONCEIÇÃO",
    "CNPJ Proponente": "41.286.600/0001-45"
  },
  {
    "Num TPAF": "CE/2025/02/0002",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS DO ASSENTAMENTO AIMORE",
    "CNPJ Proponente": "05.074.727/0001-37"
  },
  {
    "Num TPAF": "CE/2025/02/0003",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS PRODUTORES RURAIS DO ASSENTAMENTO UBERABA",
    "CNPJ Proponente": "05.979.416/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0004",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS MORADORES DO SITIO LAPA",
    "CNPJ Proponente": "00.967.209/0001-29"
  },
  {
    "Num TPAF": "CE/2025/02/0005",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DA AGROVILA SAO JOSE",
    "CNPJ Proponente": "17.907.810/0001-29"
  },
  {
    "Num TPAF": "CE/2025/02/0006",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES DO SITIO SACO DO JERIMUM",
    "CNPJ Proponente": "10.504.195/0001-60"
  },
  {
    "Num TPAF": "CE/2025/02/0007",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS DE BAIXA DA UMBURANA",
    "CNPJ Proponente": "41.286.394/0001-73"
  },
  {
    "Num TPAF": "CE/2025/02/0008",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES DA COM.DE CHABOCÃO ACHA",
    "CNPJ Proponente": "01.913.875/0001-47"
  },
  {
    "Num TPAF": "CE/2025/02/0009",
    "Nome Proponente": "ASSOC. DOS MORADORES ADOLFO CAMPELO DO SITIO MÃO DIREITA",
    "CNPJ Proponente": "01.045.547/0001-76"
  },
  {
    "Num TPAF": "CE/2025/02/0010",
    "Nome Proponente": "ASSOCIAÇÃO TABOENSE DOS APICULTORES- ATA",
    "CNPJ Proponente": "06.050.731/0001-28"
  },
  {
    "Num TPAF": "CE/2025/02/0011",
    "Nome Proponente": "ASSOCIAÇÃO COM DOS M. DA BAIXA DA UMBURANA - POTIRETAMA CEARA",
    "CNPJ Proponente": "05.888.746/0001-05"
  },
  {
    "Num TPAF": "CE/2025/02/0012",
    "Nome Proponente": "ASSOCIAÇÃO DO CONSELHO POPULAR DA COM DE RESISTENCIA DO ASSENT OZIEL ALVES PEREIRA",
    "CNPJ Proponente": "09.389.374/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0013",
    "Nome Proponente": "ASSOCIACAO DOS APICULTORES SERRANOS - APIS",
    "CNPJ Proponente": "08.758.797/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0014",
    "Nome Proponente": "associação santo antonio do pa são caetano",
    "CNPJ Proponente": "08.799.241/0001-54"
  },
  {
    "Num TPAF": "CE/2025/02/0015",
    "Nome Proponente": "COLONIA Z-29 DE PESCA E AQUICULTURA DE CEDRO",
    "CNPJ Proponente": "04.336.116/0001-57"
  },
  {
    "Num TPAF": "CE/2025/02/0016",
    "Nome Proponente": "ASSOCIACAO DOS APICULTORES DE CEDRO SERRAMEL",
    "CNPJ Proponente": "20.840.996/0001-50"
  },
  {
    "Num TPAF": "CE/2025/02/0017",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE ICÓ-AAPI",
    "CNPJ Proponente": "08.926.541/0001-57"
  },
  {
    "Num TPAF": "CE/2025/02/0018",
    "Nome Proponente": "ASSOCIAÇÃO DOS TRABALHADORES RURAIS SENHOR DO BONFIM",
    "CNPJ Proponente": "05.015.758/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0019",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES E AGRICULTORAS FAMILIARES DO ESTADO DO CEARA-COOMAAF",
    "CNPJ Proponente": "09.579.523/0001-09"
  },
  {
    "Num TPAF": "CE/2025/02/0020",
    "Nome Proponente": "COOPSOL COOPERATIVA AGROPECUÁRIA DOS AGRICULTORES FAMILIARES DE SOBRAL E REGIÃO LTDA",
    "CNPJ Proponente": "36.365.840/0001-03"
  },
  {
    "Num TPAF": "CE/2025/02/0021",
    "Nome Proponente": "ASSOCIAÇÃO DA COMUNIDADE DOS BASTIÕES AFRO-DESCENDENTE-JOAQUIM FRANCISCO DE ASSIS",
    "CNPJ Proponente": "11.487.916/0001-34"
  },
  {
    "Num TPAF": "CE/2025/02/0022",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES DO SITIO BAIXA DO JATOBÁ",
    "CNPJ Proponente": "01.142.689/0001-51"
  },
  {
    "Num TPAF": "CE/2025/02/0023",
    "Nome Proponente": "ASSOCIACAO DOS PEQUENOS PRODUTORES E AGRICULTORES FAMILIARES DO POVO POTIGUARA DA ALDEIA JACINTO DE",
    "CNPJ Proponente": "44.941.796/0001-52"
  },
  {
    "Num TPAF": "CE/2025/02/0024",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES DO SITIO BAXINHA",
    "CNPJ Proponente": "03.866.616/0001-38"
  },
  {
    "Num TPAF": "CE/2025/02/0025",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA NOSSA SENHORA DOS PRAZERES",
    "CNPJ Proponente": "22.738.550/0001-45"
  },
  {
    "Num TPAF": "CE/2025/02/0026",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS DOMINGOS FLORENCIO GUERRA",
    "CNPJ Proponente": "00.801.778/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0027",
    "Nome Proponente": "COOPERATIVA REGIONAL DE PRODUCAO AGROINDUSTRIAL LUIS CARLOS LTDA",
    "CNPJ Proponente": "17.185.231/0001-10"
  },
  {
    "Num TPAF": "CE/2025/02/0028",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DA REGIÃO DO CAETANO",
    "CNPJ Proponente": "01.109.291/0001-13"
  },
  {
    "Num TPAF": "CE/2025/02/0029",
    "Nome Proponente": "COOPESQUI - COOPERATIVA DOS PRODUTORES RURAIS E PESCADORES DA REGIÃO DOS INHAMUNS",
    "CNPJ Proponente": "44.866.208/0001-63"
  },
  {
    "Num TPAF": "CE/2025/02/0042",
    "Nome Proponente": "ASSOCIAÇÃO DO DESENVOLVIMENTO RURAL E DA APICULTURA DE HIDROLANDIA",
    "CNPJ Proponente": "14.115.517/0001-30"
  },
  {
    "Num TPAF": "CE/2025/02/0043",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA RURAL DE TAPUIO E MARINHO",
    "CNPJ Proponente": "02.266.967/0001-45"
  },
  {
    "Num TPAF": "CE/2025/02/0044",
    "Nome Proponente": "Cooperativa de Produção Agropecuária do Assentamento Santana - LTDA",
    "CNPJ Proponente": "63.460.455/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0045",
    "Nome Proponente": "ASSOCIAÇÃO DAS MULHERES AGRICULTORAS FAMILIARES DE PARAIPABA",
    "CNPJ Proponente": "14.876.120/0001-61"
  },
  {
    "Num TPAF": "CE/2025/02/0046",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES E AGRICULTORAS DO PROJETO VENCER JUNTOS",
    "CNPJ Proponente": "45.249.035/0001-05"
  },
  {
    "Num TPAF": "CE/2025/02/0047",
    "Nome Proponente": "CASA DA SEMENTE CRISTO REI E ASSOCIAÇÃO COMUNITARIA RURAL DOS SITIO MOCÓ",
    "CNPJ Proponente": "34.371.029/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0048",
    "Nome Proponente": "ASSOCIACAO DA COMUNIDADE REMANESCENTES DE QUILOMBOS JOAO RODRIGUES",
    "CNPJ Proponente": "12.532.325/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0049",
    "Nome Proponente": "ASSOCIACAO DOS APICULTORES DE PEDRA BRANCA",
    "CNPJ Proponente": "07.626.774/0001-71"
  },
  {
    "Num TPAF": "CE/2025/02/0050",
    "Nome Proponente": "CAFAB COOPERATIVA AGRICOLA FAMILIAR DE AGRICULTORES DE BANABUIU LTDA",
    "CNPJ Proponente": "53.597.640/0001-97"
  },
  {
    "Num TPAF": "CE/2025/02/0051",
    "Nome Proponente": "ASSOCIACAO DE MULHERES PRODUTORAS E INDEPENDENTES DO SITIO MELANCIA E ADJACENCIAS - AMPI",
    "CNPJ Proponente": "49.590.314/0001-80"
  },
  {
    "Num TPAF": "CE/2025/02/0052",
    "Nome Proponente": "COOPCAF - COOPERATIVA DOS PRODUTORES DE CAJU E DOS AGRICULTORES",
    "CNPJ Proponente": "06.320.875/0001-57"
  },
  {
    "Num TPAF": "CE/2025/02/0053",
    "Nome Proponente": "COOPERATIVA DE PRODUTORES DA AGROLO.E DA AGRICUTURA FAM. COO",
    "CNPJ Proponente": "34.440.062/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0054",
    "Nome Proponente": "COOPERATIVA DE PRODUÇÃO AGROPECUÁRIA DE CHOROZINHO E ADJACÊNCIAS",
    "CNPJ Proponente": "50.865.973/0001-61"
  },
  {
    "Num TPAF": "CE/2025/02/0055",
    "Nome Proponente": "COOAPMUT COOPERATIVA DE APICULTORES DO MUNICIPIO DE TAUA LTDA",
    "CNPJ Proponente": "53.091.602/0001-68"
  },
  {
    "Num TPAF": "CE/2025/02/0056",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES FAMILIARES DE MERUOCA E CAMOCIM",
    "CNPJ Proponente": "57.534.555/0001-30"
  },
  {
    "Num TPAF": "CE/2025/02/0057",
    "Nome Proponente": "ASSOCIACAO DOS AGRICULTORES DE UMBURANAS",
    "CNPJ Proponente": "12.220.211/0001-19"
  },
  {
    "Num TPAF": "CE/2025/02/0058",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS JOVENS DE PEDRO GOMES E ADJACENCIAS",
    "CNPJ Proponente": "13.122.588/0001-06"
  },
  {
    "Num TPAF": "CE/2025/02/0059",
    "Nome Proponente": "ASSOCIACAO DE DESENVOLVIMENTO COM DE CAJ DOS BALES",
    "CNPJ Proponente": "35.045.996/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0060",
    "Nome Proponente": "ASSOCIAÇÃO COM.DOS AGRICULTORES RURAIS E DEFICIENTES E IDOSI.E ADJ.DIST.FLAMENGO",
    "CNPJ Proponente": "07.592.718/0001-63"
  },
  {
    "Num TPAF": "CE/2025/02/0061",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITÁRIA MARIA NEUZA BEZERRA DO SITIO ITABAIANA",
    "CNPJ Proponente": "07.692.381/0001-66"
  },
  {
    "Num TPAF": "CE/2025/02/0062",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS MARIA FRANCISCA DA COSTA S LUIZ",
    "CNPJ Proponente": "01.172.301/0001-65"
  },
  {
    "Num TPAF": "CE/2025/02/0063",
    "Nome Proponente": "COOPERATIVA DE PRODUÇÃO E DE COMERCIALIZAÇÃO DOS AGRICULTORES",
    "CNPJ Proponente": "33.645.506/0001-07"
  },
  {
    "Num TPAF": "CE/2025/02/0064",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR DE ITAPAJE",
    "CNPJ Proponente": "29.437.211/0001-78"
  },
  {
    "Num TPAF": "CE/2025/02/0065",
    "Nome Proponente": "Associação somel dos Apicultores de Jagauribe",
    "CNPJ Proponente": "07.521.202/0001-28"
  },
  {
    "Num TPAF": "CE/2025/02/0066",
    "Nome Proponente": "COLONIA DOS PESCADORES Z-27 DE LIMA CAMPOS",
    "CNPJ Proponente": "41.344.730/0001-97"
  },
  {
    "Num TPAF": "CE/2025/02/0067",
    "Nome Proponente": "COOPERARCE COOPERATIVA DE AGRICULTORAS E AGRICULTORES FAMILIARES DE SAO GONCALO E REGIAO LTDA",
    "CNPJ Proponente": "58.801.948/0001-26"
  },
  {
    "Num TPAF": "CE/2025/02/0068",
    "Nome Proponente": "COOPFAQ COOPERATIVA DOS PRODUTORES FAMILIARES DO CEARA LTDA",
    "CNPJ Proponente": "29.645.562/0001-74"
  },
  {
    "Num TPAF": "CE/2025/02/0069",
    "Nome Proponente": "ASSOCIAÇÃO PADRE LEONARDUS DO P A RIACHO SECO",
    "CNPJ Proponente": "05.676.898/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0070",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DOS PEQUENOS PRODUTORES RURAIS DA FAZENDA BELMONTE",
    "CNPJ Proponente": "04.267.174/0001-76"
  },
  {
    "Num TPAF": "CE/2025/02/0071",
    "Nome Proponente": "INSTITUIÇÃO SÓCIO COMUNITÁRIA DA AGROVILA ISCA DO AÇÚDE ARACOIABA",
    "CNPJ Proponente": "04.897.284/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0072",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DOS AGRICULTORES, PRODUTORES E APICULTORES DO RINARE II",
    "CNPJ Proponente": "18.661.601/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0073",
    "Nome Proponente": "COOPERAI COOPERATIVA AGROPECUARIA DO TRAIRI LTDA",
    "CNPJ Proponente": "06.591.085/0001-06"
  },
  {
    "Num TPAF": "CE/2025/02/0074",
    "Nome Proponente": "COOPDEST - cooperativa de agricultores e empreendedores familiares do estado do ceará",
    "CNPJ Proponente": "04.604.578/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0075",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES FAMILIARES ASSENTADOS DA REGIAO NORTE",
    "CNPJ Proponente": "52.995.022/0001-32"
  },
  {
    "Num TPAF": "CE/2025/02/0076",
    "Nome Proponente": "COOPASA COOPERATIVA AGROPECUARIA DOS AGRICULTORES FAMILIARES DE SANTANA DO ACARAU",
    "CNPJ Proponente": "08.190.331/0001-43"
  },
  {
    "Num TPAF": "CE/2025/02/0077",
    "Nome Proponente": "cooperativa agropecuaria da agricultura familiar de tamboril",
    "CNPJ Proponente": "33.148.020/0001-63"
  },
  {
    "Num TPAF": "CE/2025/02/0078",
    "Nome Proponente": "ASSOCIACAO ASSENTAMENTO IRMAOS BRASIL",
    "CNPJ Proponente": "09.311.970/0001-82"
  },
  {
    "Num TPAF": "CE/2025/02/0079",
    "Nome Proponente": "ASSOCIAÇÃO DE PRODUTORES DA AGRICULTURA FAMILIAR NOVA CANAÃ",
    "CNPJ Proponente": "22.059.126/0001-74"
  },
  {
    "Num TPAF": "CE/2025/02/0080",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES DO SITIO BARRO VERMELHO",
    "CNPJ Proponente": "03.531.318/0001-97"
  },
  {
    "Num TPAF": "CE/2025/02/0081",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITÁRIA DOS PEQUENOS TRABALHADORES RURAIS IPUEIRA DA VACA II",
    "CNPJ Proponente": "29.148.784/0001-81"
  },
  {
    "Num TPAF": "CE/2025/02/0082",
    "Nome Proponente": "COOPERATIVA REGIONAL DOS ASSENTAMENTOS DE REFORMA AGRÁRIA DO SERTÃO CENTRAL DO CEARÁ-COOPERASC LTDA",
    "CNPJ Proponente": "23.323.155/0001-64"
  },
  {
    "Num TPAF": "CE/2025/02/0083",
    "Nome Proponente": "ASSOCIACAO MUNICIPAL DOS APICULTORES E PECUARIA DE CATUNDA CEARA",
    "CNPJ Proponente": "17.051.894/0001-41"
  },
  {
    "Num TPAF": "CE/2025/02/0084",
    "Nome Proponente": "ASSOCIACAO INDIGENA CONSELHO DOS POVOS TABAJARA DE GROTA VERDE",
    "CNPJ Proponente": "20.036.001/0001-01"
  },
  {
    "Num TPAF": "CE/2025/02/0085",
    "Nome Proponente": "COOPFOR - COOPERATIVA DE AGRICULTORES FAMILIARES DE FORQUILHA",
    "CNPJ Proponente": "27.108.234/0001-03"
  },
  {
    "Num TPAF": "CE/2025/02/0086",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES E FRUTICULTORES DE MARACANAÚ",
    "CNPJ Proponente": "39.778.621/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0087",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DO SITIO BOM JESUS DOS MESQUITA",
    "CNPJ Proponente": "01.296.449/0001-01"
  },
  {
    "Num TPAF": "CE/2025/02/0088",
    "Nome Proponente": "COLONIA DE PESCADORES E AQUICULTORES Z-82 DE BREJO SANTO",
    "CNPJ Proponente": "51.381.607/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0089",
    "Nome Proponente": "COLONIA DE PESCADORES E AQUICULTORES Z-90 DE CRATO -CE",
    "CNPJ Proponente": "52.704.965/0001-69"
  },
  {
    "Num TPAF": "CE/2025/02/0090",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES E AGRICULTORES FAMILIARES DO SITIO LAGOINHA",
    "CNPJ Proponente": "31.366.654/0001-67"
  },
  {
    "Num TPAF": "CE/2025/02/0091",
    "Nome Proponente": "COOPERATIVA AGROINDUSTRIAL SUL CEARENSE",
    "CNPJ Proponente": "37.954.887/0001-67"
  },
  {
    "Num TPAF": "CE/2025/02/0092",
    "Nome Proponente": "ASSOCIAÇÃO COM. DOS MORADORES PEDRO CELESTINO DE ALMEIDA",
    "CNPJ Proponente": "01.142.698/0001-42"
  },
  {
    "Num TPAF": "CE/2025/02/0093",
    "Nome Proponente": "ASS0CIACAO PALHAENSE DE APICULTURA",
    "CNPJ Proponente": "13.801.952/0001-56"
  },
  {
    "Num TPAF": "CE/2025/02/0094",
    "Nome Proponente": "COAFAC COOPERATIVA DOS AGRICULTORES FAMILIARES DO CARIRI LTD",
    "CNPJ Proponente": "24.250.256/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0095",
    "Nome Proponente": "COOPERATIVA REGIONAL DOS TRABALHADORES APICOLAS ASSENTADOS E ASSENTADOS DA REFORMA AGRÁRIA",
    "CNPJ Proponente": "35.851.590/0001-40"
  },
  {
    "Num TPAF": "CE/2025/02/0096",
    "Nome Proponente": "COAFARCE - COOPERATIVA DA AGRICULTURA FAMILIAR RURAIS DO CEARÁ",
    "CNPJ Proponente": "56.379.645/0001-31"
  },
  {
    "Num TPAF": "CE/2025/02/0097",
    "Nome Proponente": "Cooperativa Agropecuária dos Agricultores Familiares de Canindé Ltda",
    "CNPJ Proponente": "05.283.842/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0098",
    "Nome Proponente": "COPAGRAM COOPERATIVA DOS PECUARISTAS AGRICULTORES E PESCADORES DE AMONTADA",
    "CNPJ Proponente": "53.284.730/0001-28"
  },
  {
    "Num TPAF": "CE/2025/02/0099",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DE AGRICULTORES FAMILIARES - COOPAFAM",
    "CNPJ Proponente": "21.872.925/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0100",
    "Nome Proponente": "ASSOCIACAO DAS PESCADORAS E PESCADORES DO ACUDE REALEJO - APPAR",
    "CNPJ Proponente": "08.538.151/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0101",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DE GIQUI",
    "CNPJ Proponente": "06.738.108/0001-62"
  },
  {
    "Num TPAF": "CE/2025/02/0102",
    "Nome Proponente": "ASSOCIACAO DOS PRODUTORES RURAIS DE SAO JOSE DOS FAMAS",
    "CNPJ Proponente": "02.026.464/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0103",
    "Nome Proponente": "COPANH COOPERATIVA AGROINDUSTRIAL DO ASSENTAMENTO NOVO HORIZONTE",
    "CNPJ Proponente": "10.234.717/0001-51"
  },
  {
    "Num TPAF": "CE/2025/02/0104",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE NOVA RUSSAS",
    "CNPJ Proponente": "08.060.772/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0105",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DOS PRODUTORES ORGANICOS DA IBIAPABA-COAPOI",
    "CNPJ Proponente": "25.935.160/0001-53"
  },
  {
    "Num TPAF": "CE/2025/02/0106",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITÁRIA DOS AGRICULTORES DA COMUNIDADE DE UMBURANA",
    "CNPJ Proponente": "09.385.853/0001-63"
  },
  {
    "Num TPAF": "CE/2025/02/0107",
    "Nome Proponente": "COPROOFAP COOPERATIVA DOS PRODUTORES FAMILIARES DE PACAJUS LTDA",
    "CNPJ Proponente": "26.645.620/0001-71"
  },
  {
    "Num TPAF": "CE/2025/02/0108",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS PRODUTORES RURAIS E IRRIGANTES DO SITIO VOLTA",
    "CNPJ Proponente": "09.195.386/0001-09"
  },
  {
    "Num TPAF": "CE/2025/02/0109",
    "Nome Proponente": "ASSOCIACAO REGIONAL COMUNITARIA DE VACA MORTA",
    "CNPJ Proponente": "03.003.628/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0110",
    "Nome Proponente": "COOPERATIVA DOS PRODUTORES DE CAPRINO E OVINOS DO VALE JAGUARIBANO",
    "CNPJ Proponente": "37.962.095/0001-34"
  },
  {
    "Num TPAF": "CE/2025/02/0111",
    "Nome Proponente": "ASSOCIAÇÃO DOS PROD. RURAIS DA AGRICULTURA FAMILIA SÃO FRANCISCO DE ASSIS",
    "CNPJ Proponente": "08.619.860/0001-10"
  },
  {
    "Num TPAF": "CE/2025/02/0112",
    "Nome Proponente": "ASSOCIACAO DE APICULTORES DE SANTANA",
    "CNPJ Proponente": "12.488.921/0001-24"
  },
  {
    "Num TPAF": "CE/2025/02/0113",
    "Nome Proponente": "ASSOCIAÇÃO DOS PESCADORES DO EMA",
    "CNPJ Proponente": "02.237.276/0001-13"
  },
  {
    "Num TPAF": "CE/2025/02/0114",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DOS TRABALHADORES DO P A GUANABARA",
    "CNPJ Proponente": "63.386.858/0001-56"
  },
  {
    "Num TPAF": "CE/2025/02/0115",
    "Nome Proponente": "COOPERATIVA AGROECOLOGICA DA AGRICULTURA FAMILIAR DO CAMINHO DE ASSIS",
    "CNPJ Proponente": "11.842.467/0001-03"
  },
  {
    "Num TPAF": "CE/2025/02/0116",
    "Nome Proponente": "ASSOC. DOS REM DE QUIL NOSSA SENHORA DAS GRAÇAS DO SITIO ARAPUCA",
    "CNPJ Proponente": "03.557.156/0001-66"
  },
  {
    "Num TPAF": "CE/2025/02/0117",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS SITIOS BARROQUINHA,SAO JOAO E ADJACENCIA",
    "CNPJ Proponente": "08.563.325/0001-94"
  },
  {
    "Num TPAF": "CE/2025/02/0118",
    "Nome Proponente": "ASCOFRADE - Associação Comunitária São Francisco do Sítio Zé",
    "CNPJ Proponente": "04.963.481/0001-91"
  },
  {
    "Num TPAF": "CE/2025/02/0119",
    "Nome Proponente": "ASSOCIACAO CULTURAL DOS QUILOMBOLAS RENASCER DA LAGOA DOS CRIOULOS",
    "CNPJ Proponente": "12.340.190/0001-75"
  },
  {
    "Num TPAF": "CE/2025/02/0120",
    "Nome Proponente": "ASSOCIAÇÃO QUILOMBOLA SAO JOÃO DA SERRA DOS NOGUEIRAS, COMUNIDADE LEONTINOS",
    "CNPJ Proponente": "41.390.992/0001-98"
  },
  {
    "Num TPAF": "CE/2025/02/0121",
    "Nome Proponente": "MUNICIPIO DE SALITRE EST",
    "CNPJ Proponente": ""
  },
  {
    "Num TPAF": "CE/2025/02/0121",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA HONORATO JOSE DE QUEIROZ",
    "CNPJ Proponente": "12.462.206/0001-12"
  },
  {
    "Num TPAF": "CE/2025/02/0122",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DA CAUAIA COOPERCAU",
    "CNPJ Proponente": "23.473.738/0001-71"
  },
  {
    "Num TPAF": "CE/2025/02/0123",
    "Nome Proponente": "Associação Comunitária dos Assentados de Monte Alegre",
    "CNPJ Proponente": "05.296.142/0001-61"
  },
  {
    "Num TPAF": "CE/2025/02/0124",
    "Nome Proponente": "ASSOCIAÇÃO DE AGRICULTORES DO SITIO POCAS",
    "CNPJ Proponente": "48.460.670/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0125",
    "Nome Proponente": "COOPERATIVA DE AGRICULTORES FAMILIARES DO LITORAL OESTE E VALE DO CURU",
    "CNPJ Proponente": "52.184.604/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0126",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE VARZEA ALEGRE ASSAPIA08.967.968/0001-01 MATRIZ",
    "CNPJ Proponente": "08.967.968/0001-01"
  },
  {
    "Num TPAF": "CE/2025/02/0127",
    "Nome Proponente": "ASSOCIAÇÃO MENINO DE JESUS",
    "CNPJ Proponente": "35.223.700/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0128",
    "Nome Proponente": "ASSOCIAÇÃO DOS IRRIGANTES DO TOME VIEIRA",
    "CNPJ Proponente": "07.287.348/0001-50"
  },
  {
    "Num TPAF": "CE/2025/02/0129",
    "Nome Proponente": "ASSOCIAÇÃO DOS SUINOCULTORES DE MORADA NOVA",
    "CNPJ Proponente": "32.462.363/0001-35"
  },
  {
    "Num TPAF": "CE/2025/02/0130",
    "Nome Proponente": "ASSOCIAÇÃO DA UNIDADE PRODUTIVA BENFICA",
    "CNPJ Proponente": "22.388.426/0001-05"
  },
  {
    "Num TPAF": "CE/2025/02/0131",
    "Nome Proponente": "SOCIEDADE DOS AGRICULTORES DO MEIO AMBIENTE",
    "CNPJ Proponente": "05.274.876/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0132",
    "Nome Proponente": "COOPERATIVA REGIONAL DOS ASSENTADOS(AS) DA REFORMA AGRARIA",
    "CNPJ Proponente": "27.179.096/0001-53"
  },
  {
    "Num TPAF": "CE/2025/02/0133",
    "Nome Proponente": "ASSOCIAÇÃO DOS JOVENS PRODUTORES VIDA MELHOR",
    "CNPJ Proponente": "12.973.927/0001-97"
  },
  {
    "Num TPAF": "CE/2025/02/0134",
    "Nome Proponente": "ASSOCIAÇÃO DOS CRIADORES DO MUNICIPIO DE DEPUTADO IRAPUAN PINHEIRO",
    "CNPJ Proponente": "07.190.169/0001-69"
  },
  {
    "Num TPAF": "CE/2025/02/0135",
    "Nome Proponente": "COOPERATIVA AGROPECUÁRIA DOS PRODUTORES DO CEARÁ - AGROPAC",
    "CNPJ Proponente": "30.045.789/0001-68"
  },
  {
    "Num TPAF": "CE/2025/02/0136",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS PEQUENOS AGRICULTORES DO MOREIRA DOS ANGICOS",
    "CNPJ Proponente": "05.351.819/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0137",
    "Nome Proponente": "ASSOCIAÇÃO DOS POVOS INDIGENAS POTIGUARA DA ALDEIA TRIZIDELA E VOLTA DO RIO",
    "CNPJ Proponente": "52.593.946/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0138",
    "Nome Proponente": "COOPERATIVA AGRICOLA MISTA DOS PEQUENOS PRODUTORES DE PARAMBU",
    "CNPJ Proponente": "00.923.473/0001-60"
  },
  {
    "Num TPAF": "CE/2025/02/0139",
    "Nome Proponente": "ASSOCIACAO KOLPING DOS CORRENTES",
    "CNPJ Proponente": "63.366.470/0001-93"
  },
  {
    "Num TPAF": "CE/2025/02/0140",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR DE CEARA",
    "CNPJ Proponente": "18.512.990/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0141",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS ASSENTADOS DE XIQUE XIQUE",
    "CNPJ Proponente": "01.995.526/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0142",
    "Nome Proponente": "COOUMEL COOPERATIVA AGROPECUARIA DE APICULTORES DO MUNICIPIO",
    "CNPJ Proponente": "15.163.517/0001-79"
  },
  {
    "Num TPAF": "CE/2025/02/0143",
    "Nome Proponente": "Associação Comunitária dos Sítios Taperinha Canafitula",
    "CNPJ Proponente": "05.804.479/0001-32"
  },
  {
    "Num TPAF": "CE/2025/02/0144",
    "Nome Proponente": "ASSOCIAÇÃO DOS PESCADORES DE FEITICEIRO-ASPEFE",
    "CNPJ Proponente": "07.402.124/0001-42"
  },
  {
    "Num TPAF": "CE/2025/02/0145",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA FAMILIAR DA SERRA DA IBIAPABA",
    "CNPJ Proponente": "43.247.364/0001-83"
  },
  {
    "Num TPAF": "CE/2025/02/0146",
    "Nome Proponente": "ASSOCIAÇÃO DOS PEQUENOS PRODUTORES RURAIS DA REGIÃO DO JARDIM",
    "CNPJ Proponente": "10.489.235/0001-42"
  },
  {
    "Num TPAF": "CE/2025/02/0147",
    "Nome Proponente": "COOPERATIVA SERTANEJA CEARENSE FAPE",
    "CNPJ Proponente": "17.071.170/0001-60"
  },
  {
    "Num TPAF": "CE/2025/02/0148",
    "Nome Proponente": "ASSOCIAÇÃO comunitária dos moradores, produtores agriculores de tamarindo de acaraú",
    "CNPJ Proponente": "67.452.515/0001-40"
  },
  {
    "Num TPAF": "CE/2025/02/0149",
    "Nome Proponente": "ASSOCIAÇÃO DO DESENVOLVIMENTO DA COMUNIDADE DE CARNAUBINHA DOS BEZERRAS",
    "CNPJ Proponente": "05.052.699/0001-07"
  },
  {
    "Num TPAF": "CE/2025/02/0150",
    "Nome Proponente": "ASSOCIAÇÃO DE AGRICULTORES FAMILIARES DA VARZEA DA CRUZ",
    "CNPJ Proponente": "54.272.251/0001-54"
  },
  {
    "Num TPAF": "CE/2025/02/0151",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DE CARIRIACU",
    "CNPJ Proponente": "53.010.544/0001-09"
  },
  {
    "Num TPAF": "CE/2025/02/0152",
    "Nome Proponente": "COOPERATIVA DE PRODUÇÃO AGROPECUARIA E SERVICOS SANTA BARBARA",
    "CNPJ Proponente": "02.981.979/0001-51"
  },
  {
    "Num TPAF": "CE/2025/02/0153",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z-87 DE MISSÃO VELHA-CE",
    "CNPJ Proponente": "52.137.961/0001-46"
  },
  {
    "Num TPAF": "CE/2025/02/0154",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DO POVO TABAJARA DO SITIO SAO MANOEL",
    "CNPJ Proponente": "23.411.873/0001-92"
  },
  {
    "Num TPAF": "CE/2025/02/0155",
    "Nome Proponente": "ASSOCIAÇÃO DOS AGRICULTORES FAMILIARES DO MUNICIPIO DE ITAPAJE ADJACENTES",
    "CNPJ Proponente": "27.805.404/0001-09"
  },
  {
    "Num TPAF": "CE/2025/02/0156",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DE JUAZEIRO DE CIMA -ITAIABINHA",
    "CNPJ Proponente": "52.488.136/0001-96"
  },
  {
    "Num TPAF": "CE/2025/02/0157",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES E AGRICULTORES DE LAGOA DANTAS",
    "CNPJ Proponente": "08.887.146/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0158",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DE CARNAUBINHA-CAEIRA",
    "CNPJ Proponente": "03.207.516/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0159",
    "Nome Proponente": "ASSOCIAÇÃO DAS MULHERES GUERREIRAS DO XIQUE-XIQUE I",
    "CNPJ Proponente": "10.868.042/0001-27"
  },
  {
    "Num TPAF": "CE/2025/02/0160",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DE SENADOR POMPEU LTDA COSENA",
    "CNPJ Proponente": "07.729.312/0001-80"
  },
  {
    "Num TPAF": "CE/2025/02/0161",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITÁRIA CORREGUINHO DOS SILVERIOS",
    "CNPJ Proponente": "51.027.432/0001-27"
  },
  {
    "Num TPAF": "CE/2025/02/0162",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITÁRIA DOS MORADORES DE MILAGRES",
    "CNPJ Proponente": "12.474.573/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0163",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE JAGUARITAMA",
    "CNPJ Proponente": "05.977.618/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0164",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS AGRICULTORES DE BETEL E SITIOS VIZINHOS",
    "CNPJ Proponente": "11.886.644/0001-45"
  },
  {
    "Num TPAF": "CE/2025/02/0165",
    "Nome Proponente": "associação dos trabalhadores rurais de guariba",
    "CNPJ Proponente": "01.578.444/0001-71"
  },
  {
    "Num TPAF": "CE/2025/02/0166",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITORIA DOS PA DA PAZ",
    "CNPJ Proponente": "02.772.790/0001-59"
  },
  {
    "Num TPAF": "CE/2025/02/0167",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA PARA O PROGRESSO ZÉ VIEIRA",
    "CNPJ Proponente": "00.895.827/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0168",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITÁRIA MANOEL FRANCISCO DE SOUZA DOS MORADORES DO SACTIO BARRA",
    "CNPJ Proponente": "00.891.337/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0169",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z83 DE MAURITI",
    "CNPJ Proponente": "50.379.748/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0170",
    "Nome Proponente": "cooperativa das agricultores e agricultores familiares de maracanaúpe",
    "CNPJ Proponente": "15.753.348/0001-27"
  },
  {
    "Num TPAF": "CE/2025/02/0171",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DE BAIXO",
    "CNPJ Proponente": "01.172.316/0001-03"
  },
  {
    "Num TPAF": "CE/2025/02/0172",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS PEQUENOS PRODUTORES RURAIS DA LOCALIDADE DE CANTO GALO E ADJACENCIAS",
    "CNPJ Proponente": "20.347.336/0001-32"
  },
  {
    "Num TPAF": "CE/2025/02/0173",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES FAMILIARES DE ITAITINGA - CE",
    "CNPJ Proponente": "53.157.361/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0174",
    "Nome Proponente": "ASSOCIAÇÃO DOS MORADORES DO SITIO EXU E ADJACENCIAS",
    "CNPJ Proponente": "03.111.682/0001-06"
  },
  {
    "Num TPAF": "CE/2025/02/0175",
    "Nome Proponente": "Associação com. de moradores agricultores/as familiares de at. canelas e If",
    "CNPJ Proponente": "05.766.930/0001-74"
  },
  {
    "Num TPAF": "CE/2025/02/0176",
    "Nome Proponente": "ASSOCIAÇÃO DO DESENVOLVIMENTO COMUNITARIA DOS MORADORES DO POVOADO DE TUCUMZINOS",
    "CNPJ Proponente": "23.717.960/0001-72"
  },
  {
    "Num TPAF": "CE/2025/02/0177",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DA SERRA DA IBIAPABA",
    "CNPJ Proponente": "49.423.998/0001-26"
  },
  {
    "Num TPAF": "CE/2025/02/0178",
    "Nome Proponente": "COLONIA DOS TRABALHADORES DA PESCA E AQUICULTORES DE AQUIRAZ - CTPA",
    "CNPJ Proponente": "50.212.756/0001-72"
  },
  {
    "Num TPAF": "CE/2025/02/0179",
    "Nome Proponente": "COOPERATIVA CEARENSE DE AGRICULTORES FAMILIARES LTDA",
    "CNPJ Proponente": "27.258.893/0001-26"
  },
  {
    "Num TPAF": "CE/2025/02/0180",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z-17 DE ICAPUI -CE",
    "CNPJ Proponente": "73.751.687/0001-70"
  },
  {
    "Num TPAF": "CE/2025/02/0181",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z-80 DE JATI",
    "CNPJ Proponente": "51.345.431/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0182",
    "Nome Proponente": "COOPASAC- COOPERATIVA DOS AGRICULTORES E AGRICULTORAS FAMILIARES",
    "CNPJ Proponente": "40.130.082/0001-93"
  },
  {
    "Num TPAF": "CE/2025/02/0183",
    "Nome Proponente": "ASSOC DOS TRAB E TRAB RURAIS DE BORGES NOVA ESPERANCA",
    "CNPJ Proponente": "63.366.769/0001-48"
  },
  {
    "Num TPAF": "CE/2025/02/0184",
    "Nome Proponente": "ASSOC NOVA ESPERANCA DE CALABOÇO II E RIACHO DO MEIO",
    "CNPJ Proponente": "00.942.683/0001-94"
  },
  {
    "Num TPAF": "CE/2025/02/0185",
    "Nome Proponente": "ASSOCIAÇÃO DA AGRICULTURA FAMILIAR DO SITIO GUARIUBA",
    "CNPJ Proponente": "51.066.624/0001-42"
  },
  {
    "Num TPAF": "CE/2025/02/0186",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA HORACIO FILGUEIRAS TAVARES",
    "CNPJ Proponente": "01.156.374/0001-53"
  },
  {
    "Num TPAF": "CE/2025/02/0187",
    "Nome Proponente": "ASSOCIAÇÃO SAO PEDRO",
    "CNPJ Proponente": "09.139.019/0001-98"
  },
  {
    "Num TPAF": "CE/2025/02/0188",
    "Nome Proponente": "ASSOC. COMUNITARIA E DE COM. SOCIAL NOSSA SENHORA DE FATIMA",
    "CNPJ Proponente": "10.914.131/0001-38"
  },
  {
    "Num TPAF": "CE/2025/02/0189",
    "Nome Proponente": "cooperativa agricultura familiar e economia solidaria do sertao central e regiao",
    "CNPJ Proponente": "44.301.510/0001-74"
  },
  {
    "Num TPAF": "CE/2025/02/0190",
    "Nome Proponente": "COOPERATIVA REGIONAL DOS ASSENTADOS DA REGIÃO LITORAL NORTE",
    "CNPJ Proponente": "36.396.374/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0191",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DO DISTRITO DE SUSSUANHA",
    "CNPJ Proponente": "07.899.591/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0192",
    "Nome Proponente": "ASSOCIACAO DOS APICULTORES DE CAMPOS SALES (AAPICS )",
    "CNPJ Proponente": "03.640.514/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0193",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA E DOS AGRICULTORES E PECUARISTAS DA LAGOA DAS PEDRAS",
    "CNPJ Proponente": "01.045.585/0001-29"
  },
  {
    "Num TPAF": "CE/2025/02/0194",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS AGRICULTORES DO SACTIO CACHOEIRA GRANDE",
    "CNPJ Proponente": "02.612.037/0001-94"
  },
  {
    "Num TPAF": "CE/2025/02/0195",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA FILHAS DE SANTA LUZIA",
    "CNPJ Proponente": "11.092.337/0001-92"
  },
  {
    "Num TPAF": "CE/2025/02/0196",
    "Nome Proponente": "ASSOCIACAO MUNICIPAL DOS APICULTORES DE QUITERIANOPOLI-AMAQ",
    "CNPJ Proponente": "24.586.717/0001-25"
  },
  {
    "Num TPAF": "CE/2025/02/0197",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES FAMILIARES DO VALE DO FORQUILHA",
    "CNPJ Proponente": "22.717.179/0001-35"
  },
  {
    "Num TPAF": "CE/2025/02/0198",
    "Nome Proponente": "ASSOCIAÇÃO DOS AGROPECUARISTAS UNIDOS DE JAGUARETAMA",
    "CNPJ Proponente": "44.931.719/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0199",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DE ARARAS",
    "CNPJ Proponente": "07.346.118/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0200",
    "Nome Proponente": "COOPERATIVADA AGR FAMILIAR DOS VALES DOSALGADOE JAGUARIBE LTDA",
    "CNPJ Proponente": "54.435.001/0001-98"
  },
  {
    "Num TPAF": "CE/2025/02/0201",
    "Nome Proponente": "ASSOCIACAO DIGNIDADE E ESPERANCA",
    "CNPJ Proponente": "11.517.937/0001-55"
  },
  {
    "Num TPAF": "CE/2025/02/0202",
    "Nome Proponente": "ASSOCIACAO DE MORADORES E AGRICULTORES FAMILIARES DO BAIRRO DAS FLORES",
    "CNPJ Proponente": "14.476.517/0001-66"
  },
  {
    "Num TPAF": "CE/2025/02/0203",
    "Nome Proponente": "MOVIMENTO MORAR BEM",
    "CNPJ Proponente": "07.427.501/0001-06"
  },
  {
    "Num TPAF": "CE/2025/02/0204",
    "Nome Proponente": "ASSOCIACAO DE APICULTORES DE CARIUS",
    "CNPJ Proponente": "07.666.328/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0205",
    "Nome Proponente": "ASSOCIACAO MARTA NUNES",
    "CNPJ Proponente": "51.827.893/0001-84"
  },
  {
    "Num TPAF": "CE/2025/02/0206",
    "Nome Proponente": "COLONIA DE PESCADORES Z 56 DE QUIXERAMOBIM",
    "CNPJ Proponente": "08.380.765/0001-06"
  },
  {
    "Num TPAF": "CE/2025/02/0207",
    "Nome Proponente": "ASSOCIACAO DOS AGRICULTORES(AS) FAMILIARES DE SANTA RITA E ADJACENCIA",
    "CNPJ Proponente": "05.444.055/0001-04"
  },
  {
    "Num TPAF": "CE/2025/02/0208",
    "Nome Proponente": "Associação de pais e Mestres dos Potiguaras de Viração",
    "CNPJ Proponente": "07.625.917/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0209",
    "Nome Proponente": "COOPERATIVA AGROINDUSTRIAL ZE LOURENCO LTDA",
    "CNPJ Proponente": "10.254.805/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0210",
    "Nome Proponente": "COOPERATIVA DE AGRICULTORES FAMILIARES DO CENTRO SUL COOPERCENTRO",
    "CNPJ Proponente": "32.144.817/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0211",
    "Nome Proponente": "ASSOCIAÇÃODOS FRUTICULTORES DO MUNICIPIO DE ITAPAJE",
    "CNPJ Proponente": "02.313.226/0001-78"
  },
  {
    "Num TPAF": "CE/2025/02/0212",
    "Nome Proponente": "ASSOCIAÇÃO DE DESENVOLVIMENTO COMUNITARIO DO SITIO RIACHO DAS ALMAS",
    "CNPJ Proponente": "18.216.534/0001-12"
  },
  {
    "Num TPAF": "CE/2025/02/0213",
    "Nome Proponente": "COOPERATIVA CEARENSES DE PRODUTORES FAMILIARES CCPF",
    "CNPJ Proponente": "21.128.101/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0214",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR DOS SERTOES DE CRATEUS",
    "CNPJ Proponente": "33.189.459/0001-34"
  },
  {
    "Num TPAF": "CE/2025/02/0215",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DESENVOLVIMENTO E UNIAO DE VIRAÇAO",
    "CNPJ Proponente": "06.031.263/0001-44"
  },
  {
    "Num TPAF": "CE/2025/02/0216",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES SOLIDARIOS - APROSOL",
    "CNPJ Proponente": "07.608.792/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0217",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA SAO JOSE DE CASTELO",
    "CNPJ Proponente": "09.518.810/0001-09"
  },
  {
    "Num TPAF": "CE/2025/02/0218",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR E ECONOMIA SOLIDARIA DO ESTADO DO CEARÁ",
    "CNPJ Proponente": "18.813.064/0001-77"
  },
  {
    "Num TPAF": "CE/2025/02/0219",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DE CHAPADA I",
    "CNPJ Proponente": "09.329.023/0001-19"
  },
  {
    "Num TPAF": "CE/2025/02/0220",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA NOSSA SENHORA DO PERPETUO SOCORRO DO TRAPIA",
    "CNPJ Proponente": "02.827.961/0001-98"
  },
  {
    "Num TPAF": "CE/2025/02/0221",
    "Nome Proponente": "COOPERATIVA DE AGRICULTURA FAMILIAR E SUSTENTABILIDADE DO SERTAO CENTRAL-COOPAF",
    "CNPJ Proponente": "44.998.208/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0222",
    "Nome Proponente": "COOPERATIVA DE AGRICULTORES FAMILIARES DO VALE JAGUARIBE - COOPERVALE",
    "CNPJ Proponente": "43.351.207/0001-13"
  },
  {
    "Num TPAF": "CE/2025/02/0223",
    "Nome Proponente": "ASSOCIACAO DE DESENVOLVIMENTO COMUNITARIO SAO PAULO",
    "CNPJ Proponente": "06.748.545/0001-67"
  },
  {
    "Num TPAF": "CE/2025/02/0224",
    "Nome Proponente": "ASSOCIACAO SAO JOSE DOS PEQ. PRODUTORES DE STA FELICIA II",
    "CNPJ Proponente": "02.696.954/0001-06"
  },
  {
    "Num TPAF": "CE/2025/02/0225",
    "Nome Proponente": "ASSOCIAÇÃOO COMUNITARIA UNIÃO DE TODOS",
    "CNPJ Proponente": "05.371.711/0001-96"
  },
  {
    "Num TPAF": "CE/2025/02/0226",
    "Nome Proponente": "COOPERATIVA DE PRODUÇAO E DE COMERCIALIZAÇAO DOS AGRICULTORES FAMILIARES E DOS PRODUTORES RURAIS DE",
    "CNPJ Proponente": "32.623.771/0001-21"
  },
  {
    "Num TPAF": "CE/2025/02/0227",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA BENEFICENTE DO SITIO PAU ALTO -URUBURETAMA",
    "CNPJ Proponente": "01.009.081/0001-53"
  },
  {
    "Num TPAF": "CE/2025/02/0228",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR DO VALE DO CURU",
    "CNPJ Proponente": "36.701.549/0001-50"
  },
  {
    "Num TPAF": "CE/2025/02/0229",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA JOÃO NOGUEIRA DA COSTA",
    "CNPJ Proponente": "03.864.174/0001-90"
  },
  {
    "Num TPAF": "CE/2025/02/0230",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA FAMILIAR DE CAJUÇUOCA",
    "CNPJ Proponente": "45.160.297/0001-90"
  },
  {
    "Num TPAF": "CE/2025/02/0231",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA NOSSA SENHORA DA CONCEIÇAO DE INGAZEIRA",
    "CNPJ Proponente": "10.263.047/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0232",
    "Nome Proponente": "INSTITUTO FLOR DE JUA",
    "CNPJ Proponente": "60.161.893/0001-89"
  },
  {
    "Num TPAF": "CE/2025/02/0233",
    "Nome Proponente": "COOP DE PRODUC AGROP DA LAGOA DO MINEIRO LTDA",
    "CNPJ Proponente": "63.460.729/0001-60"
  },
  {
    "Num TPAF": "CE/2025/02/0234",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES FAMILIARES DO BAIXO ACARAU SEMENTES DA TERRA",
    "CNPJ Proponente": "11.016.960/0001-66"
  },
  {
    "Num TPAF": "CE/2025/02/0235",
    "Nome Proponente": "COOPAFIC - COOPERATIVA DE PRODUÇÃO DA AGRICULTURA FAMILIAR DO CEARA",
    "CNPJ Proponente": "58.397.437/0001-90"
  },
  {
    "Num TPAF": "CE/2025/02/0236",
    "Nome Proponente": "ASSOCIACAO MISSAO FAMILIA",
    "CNPJ Proponente": "12.459.384/0001-94"
  },
  {
    "Num TPAF": "CE/2025/02/0237",
    "Nome Proponente": "COLONIA DE PESCADORES E PESCADORAS DE QUIXADA Z - 65",
    "CNPJ Proponente": "10.580.478/0001-91"
  },
  {
    "Num TPAF": "CE/2025/02/0238",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA DE MAE COSMA",
    "CNPJ Proponente": "00.838.172/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0239",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES(AS) FAMILIARES ASSENTADOS(AS)DE IRAUÇUBA/CEARA 2 COOPAFC",
    "CNPJ Proponente": "30.514.669/0001-62"
  },
  {
    "Num TPAF": "CE/2025/02/0240",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DO SERTAO CENTRAL - COAC",
    "CNPJ Proponente": "12.983.739/0001-40"
  },
  {
    "Num TPAF": "CE/2025/02/0241",
    "Nome Proponente": "ASSOCIACAO DOS PEQUENOS PRODUTORES RURAIS DO SITIO TIMBAUBA",
    "CNPJ Proponente": "08.320.232/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0242",
    "Nome Proponente": "ASSOCIAÇAO DOS CRIADORES DE OVINOS E CAPRINOS DE AIUABA",
    "CNPJ Proponente": "01.463.756/0001-30"
  },
  {
    "Num TPAF": "CE/2025/02/0243",
    "Nome Proponente": "Coopernectar - Cooperativa dos Apicultores da Regiao do Semiárido",
    "CNPJ Proponente": "03.462.960/0001-61"
  },
  {
    "Num TPAF": "CE/2025/02/0244",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DOS AGRICULTORES FAMILIARES DA REGIAO NORTE DO CEARA LTDA",
    "CNPJ Proponente": "35.202.279/0001-70"
  },
  {
    "Num TPAF": "CE/2025/02/0245",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA NOVA ALIANÇA TINGUI",
    "CNPJ Proponente": "21.774.093/0001-81"
  },
  {
    "Num TPAF": "CE/2025/02/0246",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z-46 DE SOLONOPOLE",
    "CNPJ Proponente": "07.785.131/0001-70"
  },
  
  {
    "Num TPAF": "CE/2025/02/0247",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DO SITIO DO MEIO DO TOPE",
    "CNPJ Proponente": "10.275.551/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0248",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA E DE SERVIÇOS NOSSA SENHORA APARECIDA - COOPAAGRO",
    "CNPJ Proponente": "21.196.487/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0249",
    "Nome Proponente": "COOPERATIVA DOS PRODUTORES E AGRICULTORES FAMILIARES DE BEBERIBE LTDA",
    "CNPJ Proponente": "51.890.164/0001-72"
  },
  {
    "Num TPAF": "CE/2025/02/0250",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA AGROECOLOGICA DA AGRICULTURA FAMILIAR DO ESTADO DO CEARA",
    "CNPJ Proponente": "40.130.641/0001-85"
  },
  {
    "Num TPAF": "CE/2025/02/0251",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS, AGRICULTORES, PESCADORES E APICULTORES DO SITIO VOLTA",
    "CNPJ Proponente": "60.160.136/0001-90"
  },
  {
    "Num TPAF": "CE/2025/02/0252",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DA QUILOMBOLA SERRA DOS CHAGAS",
    "CNPJ Proponente": "09.473.219/0001-82"
  },
  {
    "Num TPAF": "CE/2025/02/0253",
    "Nome Proponente": "ASSOCIACAO CUPIM CENTRAL",
    "CNPJ Proponente": "31.610.442/0001-83"
  },
  {
    "Num TPAF": "CE/2025/02/0254",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA VILA VIEIRA",
    "CNPJ Proponente": "14.755.203/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0255",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS DO SITIO AGOSTINHO",
    "CNPJ Proponente": "06.168.347/0001-24"
  },
  {
    "Num TPAF": "CE/2025/02/0256",
    "Nome Proponente": "ASSOCIAÇÃO DOS AGRICULTORES E AGRICULTORAS DA AGRICULTURA FAMILIAR E ECONOMICA SOLIDARIA -AFESOL DO",
    "CNPJ Proponente": "11.484.889/0001-46"
  },
  {
    "Num TPAF": "CE/2025/02/0257",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DOS PRODUTORES E AGRICULTORES DE PIQUET CARNEIRO COOPSB - COOPERATIVA DOS PRODUTORES RURAIS DE SAO BENEDITO",
    "CNPJ Proponente": "40.034.106/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0258",
    "Nome Proponente": "COOPERATIVA DOS PRODUTORES RURAIS DE SAO BENEDITO",
    "CNPJ Proponente": "53.751.745/0001-59"
  },
  {
    "Num TPAF": "CE/2025/02/0259",
    "Nome Proponente": "cooperativa agropecuaria da agricultura familiar de tamboril",
    "CNPJ Proponente": "33.148.020/0001-63"
  },
  {
    "Num TPAF": "CE/2025/02/0260",
    "Nome Proponente": "Associação Comunitária dos Assentados de Monte Alegre",
    "CNPJ Proponente": "05.296.142/0001-61"
  },
  {
    "Num TPAF": "CE/2025/02/0261",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES E AGRICULTORAS FAMILIARES DO ESTADO DO CEARA-COOMAAF",
    "CNPJ Proponente": "09.579.523/0001-09"
  },
  {
    "Num TPAF": "CE/2025/02/0262",
    "Nome Proponente": "ASSOCIAÇÃO DOS PEQUENOS PRODUTORES E AGRICULTORES FAMILIARES DO POVO POTIGUARA DA ALDEIA JACINTO DE",
    "CNPJ Proponente": "44.941.796/0001-52"
  },
  {
    "Num TPAF": "CE/2025/02/0263",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DO POVO TABAJARA DO SITIO SAO MANOEL",
    "CNPJ Proponente": "23.411.873/0001-92"
  },
  {
    "Num TPAF": "CE/2025/02/0264",
    "Nome Proponente": "ASSOCIAÇÃO INDIGENA CONSELHO DOS POVOS TABAJARA DE GROTA VERDE",
    "CNPJ Proponente": "20.036.001/0001-01"
  },
  {
    "Num TPAF": "CE/2025/02/0265",
    "Nome Proponente": "ASSOC. COMUNITARIA CONSTRUTORES DA PAZ",
    "CNPJ Proponente": "02.772.790/0001-59"
  },
  {
    "Num TPAF": "CE/2025/02/0266",
    "Nome Proponente": "ASSOC. COMUNITARIA CONSTRUTORES DA PAZ",
    "CNPJ Proponente": "02.772.790/0001-59"
  },
  {
    "Num TPAF": "CE/2025/02/0267",
    "Nome Proponente": "ASSOCIAÇÃO DOS PRODUTORES RURAIS MARIA FRANCISCA DA COSTA E LUIZ",
    "CNPJ Proponente": "01.172.301/0001-65"
  },
  {
    "Num TPAF": "CE/2025/02/0268",
    "Nome Proponente": "ASSOCIAÇAO TABOENSE DOS APICULTORES-ATA",
    "CNPJ Proponente": "06.050.731/0001-28"
  },
  {
    "Num TPAF": "CE/2025/02/0269",
    "Nome Proponente": "ASSOCIAÇÃO DOS POVOS INDIGENAS POTIGUARA DA ALDEIA TRIZIDELA E VOLTA DO RIO",
    "CNPJ Proponente": "52.593.946/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0270",
    "Nome Proponente": "ASSOCIAÇAO MUNICIPAL DOS APICULTORES E PECUARIA DE CATUNDA CEARA",
    "CNPJ Proponente": "17.051.894/0001-41"
  },
  {
    "Num TPAF": "CE/2025/02/0271",
    "Nome Proponente": "ASSOCIAÇÃO DE APICULTORES DE SANTANA",
    "CNPJ Proponente": "12.488.921/0001-24"
  },
  {
    "Num TPAF": "CE/2025/02/0272",
    "Nome Proponente": "ASSOCIAÇAO DE DESENVOLVIMENTO COM DE CAJ DOS BAIXOS",
    "CNPJ Proponente": "35.045.996/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0273",
    "Nome Proponente": "ASSOCIAÇÃO DOS AGRICULTORES DE UMBURANAS",
    "CNPJ Proponente": "12.220.211/0001-19"
  },
  {
    "Num TPAF": "CE/2025/02/0274",
    "Nome Proponente": "ASSOCIAÇÃO DO CONSELHO POPULAR DA COM DE RESISTENCIA DO ASSENT OZIEL ALVES PEREIRA",
    "CNPJ Proponente": "09.389.374/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0275",
    "Nome Proponente": "COOPAFIC - COOPERATIVA DE PRODUÇÃO DA AGRICULTURA FAMILIAR DO CEARA",
    "CNPJ Proponente": "58.397.437/0001-90"
  },
  {
    "Num TPAF": "CE/2025/02/0276",
    "Nome Proponente": "COOPERATIVA AGROINDUSTRIAL ZE LOURENCO LTDA",
    "CNPJ Proponente": "10.254.805/0001-15"
  },
  {
    "Num TPAF": "CE/2025/02/0277",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR DOS SERTOES DE CRATEUS",
    "CNPJ Proponente": "33.189.459/0001-34"
  },
  {
    "Num TPAF": "CE/2025/02/0278",
    "Nome Proponente": "ASSOC. DOS REM DE QUIL NOSSA SENHORA DAS GRAÇAS DO SITIO ARAPUCA",
    "CNPJ Proponente": "03.557.156/0001-66"
  },
  {
    "Num TPAF": "CE/2025/02/0279",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA PARA O PROGRESSO Zé VIEIRA",
    "CNPJ Proponente": "00.895.827/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0280",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DOS PRODUTORES DO CEARA - AGROPAC",
    "CNPJ Proponente": "30.045.789/0001-68"
  },
  {
    "Num TPAF": "CE/2025/02/0281",
    "Nome Proponente": "ASSOCIAÇÃO DE AGRICULTORES DO SITIO POCAS",
    "CNPJ Proponente": "48.460.670/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0282",
    "Nome Proponente": "ASSOCIAÇAO DE MORADORES E AGRICULTORES FAMILIARES DO BAIRRO DAS FLORES",
    "CNPJ Proponente": "14.476.517/0001-66"
  },
  {
    "Num TPAF": "CE/2025/02/0283",
    "Nome Proponente": "Associação de pais e Mestres dos Potiguaras de Viração",
    "CNPJ Proponente": "07.625.917/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0284",
    "Nome Proponente": "ASSOCIAÇÃO PALHAENSE DE APICULTURA",
    "CNPJ Proponente": "13.801.952/0001-56"
  },
  {
    "Num TPAF": "CE/2025/02/0285",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DE BAIXIO",
    "CNPJ Proponente": "01.172.316/0001-23"
  },
  {
    "Num TPAF": "CE/2025/02/0286",
    "Nome Proponente": "ASSOCIAÇÃO MUNICIPAL DOS APICULTORES DE QUITERIANOPOLI-AMAQ",
    "CNPJ Proponente": "24.586.717/0001-25"
  },
  {
    "Num TPAF": "CE/2025/02/0287",
    "Nome Proponente": "ASSOCIAÇÃO DE APICULTORES DE CARIUS",
    "CNPJ Proponente": "07.668.328/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0288",
    "Nome Proponente": "ASSOCIAÇÃO DO DESENVOLVIMENTO RURAL E DA APICULTURA DE HIDROLANDIA",
    "CNPJ Proponente": "14.115.517/0001-30"
  },
  {
    "Num TPAF": "CE/2025/02/0289",
    "Nome Proponente": "ASSOCIAÇÃO DA COMUNIDADE REMANESCENTES DE QUILOMBOS JOAO RODRIGUES",
    "CNPJ Proponente": "12.532.325/0001-02"
  },
  {
    "Num TPAF": "CE/2025/02/0290",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE PEDRA BRANCA",
    "CNPJ Proponente": "07.626.774/0001-71"
  },
  {
    "Num TPAF": "CE/2025/02/0291",
    "Nome Proponente": "Associacao com. de moradores agricultores/as familiares do si. cancela de li.",
    "CNPJ Proponente": "05.766.930/0001-74"
  },
  {
    "Num TPAF": "CE/2025/02/0292",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z-80 DE JATI",
    "CNPJ Proponente": "51.345.431/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0293",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z-83 DE MAURITI",
    "CNPJ Proponente": "50.379.748/0001-17"
  },
  {
    "Num TPAF": "CE/2025/02/0294",
    "Nome Proponente": "COLONIA DE PESCADORES PROFIARTESANAIS E AQUICULTORES Z-89 DE PENAFORTE-CE",
    "CNPJ Proponente": "53.095.061/0001-46"
  },
  {
    "Num TPAF": "CE/2025/02/0295",
    "Nome Proponente": "CASA DA SEMENTE CRISTO REI E ASSOCIAÇÃO COMUNITARIA RURAL DOS SITIO MOCO",
    "CNPJ Proponente": "34.371.029/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0296",
    "Nome Proponente": "ASSOCIAÇÃO KOLPING DOS CORRENTES",
    "CNPJ Proponente": "63.366.470/0001-93"
  },
  {
    "Num TPAF": "CE/2025/02/0297",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE NOVA RUSSAS",
    "CNPJ Proponente": "08.060.772/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0298",
    "Nome Proponente": "INSTITUIÇÃO SOCIO COMUNITARIA DA AGROVILA ISCA DO AÇUDE ARACUABA",
    "CNPJ Proponente": "04.897.284/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0299",
    "Nome Proponente": "ASSOCIAÇÃO DE MULHERES PRODUTORAS E INDEPENDENTES DO SITIO MELANCIA E ADJACENCIAS -AMPI",
    "CNPJ Proponente": "49.590.314/0001-80"
  },
  {
    "Num TPAF": "CE/2025/02/0300",
    "Nome Proponente": "CAFAB COOPERATIVA AGRICOLA FAMILIAR DE AGRICULTORES DE BANABUIU LTDA",
    "CNPJ Proponente": "53.597.640/0001-97"
  },
  {
    "Num TPAF": "CE/2025/02/0301",
    "Nome Proponente": "ASSOCIACAO COMUNITARIA DOS AGRICULTORES, PRODUTORES E APICULTORES DO RINARE II",
    "CNPJ Proponente": "18.661.601/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0302",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA RURAL DE TAPUIO E MARINHO",
    "CNPJ Proponente": "02.266.967/0001-45"
  },
  {
    "Num TPAF": "CE/2025/02/0303",
    "Nome Proponente": "ASSOCIAÇÃO REGIONAL COMUNITARIA DE VACA MORTA",
    "CNPJ Proponente": "03.003.628/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0304",
    "Nome Proponente": "ASSOCIACÃO DA COMUNIDADE DOS BASTIOES ATRO-DESCENDENTE-JOAQUIM FRANCISCO DE ASSIS",
    "CNPJ Proponente": "11.487.916/0001-34"
  },
  {
    "Num TPAF": "CE/2025/02/0305",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DA CAUCAIA COOPCAU",
    "CNPJ Proponente": "23.473.738/0001-71"
  },
  {
    "Num TPAF": "CE/2025/02/0306",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DA QUILOMBOLA SERRA DOS CHAGAS",
    "CNPJ Proponente": "09.473.219/0001-82"
  },
  {
    "Num TPAF": "CE/2025/02/0307",
    "Nome Proponente": "ASSOCIAÇÃO DOS APICULTORES DE CAMPOS SALES (AAPICS)",
    "CNPJ Proponente": "03.640.514/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0308",
    "Nome Proponente": "COOPERATIVA DE AGRICULTORES FAMILIARES DO CENTRO SUL COOPERCENTRO",
    "CNPJ Proponente": "32.144.817/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0309",
    "Nome Proponente": "ASSOCIAÇÃO DOS PESCADORES DE FEITICEIRO-ASPEFE",
    "CNPJ Proponente": "07.402.124/0001-42"
  },
  {
    "Num TPAF": "CE/2025/02/0310",
    "Nome Proponente": "ASSOCIAÇÃO DAS PESCADORAS E PESCADORES DO ACUDE REALEJO-APPAR",
    "CNPJ Proponente": "08.538.151/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0311",
    "Nome Proponente": "COOPERATIVA DE PRODUTORES DA AGROLO E DA AGRICULTURA FAM. COO",
    "CNPJ Proponente": "34.440.062/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0312",
    "Nome Proponente": "COOAFARCE - COOPERATIVA DA AGRICULTURA FAMILIAR RURAIS DO CEARA",
    "CNPJ Proponente": "56.379.645/0001-31"
  },
  {
    "Num TPAF": "CE/2025/02/0313",
    "Nome Proponente": "ASSOCIAÇAO CULTURAL DOS QUILOMBOLAS RENASCER DA LAGOA DOS CRIOULOS",
    "CNPJ Proponente": "12.340.190/0001-75"
  },
  {
    "Num TPAF": "CE/2025/02/0314",
    "Nome Proponente": "ASSOCIAÇÃO QUILOMBOLA JOAO DA SERRA DOS INOCENCIOS, COMUNIDADE LEONTINOS MUNICIPIO DE QUATRE EST",
    "CNPJ Proponente": "41.390.992/0001-98"
  },
  {
    "Num TPAF": "CE/2025/02/0315",
    "Nome Proponente": "ASSOCIAÇÃO DAS PESCADORAS E PESCADORES DO ACUDE REALEJO - APPAR",
    "CNPJ Proponente": "08.538.151/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0316",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS ASSENTADOS DE XIQUE XIQUE",
    "CNPJ Proponente": "01.995.526/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0317",
    "Nome Proponente": "COPANH COOPERATIVA AGROINDUSTRIAL DO ASSENTAMENTO NOVO HORIZONTE",
    "CNPJ Proponente": "10.234.717/0001-51"
  },
  {
    "Num TPAF": "CE/2025/02/0318",
    "Nome Proponente": "COOPERATIVA DOS AGRICULTORES E FRUTICULTORES DE MARACANAU",
    "CNPJ Proponente": "39.778.621/0001-36"
  },
  {
    "Num TPAF": "CE/2025/02/0319",
    "Nome Proponente": "COOPERATIVA DE PRODUÇÃO AGROPECUÁRIA E SERVIÇOS SANTA BARBARA",
    "CNPJ Proponente": "02.981.979/0001-51"
  },
  {
    "Num TPAF": "CE/2025/02/0320",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS PEQUENOS TRABALHADORES RURAIS IPUIRA DA VACA II",
    "CNPJ Proponente": "29.148.784/0001-81"
  },
  {
    "Num TPAF": "CE/2025/02/0321",
    "Nome Proponente": "COOPSB - COOPERATIVA DOS PRODUTORES RURAIS DE SAO BENEDITO",
    "CNPJ Proponente": "53.751.745/0001-59"
  },
  {
    "Num TPAF": "CE/2025/02/0322",
    "Nome Proponente": "Cooperativa de Produçao Agropecuaria do Assentamento Santana - LTDA",
    "CNPJ Proponente": "63.460.455/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0323",
    "Nome Proponente": "COOPERATIVA DA AGRICULTURA FAMILIAR DO VALE DO CURU",
    "CNPJ Proponente": "36.701.549/0001-50"
  },
  {
    "Num TPAF": "CE/2025/02/0324",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA HORACIO FILGUEIRAS TAVARES",
    "CNPJ Proponente": "01.156.374/0001-63"
  },
  {
    "Num TPAF": "CE/2025/02/0325",
    "Nome Proponente": "ASSOCIAÇAO DO DESENVOLVIMENTO DA COMUNIDADE DE CARNAUBINHA DOS BEZERRAS",
    "CNPJ Proponente": "05.052.699/0001-57"
  },
  {
    "Num TPAF": "CE/2025/02/0326",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DOS PEQUENOS PRODUTORES RURAIS DA LOCALIDADE DE CANTO GALO E ADJACENCIAS",
    "CNPJ Proponente": "20.347.336/0001-32"
  },
  {
    "Num TPAF": "CE/2025/02/0327",
    "Nome Proponente": "ASSOCIAÇAO DIGNIDADE E ESPERANÇA",
    "CNPJ Proponente": "11.517.937/0001-55"
  },
  {
    "Num TPAF": "CE/2025/02/0328",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DO DISTRITO DE SUSSANHA",
    "CNPJ Proponente": "07.899.591/0001-20"
  },
  {
    "Num TPAF": "CE/2025/02/0329",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA DO SITIO DO MEIO DO TOPE",
    "CNPJ Proponente": "10.275.551/0001-11"
  },
  {
    "Num TPAF": "CE/2025/02/0330",
    "Nome Proponente": "ASSOCIAÇAO COMUNITARIA FILHAS DE SANTA LUZIA",
    "CNPJ Proponente": "11.092.337/0001-92"
  },
  {
    "Num TPAF": "CE/2025/02/0331",
    "Nome Proponente": "ASSOCIAÇÃO DAS MULHERES GUERREIRAS DO XIQUE-XIQUE I",
    "CNPJ Proponente": "10.868.042/0001-00"
  },
  {
    "Num TPAF": "CE/2025/02/0332",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA DA SERRA DA IBIAPABA",
    "CNPJ Proponente": "49.423.998/0001-26"
  },
  {
    "Num TPAF": "CE/2025/02/0333",
    "Nome Proponente": "ASSOCIAÇÃO COMUNITARIA DO SITIO BOM JESUS DOS MESQUITA",
    "CNPJ Proponente": "01.296.449/0001-01"
  },
  {
    "Num TPAF": "CE/2025/02/0334",
    "Nome Proponente": "COLONIA DE PESCADORES PROFIARTESANAIS E AQUICULTORES Z-89 DE PENAFORTE-CE",
    "CNPJ Proponente": "53.095.061/0001-46"
  },
  {
    "Num TPAF": "CE/2025/02/0335",
    "Nome Proponente": "ASSOC. COMUNITARIA E DE COM. SOCIAL NOSSA SENHORA DE FATIMA",
    "CNPJ Proponente": "10.914.131/0001-38"
  },
  {
    "Num TPAF": "CE/2025/02/0336",
    "Nome Proponente": "ASSOCIAÇÃO DOS PEQUENOS PRODUTORES RURAIS DO SITIO TIMBAUBA",
    "CNPJ Proponente": "08.320.232/0001-39"
  },
  {
    "Num TPAF": "CE/2025/02/0337",
    "Nome Proponente": "ASSOCIAÇAO DO DESENVOLVIMENTO DA COMUNIDADE DE CARNAUBINHA DOS BEZERRAS",
    "CNPJ Proponente": "05.052.699/0001-57"
  },
  {
    "Num TPAF": "CE/2025/02/0338",
    "Nome Proponente": "COOP DE PRODUC AGROP DA LAGOA DO MINEIRO LTDA",
    "CNPJ Proponente": "63.460.729/0001-60"
  },
  {
    "Num TPAF": "CE/2025/02/0339",
    "Nome Proponente": "ASSOCIAÇÃO DOS AGRICULTORES(AS) FAMILIARES DE SANTA RITA E ADJACENCIA",
    "CNPJ Proponente": "05.444.055/0001-04"
  },
  {
    "Num TPAF": "CE/2025/02/0340",
    "Nome Proponente": "COOPERATIVA DE AGRICULTORES FAMILIARES DO VALE JAGUARIBE- COOPERVALE",
    "CNPJ Proponente": "43.351.207/0001-13"
  },
  {
    "Num TPAF": "CE/2025/02/0341",
    "Nome Proponente": "COOPERATIVA AGROPECUARIA E DE SERVIÇOS NOSSA SENHORA APARECIDA - COOPAAGRO",
    "CNPJ Proponente": "21.196.487/0001-08"
  },
  {
    "Num TPAF": "CE/2025/02/0342",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z17 DE ICAIPU -CE",
    "CNPJ Proponente": "73.751.687/0001-70"
  },
  {
    "Num TPAF": "CE/2025/02/0343",
    "Nome Proponente": "COLONIA DE PESCADORES PROFISSIONAIS ARTESANAIS E AQUICULTORES Z17 DE ICAIPU -CE",
    "CNPJ Proponente": "73.751.687/0001-70"
  },
  {
    "Num TPAF": "CE/2025/02/0344",
    "Nome Proponente": "COLONIA DE PESCADORES E AQUICULTORES Z-50 DE CRATO - CE",
    "CNPJ Proponente": "52.704.965/0001-69"
  },
  {
    "Num TPAF": "CE/2025/02/0345",
    "Nome Proponente": "COLONIA DE PESCADORES E AQUICULTORES Z-82 DE BREJO SANTO",
    "CNPJ Proponente": "51.381.607/0001-08"
  }



];

// 2. Primeiro, crie a variável 'dadosProponentes' a partir de 'dadosOriginais'
const dadosProponentes = {};
dadosOriginais.forEach((item, index) => {
    const id = `tpaf_${index + 1}`;
    dadosProponentes[id] = {
        numTpaf: String(item["Num TPAF"]).trim(),
        nomeProponente: String(item["Nome Proponente"]).trim(),
        cnpjProponente: String(item["CNPJ Proponente"]).trim()
    };
});

// 3. Agora que 'dadosProponentes' existe, você pode usá-la
const dadosProponentesObjeto = Object.entries(dadosProponentes).reduce((acc, [key, value]) => {
    // Você não precisa de outro reduce, 'dadosProponentes' já é um objeto.
    // O código abaixo pode ser removido, pois 'dadosProponentes' já está formatado.
    // acc[value.numTpaf] = value;
    return acc;
}, {});

// O código abaixo é a maneira mais simples de converter o array original em um objeto
const dadosFormatados = dadosOriginais.reduce((acc, proponente) => {
    const { "Num TPAF": numTPAF, ...restanteDoProponente } = proponente;
    acc[numTPAF] = restanteDoProponente;
    return acc;
}, {});

// Salva o objeto formatado em um arquivo JSON
writeFileSync('./tpaf_formatado.json', JSON.stringify(dadosFormatados, null, 2), 'utf8');

console.log('tpaf_formatado.json gerado com sucesso!');
























//converter pra json e salvar no firestore
// fs.writeFileSync(outputPath, JSON.stringify(firestoreData, null, 2));
// console.log(`✅ JSON gerado com ${dadosProponentes.length} documentos em: ${outputPath}`);

// for (let i = 1; i <= 345; i++) {
//   const num = String(i).padStart(4, '0');
//   const docId = `202502${num}`;
//   firestoreData["__collections__"]["tpaf"][docId] = {
//     "Num TPAF": `CE/2025/02/${num}`,
//     "Nome Proponente": "ASSOCIAÇÃO MODELO",
//     "CNPJ Proponente": "00.000.000/0000-00",
//     "Produtos": [
//       {
//         "produto": "ALFACE",
//         "quantidade": 100  // você pode ajustar esse valor conforme necessário
//       }
//     ]
//   };
// }

// fs.writeFileSync(outputPath, JSON.stringify(firestoreData, null, 2));
// console.log(`✅ JSON gerado com 345 documentos em: ${outputPath}`);