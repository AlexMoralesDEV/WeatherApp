let chaveAPI = '2659d80276704b84b0b124807232311';
let botaoPesquisar = document.querySelector('.btn-busca');

botaoPesquisar.addEventListener('click', async (evento) => {
    let cidade = document.querySelector('#input-busca').value;

    if (!cidade) return;

    let dados = await criaLink(cidade);

    let temperatura = dados.current.temp_c;
    let velocidade = dados.current.wind_kph;
    let humidade = dados.current.humidity;
    let icone = dados.current.condition.icon;
    let condicao = dados.current.condition.text;

    if (dados) exibirDados(cidade, temperatura, velocidade, humidade, icone, condicao);
})

async function criaLink(cidade) {
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${chaveAPI}&q=${cidade}&aqi=no&lang=pt`;

    let resposta = await fetch(apiURL);

    if (resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
};

function exibirDados(cidade, temperatura, velocidade, humidade, icone, condicao) {
    let cidade_pag = document.querySelector('#cidade').innerHTML = cidade;
    let temperatura_pag = document.querySelector('#temperatura').innerHTML = `${temperatura}ºC`;
    let iconeCondicao_pag = document.querySelector('#icone-condicao').setAttribute('src', icone);
    let textoCondicao_pag = document.querySelector('#condicao').innerHTML = condicao;
    let humidade_pag = document.querySelector('#humidade').innerHTML = `${humidade}%`;
    let velocidade_do_vento = document.querySelector('#velocidade-do-vento').innerHTML = `${velocidade} km/h`;

}