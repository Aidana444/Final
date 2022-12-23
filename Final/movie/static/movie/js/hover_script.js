const movie_titles = document.getElementsByClassName('movie_zagolovok');
const animation_titles = document.getElementsByClassName('animation_zagolovok');
const series_titles = document.getElementsByClassName('series_zagolovok');

let movie_poster = document.getElementById('movie_poster');
let animation_poster = document.getElementById('animation_poster');
let series_poster = document.getElementById('series_poster');

const movie_list = [
    {
        'image': 'https://s6.vcdn.biz/static/f/4718420871/image.jpg/pt/r700x1000x4',
        'title': 'Memory'
    },
    {
        'image': 'https://s5.vcdn.biz/static/f/4642050641/image.jpg/pt/r700x1000x4',
        'title': 'Fantastic Beasts: The Secrets of Dumbledore'
    },
    {
        'image': 'https://s6.vcdn.biz/static/f/2645179701/image.jpg/pt/r700x1000x4',
        'title': 'Another Round'
    },
    {
        'image': 'https://s4.vcdn.biz/static/f/4571259151/image.jpg/pt/r700x1000x4',
        'title': 'The Batman'
    },
    {
        'image': 'https://s2.vcdn.biz/static/f/4391572151/image.jpg/pt/r700x1000x4',
        'title': 'Blacklight'
    },
]

const animation_list = [
    {
        'image': 'https://s2.vcdn.biz/static/f/4465406621/image.jpg/pt/r700x1000x4',
        'title': 'Ella and the Little Sorcerer'
    },
    {
        'image': 'https://s8.vcdn.biz/static/f/3226115861/image.jpg/pt/r700x1000x4',
        'title': 'Trolls World Tour'
    },
    {
        'image': 'https://s5.vcdn.biz/static/f/2245886501/image.jpg/pt/r700x1000x4',
        'title': 'PAW Patrol'
    },
    {
        'image': 'https://s9.vcdn.biz/static/f/1748506401/image.jpg/pt/r700x1000x4',
        'title': 'Ninjago: Masters of Spinjitzu'
    },
    {
        'image': 'https://s7.vcdn.biz/static/f/2070741031/image.jpg/pt/r700x1000x4',
        'title': 'Rusty Rivets'
    },
]

const series_list = [
    {
        'image': 'https://s5.vcdn.biz/static/f/3450527501/image.jpg/pt/r700x1000x4',
        'title': 'The Walking Dead'
    },
    {
        'image': 'https://s4.vcdn.biz/static/f/2118078301/image.jpg/pt/r700x1000x4',
        'title': 'The War of the Worlds'
    },
    {
        'image': 'https://s9.vcdn.biz/static/f/3760019451/image.jpg/pt/r700x1000x4',
        'title': 'Angels'
    },
    {
        'image': 'https://s7.vcdn.biz/static/f/5127766531/image.jpg/pt/r700x1000x4',
        'title': 'The Dodger'
    },
    {
        'image': 'https://s5.vcdn.biz/static/f/3671567051/image.jpg/pt/r700x1000x4',
        'title': 'Bruce'
    },
]

for(let i = 0; i < movie_titles.length; i++) {
    for(let j = 0; j < movie_list.length; j++) {
        if (i === j) {
            movie_titles[i].addEventListener('mouseover', () => {
                movie_poster.src = movie_list[j]['image'];
            });
        }
    }
}

for(let i = 0; i < animation_titles.length; i++) {
    for(let j = 0; j < animation_list.length; j++) {
        if (i === j) {
            animation_titles[i].addEventListener('mouseover', () => {
                animation_poster.src = animation_list[j]['image'];
            });
        }
    }
}

for(let i = 0; i < series_titles.length; i++) {
    for(let j = 0; j < series_list.length; j++) {
        if (i === j) {
            series_titles[i].addEventListener('mouseover', () => {
                series_poster.src = series_list[j]['image'];
            });
        }
    }
}