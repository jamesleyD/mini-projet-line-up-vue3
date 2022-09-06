import axios from 'axios';

function getNbaPlayers() {
  try {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: { per_page: '25', page: '0' },
      headers: {
        'X-RapidAPI-Key': 'ea2c5ba97emsh40e845e08b4a853p137263jsn2c2b9ef8f542',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    };

    const res = axios.request(options);
    return res.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function getMeme() {
  try {
    const options = {
      method: 'GET',
      url: 'https://meme-api.herokuapp.com/gimme',
    };
    const res = await axios.request(options);
    return {
      author: res.data.author,
      title: res.data.title,
      img: res.data.url,
    };
  } catch (e) {
    console.log(e);
    return false;
  }
}

export { getMeme, getNbaPlayers };
