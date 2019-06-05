const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

//Dados

const nome = ["Helena","Miguel","Alice","Arthur","Laura","Heitor","Manuela","Bernardo","Valentina","Davi","Sophia	","Théo","Isabella","Lorenzo","Heloísa	","Gabriel","Luiza","Pedro","Júlia	","Benjamin","Lorena	","Matheus","Lívia","Lucas","Maria Luiza","Nicolas","Cecília","Joaquim","Eloá","Samuel","Giovanna","Henrique","Maria Clara","Rafael","Maria Eduarda","Guilherme","Mariana","Enzo","Lara","Murilo","Beatriz","Benício","Antonella","Gustavo","Maria Júlia","Isaac","Emanuelly","João Miguel","Isadora","Lucca","Ana Clara","Enzo Gabriel","Melissa","Pedro Henrique","Ana Luiza","Felipe","Ana Júlia","João Pedro","Esther","Pietro","Lavínia","Anthony","Maitê","Daniel","Maria Cecília","Bryan","Maria Alice","Davi Lucca","Sarah","Leonardo","Elisa","Vicente","Liz","Eduardo","Yasmin","Gael","Isabelly","Antônio","Alícia","Vitor","Clara","Noah","Isis","Caio","Rebeca","João"]

const sobrenome = [ "Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira", "Rodrigues", "Almeida", "Nascimento", "Lima", "Araújo", "Fernandes", "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Alves", "Monteiro", "Mendes", "Barros", "Freitas", "Barbosa", "Pinto", "Moura", "Cavalcanti", "Dias", "Castro", "Campos", "Cardoso"]

const estado = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]

const cidade = ["São Paulo","Rio de Janeiro","Brasília","Salvador","Fortaleza","Belo Horizonte","Manaus","Curitiba","Recife","Goiânia","Belém","Porto Alegre","Guarulhos","Campinas","São Luís","São Gonçalo","Maceió","Duque de Caxias","Campo Grande","Natal","Teresina","São Bernardo do Campo","Nova Iguaçu","João Pessoa","Santo André","São José dos Campos","Jaboatão dos Guararapes","Osasco","Ribeirão Preto","Uberlândia","Sorocaba","Contagem","Aracaju","Feira de Santana","Cuiabá","Joinville","Aparecida de Goiânia","Juiz de Fora","Londrina","Ananindeua","Porto Velho","Niterói","Belford Roxo","Serra","Caxias do Sul","Campos dos Goytacazes","Macapá","Florianópolis","Vila Velha","São João de Meriti","Mauá","São José do Rio Preto","Mogi das Cruzes","Santos","Betim","Diadema","Maringá","Jundiaí","Campina Grande","Montes Claros","Rio Branco","Piracicaba","Carapicuíba","Olinda","Anápolis","Cariacica","Boa Vista","Bauru","Itaquaquecetuba","Caucaia","São Vicente","Vitória","Caruaru","Blumenau","Franca","Ponta Grossa","Canoas","Petrolina","Pelotas","Vitória da Conquista","Ribeirão das Neves","Uberaba","Paulista","Cascavel","Praia Grande","Guarujá","São José dos Pinhais","Taubaté","Petrópolis","Limeira","Santarém","Suzano","Mossoró","Camaçari","Palmas","Taboão da Serra","Várzea Grande","Santa Maria"]

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'Cidade', 'GenerateCity')
  DataSupplier.registerDataSupplier('public.text', 'Nome', 'GenerateName')
  DataSupplier.registerDataSupplier('public.text', 'Sobrenome', 'GenerateSurname')
  DataSupplier.registerDataSupplier('public.text', 'Nome e Sobrenome', 'GenerateNameSurname')
  DataSupplier.registerDataSupplier('public.text', 'Estado', 'GenerateState')
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}


export function onGenerateName (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = nome[Math.round(Math.random() * nome.length)]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onGenerateSurname (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = sobrenome[Math.round(Math.random() * sobrenome.length)]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onGenerateNameSurname (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = nome[Math.round(Math.random() * nome.length)] + " " + sobrenome[Math.round(Math.random() * sobrenome.length)]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onGenerateState (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = estado[Math.round(Math.random() * estado.length)]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onGenerateCity (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = cidade[Math.round(Math.random() * cidade.length)]
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}